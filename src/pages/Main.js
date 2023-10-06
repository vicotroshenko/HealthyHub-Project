import { MainInformation } from 'components/MainInformation/MainInformation';
import { MainMealAndRecommendedFood } from 'components/MainMealAndRecommendedFood/MainMealAndRecommendedFood';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/meals/operations';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getStatistic());
  }, [dispatch]);

  return (
    <section>
      <MainInformation />
      <MainMealAndRecommendedFood />
    </section>
  );
};

export default Main;
