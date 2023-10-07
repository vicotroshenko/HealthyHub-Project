import { createSelector } from '@reduxjs/toolkit';
import dateConvertor from 'helpers/dateConvertor';

const daysElementPattern = {
  calories: 0,
  carbohydrates: 0,
  fat: 0,
  protein: 0,
};

export const selectUserData = state => state.user;
export const selectUserStatistic = state => state.user.statistic;

export const selectStatisticsForCurrentDay = createSelector(
  [selectUserStatistic],
  statistic => {
    const statisticForCurrentDay = statistic?.reduce((acc, item) => {
      const date = dateConvertor(new Date(item.date));
      const dateCurrent = dateConvertor(new Date());
      if (date !== dateCurrent) {
        return acc;
      } else {
        return item;
      }
    }, {});
    return statisticForCurrentDay;
  }
);

export const selectStatisticBreakfast = createSelector(
  [selectStatisticsForCurrentDay],
  ({ breakfast }) => {
    if (!breakfast) {
      return daysElementPattern;
    }

    return breakfast?.reduce((acc, item) => {
      if (item) {
        return item;
      } else {
        return acc;
      }
    }, daysElementPattern);
  }
);

export const selectStatisticLunch = createSelector(
  [selectStatisticsForCurrentDay],
  ({ lunch }) => {
    if (!lunch) {
      return daysElementPattern;
    }

    return lunch?.reduce((acc, item) => {
      if (item) {
        return item;
      } else {
        return acc;
      }
    }, daysElementPattern);
  }
);

export const selectStatisticDinner = createSelector(
  [selectStatisticsForCurrentDay],
  ({ dinner }) => {
    if (!dinner) {
      return daysElementPattern;
    }

    return dinner?.reduce((acc, item) => {
      if (item) {
        return item;
      } else {
        return acc;
      }
    }, daysElementPattern);
  }
);

export const selectStatisticSnack = createSelector(
  [selectStatisticsForCurrentDay],
  ({ snack }) => {
    if (!snack) {
      return daysElementPattern;
    }

    return snack?.reduce((acc, item) => {
      if (item) {
        return item;
      } else {
        return acc;
      }
    }, daysElementPattern);
  }
);

export const selectStatisticsForCurrentDayAllElem = createSelector(
  [selectStatisticsForCurrentDay],
  ({ breakfast, lunch, dinner, snack }) => {
    const breakfastElem = breakfast?.reduce((__, item) => {
      return item;
    }, {});
    const lunchfastElem = lunch?.reduce((__, item) => {
      return item;
    }, {});
    const dinnerElem = dinner?.reduce((__, item) => {
      return item;
    }, {});
    const snackElem = snack?.reduce((__, item) => {
      return item;
    }, {});

    function summarize(elemenet) {
      if (breakfastElem || lunchfastElem || dinnerElem || snackElem) {
        const sum =
          breakfastElem[elemenet] +
          lunchfastElem[elemenet] +
          dinnerElem[elemenet] +
          snackElem[elemenet];
        return sum;
      } else {
        return 0;
      }
    }
    return {
      calories: summarize('calories'),
      carbohydrates: summarize('carbohydrates'),
      fat: summarize('fat'),
      protein: summarize('protein'),
    };
  }
);
