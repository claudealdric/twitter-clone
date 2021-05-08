import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { reducer as counterReducer } from './slices/counter.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
