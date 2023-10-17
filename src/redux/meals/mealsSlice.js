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
  dashboardStatMonth: [],
  dashboardStatYear: [],
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
    [operations.getUserDay.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.getUserDay.fulfilled](state, action) {
      state.breakfast = action.payload.breakfast;
      state.lunch = action.payload.lunch;
      state.dinner = action.payload.dinner;
      state.snack = action.payload.snack;
      state.weight = action.payload.weight;
      state.date = action.payload.date;
      state.water = action.payload.water;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.getUserDay.rejected](state, _action) {
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
    [operations.updateDish.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.updateDish.fulfilled](state, action) {
      state.breakfast = action.payload.breakfast;
      state.lunch = action.payload.lunch;
      state.dinner = action.payload.dinner;
      state.snack = action.payload.snack;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.updateDish.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },

    [operations.addToMeal.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.addToMeal.fulfilled](state, action) {
      state[action.payload.name] = action.payload.data[action.payload.name];
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.addToMeal.rejected](state, _action) {
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
    [operations.getStatisticForMonth.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.getStatisticForMonth.fulfilled](state, action) {
      state.dashboardStatMonth = action.payload;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.getStatisticForMonth.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },

    [operations.getStatisticForYear.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.getStatisticForYear.fulfilled](state, action) {
      state.dashboardStatYear = action.payload;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.getStatisticForYear.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },
    [operations.deleteDishFromCurrentDay.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.deleteDishFromCurrentDay.fulfilled](state, action) {
      state[action.payload.name].filter(
        item => item._id === action.payload.id
      );
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.deleteDishFromCurrentDay.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },
  },
});

export const mealsReducer = mealsSlice.reducer;
