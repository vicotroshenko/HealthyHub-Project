import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const initialState = {
  waterGoal: 1500,
  water: 0,
  date: null,
  weight: null,
  breakfast: [],
  lunch: [],
  dinner: [],
  snack: [],
  statistic: [],
  isLoading: null,
  isLoadError: null,
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  extraReducers: {
    [operations.addNewDay.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.addNewDay.fulfilled](state, action) {
      state.breakfast = [];
      state.lunch = [];
      state.dinner = [];
      state.snack = [];
      state.statistic = [];
      state.weight = action.payload.weight;
      state.date = action.payload.date;
      state.waterAmount = null;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.addNewDay.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },

    [operations.updateWeight.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.updateWeight.fulfilled](state, action) {
      state.wight = action.payload.weight;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.updateWeight.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },

    [operations.updateWater.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.updateWater.fulfilled](state, action) {
      state.water = action.payload.water;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.updateWater.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },

    [operations.addBreakfast.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.addBreakfast.fulfilled](state, action) {
      state.breakfast = action.payload.breakfast;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.addBreakfast.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },

    [operations.addLunch.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.addLunch.fulfilled](state, action) {
      state.lunch = action.payload.lunch;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.addLunch.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },

    [operations.addDinner.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.addDinner.fulfilled](state, action) {
      state.dinner = action.payload.dinner;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.addDinner.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },

    [operations.addSnack.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.addSnack.fulfilled](state, action) {
      state.snack = action.payload.snack;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.addSnack.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },

    [operations.getStatistic.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.getStatistic.fulfilled](state, action) {
      state.statistic = action.payload;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.getStatistic.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },
  },
});

export const mealsReducer = mealsSlice.reducer;
