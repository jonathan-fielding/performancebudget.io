import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
// eslint-disable-next-line import/no-cycle
import { AppState } from '.';
import { calcBudget } from '../utils/budget-size';
import { add } from '../utils/add';
import calculateDefaultValues from '../utils/calculate-default-values';
import { BudgetTypes } from '../types/enums';
import { BudgetLineItem } from '../types/budget';

export interface BudgetState {
  budgetType: BudgetTypes | null;
  budgetValues: BudgetLineItem[];
  budgetSize: number;
  step: number;
  connectionSpeed: number;
  loadTime: number | null;
}

// Initial state
const initialState: BudgetState = {
  budgetType: null,
  budgetValues: [],
  budgetSize: 0,
  step: 1,
  connectionSpeed: 0,
  loadTime: null,
};

// Actual Slice
export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    // Action to set the budget type, resetting the values from constants
    setBudgetType(state: BudgetState, { payload }: { payload: BudgetTypes }) {
      state.budgetType = payload;
      state.budgetValues = calculateDefaultValues(payload, 0);
    },

    setBudgetValue(state: BudgetState, action) {
      const newBudgetValues: BudgetLineItem[] = state.budgetValues?.map(
        (budgetValue: BudgetLineItem) => {
          if (budgetValue.name === action.payload.name) {
            budgetValue.userValue = action.payload.value;
          }
          return budgetValue;
        }
      );

      state.budgetValues = newBudgetValues;
    },

    // Action to set the budget type
    setStep(state: BudgetState, action) {
      state.step = action.payload;
    },

    // Action to set the budget connection speed
    setConnectionSpeed(state: BudgetState, action) {
      state.connectionSpeed = action.payload;
      if (state.loadTime && state.loadTime > 0) {
        const budgetSize = calcBudget(state.connectionSpeed, action.payload);
        state.budgetSize = budgetSize;
        if (state.budgetType) {
          state.budgetValues = calculateDefaultValues(
            state.budgetType,
            budgetSize
          );
        }
      }
      return state;
    },

    // Action to set the budget load time
    setLoadTime(state: BudgetState, action) {
      state.loadTime = action.payload;
      if (state.connectionSpeed > 0) {
        const budgetSize = calcBudget(state.connectionSpeed, action.payload);
        state.budgetSize = budgetSize;
        if (state.budgetType) {
          state.budgetValues = calculateDefaultValues(
            state.budgetType,
            budgetSize
          );
        }
      }

      return state;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state: any, action: any) => {
      return {
        ...state,
        ...action.payload.budget,
      };
    },
  },
});

export const {
  setBudgetType,
  setStep,
  setConnectionSpeed,
  setBudgetValue,
  setLoadTime,
} = budgetSlice.actions;

export const selectBudgetType = (state: AppState) => state.budget.budgetType;
export const selectBudgetValues = (state: AppState) =>
  state.budget.budgetValues;
export const selectBudgetSize = (state: AppState) => state.budget.budgetSize;
export const selectTotalBytes = (state: AppState) =>
  state.budget.budgetValues
    ?.map((field: BudgetLineItem) => field.userValue)
    .reduce(add, 0);
export const selectStep = (state: AppState) => state.budget.step;
export const selectConnectionSpeed = (state: AppState) =>
  state.budget.connectionSpeed;
export const selectLoadTime = (state: AppState) => state.budget.loadTime;

export default budgetSlice.reducer;
