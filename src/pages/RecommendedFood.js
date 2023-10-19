import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import listFood from '../images/png/recommendedFood/recommended-food.png';
import { RecommendedFoodView } from 'components/RecomendedFoodView/RecomendedFoodView';

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
