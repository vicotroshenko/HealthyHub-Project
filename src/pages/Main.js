import { Container } from 'components/Container/Container';
import { MainInformation } from 'components/Main/MainInformation/MainInformation';
import { MainMealAndRecommendedFood } from 'components/Main/MainMealAndRecommendedFood/MainMealAndRecommendedFood';
import { Preloader } from 'components/Preloader/Preloader';
import dateConvertor from 'helpers/dateConvertor';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthInform } from 'redux/auth/selectors';
import operationsMeal from 'redux/meals/operations';
import { selectUserData } from 'redux/meals/selectors';
import operationsRecommended from 'redux/recommended/operations';

const Main = () => {
  const { isLoggedIn, user } = useSelector(selectAuthInform);
  const { date, isLoadError, isLoading } = useSelector(selectUserData);
  const { recommendedFood } = useSelector(state => state.recommended);

  const dispatch = useDispatch();
  
  useEffect(() => {
    const currentDate = dateConvertor(new Date());
    const mealDay = dateConvertor(new Date(date));
    if (mealDay !== currentDate && !isLoadError) {
      dispatch(operationsMeal.addNewDay({ weight: user.weight }));
    }
    if (isLoadError && isLoggedIn) {
      dispatch(operationsMeal.getUserDay());
    }
  }, [date, user, dispatch, isLoadError, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && recommendedFood.length === 0) {
      dispatch(operationsRecommended.getRecommendedFood());
    }
  }, [isLoggedIn, dispatch, recommendedFood.length]);

  return (
    <Container>
      {isLoading && <Preloader />}
      <MainInformation />
      <MainMealAndRecommendedFood />
    </Container>
  );
};

export default Main;
