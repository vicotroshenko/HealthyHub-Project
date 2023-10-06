import { MealOnMain } from 'components/MealOnMain/MealOnMain';
import { RecommendedFoodOnMain } from 'components/RecommendedFoodOnMain/RecommendedFoodOnMain';
import style from './MainMealAndRecommendedFood.module.css';

export const MainMealAndRecommendedFood = () => {
  return (
    <div className={style.container}>
      <div className={style.inner_container}>
        <MealOnMain />
        <RecommendedFoodOnMain />
      </div>
    </div>
  );
};
