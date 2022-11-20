import { createSlice } from "@reduxjs/toolkit";
import { AppState } from ".";
import { HYDRATE } from "next-redux-wrapper";

enum BudgetTypes {
  cwv = 'cwv',
  asset = 'asset',
}

// Type for our state
export interface BudgetState {
  budgetType: BudgetTypes | null;
  step: number;
  connectionSpeed: number;
}

// Initial state
const initialState: BudgetState = {
  budgetType: null,
  step: 1,
  connectionSpeed: 0
};

// Actual Slice
export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {

    // Action to set the budget type
    setBudgetType(state, action) {
      state.budgetType = action.payload;
    },

    // Action to set the budget type
    setStep(state, action) {
      state.step = action.payload;
    },

    // Action to set the budget type
    setConnectionSpeed(state, action) {
      state.connectionSpeed = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.budget,
        };
      },
    },

  },
});

export const { setBudgetType, setStep, setConnectionSpeed } = budgetSlice.actions;

export const selectBudgetType = (state: AppState) => state.budget.budgetType;
export const selectStep = (state: AppState) => state.budget.step;
export const selectConnectionSpeed = (state: AppState) => state.budget.connectionSpeed;

export default budgetSlice.reducer;