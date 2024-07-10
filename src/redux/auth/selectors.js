import { createSelector } from '@reduxjs/toolkit';

export const selectUserSettings = (state) => state.auth.user;
export const selectUserGoal = (state) => state.auth.user.goal;
export const selectAuthInform = (state) => state.auth;

const selectUserActivity = (state) => state.auth.user.activity;
const selectUserWeight = (state) => state.auth.user.weight;
const selectUserHeight = (state) => state.auth.user.height;
const selectUserAge = (state) => state.auth.user.age;
const selectUserGender = (state) => state.auth.user.gender;

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
        let bmrM =
          (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) * activity;
        return Number(bmrM.toFixed(2));
      case 'female':
        let bmrW =
          (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) * activity;
        return Number(bmrW.toFixed(2));
      default:
        console.log('gender do not found');
    }
  }
);

export const selectElementsByGoal = createSelector(
  [selectCaloriesConsuming],
  (calories) => {
    function getGoal(elemenet, goalsName) {
      let numbersAccordingName = {};
      if (goalsName === 'Lose fat') {
        numbersAccordingName = { protein: 25, fat: 20 };
      } else if (goalsName === 'Maintain') {
        numbersAccordingName = { protein: 30, fat: 20 };
      } else if (goalsName === 'Gain Muscle') {
        numbersAccordingName = { protein: 20, fat: 25 };
      } else {
        numbersAccordingName = {};
      }

      let protein =
        Math.trunc((elemenet / 100) * numbersAccordingName.protein * 100) / 100;
      let fat =
        Math.trunc((elemenet / 100) * numbersAccordingName.fat * 100) / 100;
      let carbonohidrates =
        Math.trunc((elemenet - (protein + fat)) * 100) / 100;

      return {
        protein,
        fat,
        carbonohidrates,
      };
    }

    return {
      loseFatGoal: getGoal(calories, 'Lose fat'),
      maintainGoal: getGoal(calories, 'Maintain'),
      gainMusculGoal: getGoal(calories, 'Gain Muscle'),
    };
  }
);
