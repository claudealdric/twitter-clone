import { createSlice } from '@reduxjs/toolkit'

import history from 'utils/history'
import { AppThunk } from 'data/store'
import { User } from 'interfaces'
import { usersEndpoint } from 'api'

const initialState: User = { handle: '', fullName: '', email: '' }

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { ...initialState },
    loading: false,
  },
  reducers: {
    logOut: (state) => {
      state.user = { ...initialState }
      history.push('/auth/login')
    },
    userLoading: (state) => {
      if (!state.loading) {
        state.loading = true
      }
    },
    userReceived: (state, action) => {
      if (state.loading) {
        state.user = action.payload
        state.loading = false
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
