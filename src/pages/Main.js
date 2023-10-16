import { Container } from 'components/Container/Container';
import { MainInformation } from 'components/Main/MainInformation/MainInformation';
import { MainMealAndRecommendedFood } from 'components/Main/MainMealAndRecommendedFood/MainMealAndRecommendedFood';
import { Preloader } from 'components/Preloader/Preloader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/meals/operations';


const Main = () => {
  const { isLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(operations.getStatistic());
  }, [dispatch]);
  
  return (
    <Container>
      {isLoading && <Preloader/>}
      <MainInformation />
      <MainMealAndRecommendedFood />
    </Container>
  );
};

export default Main;
