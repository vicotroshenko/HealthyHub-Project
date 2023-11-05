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
    avatarURL: null,
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
    deleteError(state, _action) {
      state.isAuthError = false;
    }
  },
  extraReducers: {
    [operations.singup.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.singup.fulfilled](state, _action) {
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
      state.isLoggedIn = false;
      state.user = initialState.user;
      state.isAuthError = false;
      state.token = null;
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
    [operations.updateAvatars.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.updateAvatars.fulfilled](state, action) {
      state.user.avatarURL = action.payload.avatarURL;
      state.isLoading = false;
      state.isAuthError = false;
    },
    [operations.updateAvatars.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    [operations.updateSetting.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.updateSetting.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.age = action.payload.age;
      state.user.height = action.payload.height;
      state.user.weight = action.payload.weight;
      state.user.gender = action.payload.gender;
      state.user.activity = action.payload.activity;
      state.isLoading = false;
      state.isAuthError = false;
    },
    [operations.updateSetting.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    [operations.getCurrentUser.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.getCurrentUser.fulfilled](state, action) {
      state.user.name = action.payload.data.name;
      state.user.age = action.payload.data.age;
      state.user.height = action.payload.data.height;
      state.user.weight = action.payload.data.weight;
      state.user.gender = action.payload.data.gender;
      state.user.activity = action.payload.data.activity;
      state.user.avatarURL = action.payload.data.avatarURL;
      state.isLoading = false;
      state.isAuthError = false;
    },
    [operations.getCurrentUser.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { updateUser, deleteError } = authSlice.actions;
