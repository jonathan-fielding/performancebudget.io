import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';
import { HYDRATE } from 'next-redux-wrapper';
import clone from 'just-clone';
import { calcBudget } from '../utils/budget-size';
import { add } from '../utils/add';
import { calculateDefaultValues } from '../utils/calculate-default-values';

export enum BudgetTypes {
  cwv = 'cwv',
  asset = 'asset',
}

export interface BudgetLineItem {
  name: string;
  suggested: number;
  min: number;
  max: number;
  step?: number;
  userValue?: number;
  unit: string;
}

export interface BudgetLineItems {
  [BudgetTypes.asset]: BudgetLineItem[];
  [BudgetTypes.cwv]: BudgetLineItem[];
}

const BUDGET_LINE_ITEMS: BudgetLineItems = {
  asset: [
    { name: 'html', suggested: 2500, min: 0, max: 5000, unit: 'kb' },
    { name: 'css', suggested: 100, min: 0, max: 500, unit: 'kb' },
    { name: 'javascript', suggested: 100, min: 0, max: 1, unit: 'kb' },
    { name: 'images', suggested: 100, min: 0, max: 1, unit: 'kb' },
    { name: 'video', suggested: 100, min: 0, max: 1, unit: 'kb' },
    { name: 'fonts', suggested: 100, min: 0, max: 1, unit: 'kb' },
  ],
  cwv: [
    { name: 'lcp', suggested: 2500, min: 0, max: 5000, unit: 'kb' },
    { name: 'fid', suggested: 100, min: 0, max: 500, unit: 'kb' },
    { name: 'cls', suggested: 0.1, min: 0, max: 1, step: 0.01, unit: 'kb' },
    { name: 'inp', suggested: 0.2, min: 0, max: 1, step: 0.01, unit: 'kb' },
  ],
};
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
        state.budgetSize = calcBudget(state.connectionSpeed, action.payload);
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
