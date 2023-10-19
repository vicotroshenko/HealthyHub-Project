import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const initialState = {
	recommendedFood: [],
	isLoading: false,
	isLoadError: false,
};


const recommendedSlice = createSlice({
  name: 'recommended',
  initialState,
  extraReducers: {
    [operations.getRecommendedFood.pending](state, _action) {
      state.isLoading = true;
    },
    [operations.getRecommendedFood.fulfilled](state, action) {
      state.recommendedFood = action.payload;
      state.isLoading = false;
      state.isLoadError = false;
    },
    [operations.getRecommendedFood.rejected](state, _action) {
      state.isLoadError = true;
      state.isLoading = false;
    },
	}
});

export const recommendedReducer = recommendedSlice.reducer;