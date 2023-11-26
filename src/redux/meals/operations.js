import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthyhub-backend.onrender.com/';

const set = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const addNewDay = createAsyncThunk(
  'user/addDay',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    set(persistedToken);
    try {
      const response = await axios.post('/api/user', credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getUserDay = createAsyncThunk('user/getDay', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  set(persistedToken);
  try {
    const response = await axios.get('/api/user');

    if (!response.data[response.data.length - 1]) {
      return {
        date: 'no date',
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: [],
        weight: 0,
        water: 0,
      };
    }
    return response.data[response.data.length - 1];
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.status);
  }
});

const updateWeight = createAsyncThunk(
  'user/updateWeight',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    set(persistedToken);
    try {
      const response = await axios.put('/api/user/weight', credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateWater = createAsyncThunk(
  'user/updateWater',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    set(persistedToken);
    try {
      const response = await axios.put('/api/user/water-intake', credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addToMeal = createAsyncThunk(
  'user/addToMeal',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    set(persistedToken);

    const { dish, name } = credentials;
    try {
      const response = await axios.post(`/api/user/food-intake/${name}`, dish);

      return { data: response.data, name };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getStatistic = createAsyncThunk(
  'user/getStatistic',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    set(persistedToken);
    try {
      const response = await axios.get('/api/user/statistic');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

const getStatisticForMonth = createAsyncThunk(
  'user/getStatisticForMonth',
  async ({ month, year }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    const params = `month=${month}&year=${year}`;

    set(persistedToken);
    try {
      const response = await axios.get(`/api/user/statistic?${params}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getStatisticForYear = createAsyncThunk(
  'user/getStatisticForYear',
  async ({ year }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    set(persistedToken);
    try {
      const response = await axios.get(
        `/api/user/statistic?month=0&year=${year}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateDish = createAsyncThunk(
  'user/updateDish',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    set(persistedToken);
    const dishName = credentials.name.toLowerCase();
    try {
      const response = await axios.put(
        `/api/user/food-intake/${dishName}/${credentials.id}`,
        credentials.dish
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteDishFromCurrentDay = createAsyncThunk(
  'user/deletDish',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    set(persistedToken);
    const dishName = credentials.name.toLowerCase();

    try {
      await axios.delete(`/api/user/food-intake/${dishName}/${credentials.id}`);

      return { name: dishName, id: credentials.id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operationsMeal = {
  addNewDay,
  getUserDay,
  updateWeight,
  updateWater,
  addToMeal,
  getStatistic,
  updateDish,
  deleteDishFromCurrentDay,
  getStatisticForMonth,
  getStatisticForYear,
};

export default operationsMeal;
