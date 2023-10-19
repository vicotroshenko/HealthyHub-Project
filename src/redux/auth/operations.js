import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthyhub-backend.onrender.com/';

const set = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unset = () => {
  axios.defaults.headers.common.Authorization = ``;
};



const singup = createAsyncThunk(
  'auth/singup',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/register', credentials);
      set(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {

    const response = await axios.post('/api/auth/login', credentials);
    set(response.data.token);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    set(persistedToken);
    
    await axios.post('/api/auth/logout');
    console.log('logout');
    unset();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        console.log('You need enter in your account');
        return thunkAPI.rejectWithValue();
      }
      set(persistedToken);
      const response = await axios.get('/api/auth/current');
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateSetting = createAsyncThunk(
  'auth/setting',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        console.log('You need enter in your account');
        return thunkAPI.rejectWithValue();
      }
      set(persistedToken);
      const response = await axios.patch('/api/settings', credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateWeight = createAsyncThunk(
  'auth/updateUserWeight',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        console.log('You need enter in your account');
        return thunkAPI.rejectWithValue();
      }

      set(persistedToken);

      const response = await axios.patch('/api/settings/weight', credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateGoal = createAsyncThunk(
  'auth/updateUserGoal',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        console.log('You need enter in your account');
        return thunkAPI.rejectWithValue();
      }
      set(persistedToken);

      const response = await axios.patch('/api/settings/goal', credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateAvatars = createAsyncThunk(
  'auth/updateUserAvatar',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        console.log('You need enter in your account');
        return thunkAPI.rejectWithValue();
      }
      set(persistedToken);
      console.log(credentials);

      const response = await axios.patch('/api/settings/avatars', credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const operations = {
  singup,
  logIn,
  getCurrentUser,
  logOut,
  updateSetting,
  updateWeight,
  updateGoal,
  updateAvatars,
};

export default operations;
