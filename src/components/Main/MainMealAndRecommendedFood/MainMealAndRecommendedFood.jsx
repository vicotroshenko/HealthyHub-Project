import { MealOnMain } from 'components/Main/MealOnMain/MealOnMain';
import { RecommendedFoodOnMain } from 'components/Main/RecommendedFoodOnMain/RecommendedFoodOnMain';

import css from './MainMealAndRecommendedFood.module.css';

export const MainMealAndRecommendedFood = () => {
  return (
    <div className={css.inner_container}>
      <MealOnMain />
      <RecommendedFoodOnMain />
    </div>
  );
};
