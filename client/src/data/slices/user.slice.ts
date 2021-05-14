import { createSlice } from '@reduxjs/toolkit'

import { AppThunk } from 'data/store'
import { usersEndpoint } from 'api'

enum UserLoadingStates {
  pending = 'pending',
  idle = 'idle',
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { handle: '', fullName: '' },
    loading: UserLoadingStates.idle,
  },
  reducers: {
    userLoading: (state) => {
      if (state.loading === UserLoadingStates.idle) {
        state.loading = UserLoadingStates.pending
      }
    },
    userReceived: (state, action) => {
      if (state.loading === UserLoadingStates.pending) {
        state.user = action.payload
        state.loading = UserLoadingStates.idle
      }
    },
  },
})

// Exports
export const { reducer } = userSlice
export const { userLoading, userReceived } = userSlice.actions

// Thunks
export const setUser = (handle: string): AppThunk => async (dispatch) => {
  dispatch(userLoading())
  const { data } = await usersEndpoint.get(`/${handle}`)
  dispatch(userReceived(data))
}
