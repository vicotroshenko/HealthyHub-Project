import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthyhub-backend.onrender.com/';

const set = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getRecommendedFood = createAsyncThunk(
  'recommended/getRecommendedFood',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    set(persistedToken);
    try {
      const respose = await axios.get('/api/recommended-food');

      return respose.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operationsRecommended = {
  getRecommendedFood,
};

export default operationsRecommended;
