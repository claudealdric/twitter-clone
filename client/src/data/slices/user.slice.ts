import { createSlice } from '@reduxjs/toolkit'

import history from 'utils/history'
import { AppThunk } from 'data/store'
import { usersEndpoint } from 'api'

enum UserLoadingStates {
  pending = 'pending',
  idle = 'idle',
}

const initialState = { handle: '', fullName: '' }

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { ...initialState },
    loading: UserLoadingStates.idle,
  },
  reducers: {
    logOut: (state) => {
      state.user = { ...initialState }
      history.push('/auth/login')
    },
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
export const { logOut, userLoading, userReceived } = userSlice.actions

// Thunks
export const setUser = (handle: string): AppThunk => async (dispatch) => {
  dispatch(userLoading())
  const { data } = await usersEndpoint.get(`/${handle}`)
  dispatch(userReceived(data))
}
