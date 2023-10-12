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
export const selectUserDashboardStatMonth = state => state.user.dashboardStatMonth;
export const selectUserDashboardStatYear = state => state.user.dashboardStatYear;

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

// export const selectStatisticDataForDashboardMonth = createSelector(
//   [selectUserDashboardStatMonth],
//   items => {
//     const data = items.reduce(
//       (acc, { date, weight, water, breakfast, lunch, dinner, snack }) => {
//         const calories = sumCalories(
//           sumCaloriesForMeal(breakfast),
//           sumCaloriesForMeal(lunch),
//           sumCaloriesForMeal(dinner),
//           sumCaloriesForMeal(snack)
//         );
//         const dataForDay = {
//           water,
//           weight,
//           date,
//           calories,
//         };
//         acc.push(dataForDay);

//         return acc;
//       },
//       []
//     );

//     function sumCaloriesForMeal(meal) {
//       return meal.reduce((acc, element) => (acc += element.calories), 0);
//     }
//     function sumCalories(firstM, secondM, thirdM, fourthM) {
//       return firstM + secondM + thirdM + fourthM;
//     }

//     return data;
//   }
// );

// export const selectStatisticDataForDashboardYear = createSelector(
//   [selectUserDashboardStatYear],
//   items => {
//     const data = items.reduce(
//       (acc, { date, weight, water, breakfast, lunch, dinner, snack }) => {
//         const calories = sumCalories(
//           sumCaloriesForMeal(breakfast),
//           sumCaloriesForMeal(lunch),
//           sumCaloriesForMeal(dinner),
//           sumCaloriesForMeal(snack)
//         );
//         const dataForDay = {
//           water,
//           weight,
//           date,
//           calories,
//         };
//         acc.push(dataForDay);

//         return acc;
//       },
//       []
//     );

//     function sumCaloriesForMeal(meal) {
//       return meal.reduce((acc, element) => (acc += element.calories), 0);
//     }
//     function sumCalories(firstM, secondM, thirdM, fourthM) {
//       return firstM + secondM + thirdM + fourthM;
//     }

//     return data;
//   }
// );
