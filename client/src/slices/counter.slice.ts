import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from '../store'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (count: number) => count + 1,
    decrement: (count: number) => count - 1,
  },
})

export const { reducer } = counterSlice
export const { increment, decrement } = counterSlice.actions

// Thunks
export const incrementAsync = (): AppThunk => (dispatch) => {
  setTimeout(() => dispatch(increment()), 1000)
}

export const decrementAsync = (): AppThunk => (dispatch) => {
  setTimeout(() => dispatch(decrement()), 1000)
}
