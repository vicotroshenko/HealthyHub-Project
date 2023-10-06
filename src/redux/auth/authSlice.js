import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
    gender: null,
    age: null,
    weight: null,
    height: null,
    goal: null,
    activity: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isAuthError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers: {
    [operations.singup.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.singup.fulfilled](state, _action) {
      state.user = initialState.user;
      state.isLoading = false;
      state.isAuthError = false;
    },
    [operations.singup.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    [operations.logIn.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.logIn.fulfilled](state, action) {
      state.user = action.payload.data;
      state.token = action.payload.token;
      state.user.password = null;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isAuthError = false;
    },
    [operations.logIn.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    [operations.logOut.fulfilled](state, _action) {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
      state.isAuthError = false;
    },
    [operations.updateGoal.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.updateGoal.fulfilled](state, action) {
      state.user.goal = action.payload.goal;
      state.isLoading = false;
      state.isAuthError = false;
    },
    [operations.updateGoal.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    [operations.updateWeight.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.updateWeight.fulfilled](state, action) {
      state.user.weight = action.payload.weight;
      state.isLoading = false;
      state.isAuthError = false;
    },
    [operations.updateWeight.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { updateUser } = authSlice.actions;
