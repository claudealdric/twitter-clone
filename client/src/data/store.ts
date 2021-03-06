import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { reducer as userReducer } from './slices/user.slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
