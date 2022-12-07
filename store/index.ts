import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { budgetSlice } from './budget-slice';
import { resourcesSlice } from './resourcesSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      [budgetSlice.name]: budgetSlice.reducer,
      [resourcesSlice.name]: resourcesSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
