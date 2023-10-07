import { MainInformation } from 'components/MainInformation/MainInformation';
import { MainMealAndRecommendedFood } from 'components/MainMealAndRecommendedFood/MainMealAndRecommendedFood';

const Main = () => {
  return (
    <section>
      <MainInformation />
      <MainMealAndRecommendedFood />
    </section>
  );
};

export default Main;
