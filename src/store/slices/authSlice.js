import { createSlice } from '@reduxjs/toolkit'

const AUTH_KEY = 'auth'

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY))
  } catch (error) {
    console.error(error)
    return null
  }
}

const initialState = {
  isAuth: false,
  id: 0,
  email: '',
  access: '',
  refresh: '',
  first_name: '',
  username: '',
  last_name: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState: getAuthFromLocalStorage() ?? initialState,
  reducers: {
    setAuth(state, action) {
      const payload = action.payload ?? initialState
      state.isAuth = !state.isAuth
      state.id = payload.id
      state.email = payload.email
      state.username = payload.username
      state.first_name = payload.first_name
      state.last_name = payload.last_name
      localStorage.setItem(AUTH_KEY, JSON.stringify(state))
    },
    setTokens(state, action) {
      const payload = action.payload ?? initialState
      state.access = payload.access
      // state.refresh = payload.refresh;
    },
  },
})
export const { setAuth, setTokens } = authSlice.actions
export const authReducer = authSlice.reducer