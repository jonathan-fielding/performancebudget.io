import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '.';
import { HYDRATE } from 'next-redux-wrapper';
import clone from 'just-clone';

export enum BudgetTypes {
  cwv = 'cwv',
  asset = 'asset',
}

interface BudgetLineItem {
  name: string;
  suggested: number;
  min: number;
  max: number;
  step?: number;
  userValue?: number;
  unit: string;
}

const CWV_BUDGET_LINE_ITEMS: BudgetLineItem[] = [
  { name: 'lcp', suggested: 2500, min: 0, max: 5000, unit: 'kb' },
  { name: 'fid', suggested: 100, min: 0, max: 500, unit: 'kb' },
  { name: 'cls', suggested: 0.1, min: 0, max: 1, step: 0.01, unit: 'kb' },
  { name: 'inp', suggested: 0.2, min: 0, max: 1, step: 0.01, unit: 'kb' },
];

const ASSET_BUDGET_LINE_ITEMS: BudgetLineItem[] = [
  { name: 'html', suggested: 2500, min: 0, max: 5000, unit: 'kb' },
  { name: 'css', suggested: 100, min: 0, max: 500, unit: 'kb' },
  { name: 'javascript', suggested: 100, min: 0, max: 1, unit: 'kb' },
  { name: 'images', suggested: 100, min: 0, max: 1, unit: 'kb' },
  { name: 'video', suggested: 100, min: 0, max: 1, unit: 'kb' },
  { name: 'fonts', suggested: 100, min: 0, max: 1, unit: 'kb' },
];

export interface BudgetState {
  budgetType: BudgetTypes | null;
  budgetValues: BudgetLineItem[];
  step: number;
  connectionSpeed: number;
}

// Initial state
const initialState: BudgetState = {
  budgetType: null,
  budgetValues: [],
  step: 1,
  connectionSpeed: 0,
};

// Actual Slice
export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    // Action to set the budget type, resetting the values from constants
    setBudgetType(state: BudgetState, action) {
      console.log(state, action);
      state.budgetType = action.payload;

      switch (action.payload) {
        case BudgetTypes.cwv:
          state.budgetValues = clone(CWV_BUDGET_LINE_ITEMS).map((lineItem) => {
            lineItem.userValue = lineItem.suggested;
            return lineItem;
          });
          break;
        case BudgetTypes.asset:
          state.budgetValues = clone(CWV_BUDGET_LINE_ITEMS).map((lineItem) => {
            lineItem.userValue = lineItem.suggested;
            return lineItem;
          });
          console.log(state);
          break;
      }
    },

    setBudgetValue(state: BudgetState, action) {
      console.log(action.payload.name);
      const newBudgetValues: BudgetLineItem[] = state.budgetValues?.map(
        (budgetValue: BudgetLineItem) => {
          if (budgetValue.name === action.payload.name) {
            console.log('change', action.payload.value);
            budgetValue.userValue = action.payload.value;
          }
          return budgetValue;
        }
      );

      console.log('new', newBudgetValues);

      state.budgetValues = newBudgetValues;
    },

    // Action to set the budget type
    setStep(state: BudgetState, action) {
      state.step = action.payload;
    },

    // Action to set the budget type
    setConnectionSpeed(state: BudgetState, action) {
      state.connectionSpeed = action.payload;
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

export const { setBudgetType, setStep, setConnectionSpeed, setBudgetValue } =
  budgetSlice.actions;

export const selectBudgetType = (state: AppState) => state.budget.budgetType;
export const selectBudgetValues = (state: AppState) =>
  state.budget.budgetValues;
export const selectStep = (state: AppState) => state.budget.step;
export const selectConnectionSpeed = (state: AppState) =>
  state.budget.connectionSpeed;

export default budgetSlice.reducer;
