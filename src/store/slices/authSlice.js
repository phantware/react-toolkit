import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.user = action.payload.email
      state.token = 'hello'
      state.isAuthenticated = true
    },
    getUser: (state, action) => {
      state.value -= 1
    },
    logout: (state) => {
      state.token = null
      state.isAuthenticated = false
      state.user = null
    },
  },
})

export const { authUser, getUser, logout } = authSlice.actions

export default authSlice.reducer
