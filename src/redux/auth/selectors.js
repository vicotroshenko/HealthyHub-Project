import { createSelector } from '@reduxjs/toolkit';

export const selectUserSettings = state => state.auth.user;
export const selectUserGoal = state => state.auth.user.goal;
export const selectAuthInform = state => state.auth;

const selectUserActivity = state => state.auth.user.activity;
const selectUserWeight = state => state.auth.user.weight;
const selectUserHeight = state => state.auth.user.height;
const selectUserAge = state => state.auth.user.age;
const selectUserGender = state => state.auth.user.gender;

export const selectCaloriesConsuming = createSelector(
  [
    selectUserActivity,
    selectUserWeight,
    selectUserHeight,
    selectUserAge,
    selectUserGender,
  ],
  (activity, weight, height, age, gender) => {
    switch (gender) {
      case 'male':
        const bmrM =
          (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) * activity;
        return Number(bmrM.toFixed(2));
      case 'female':
        const bmrW =
          (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) * activity;
        return Number(bmrW.toFixed(2));
      default:
        console.log('gender do not found');
    }
  }
);

export const selectLoseFat = createSelector(
  [selectCaloriesConsuming],
  calories => {
    const protein = Number(((calories / 100) * 25).toFixed(2));
    const fat = Number(((calories / 100) * 20).toFixed(2));
    const carbonohidrates = Number(calories - (protein + fat).toFixed(2));

    return {
      protein,
      fat,
      carbonohidrates,
    };
  }
);

export const selectMaintain = createSelector(
  [selectCaloriesConsuming],
  calories => {
    const protein = Number(((calories / 100) * 30).toFixed(2));
    const fat = Number(((calories / 100) * 20).toFixed(2));
    const carbonohidrates = Number(calories - (protein + fat).toFixed(2));

    return {
      protein,
      fat,
      carbonohidrates,
    };
  }
);

export const selectGainMuscle = createSelector(
  [selectCaloriesConsuming],
  calories => {
    const protein = Number(((calories / 100) * 20).toFixed(2));
    const fat = Number(((calories / 100) * 25).toFixed(2));
    const carbonohidrates = Number(calories - (protein + fat).toFixed(2));

    return {
      protein,
      fat,
      carbonohidrates,
    };
  }
);
