import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { RecommendedFoodView } from 'components/RecomendedFoodView/RecomendedFoodView';

import listFood from '../images/png/recommendedFood/recommended-food.png';

const RecommendedFood = () => {
  return (
    <>
      <h1>Recommended Food</h1>
      <AuthContainer image={listFood}>
        <RecommendedFoodView />
      </AuthContainer>
    </>
  );
};

export default RecommendedFood;
