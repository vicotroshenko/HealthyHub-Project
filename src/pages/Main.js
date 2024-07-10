import dateConvertor from 'helpers/dateConvertor';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { directLogOut } from 'redux/auth/authSlice';
import { selectAuthInform } from 'redux/auth/selectors';
import { logout } from 'redux/meals/mealsSlice';
import operationsMeal from 'redux/meals/operations';
import { selectUserData } from 'redux/meals/selectors';
import operationsRecommended from 'redux/recommended/operations';

import { Container } from 'components/Container/Container';
import { MainInformation } from 'components/Main/MainInformation/MainInformation';
import { MainMealAndRecommendedFood } from 'components/Main/MainMealAndRecommendedFood/MainMealAndRecommendedFood';

const Main = () => {
  const { isLoggedIn, user } = useSelector(selectAuthInform);
  const { date, isLoadErrorMessage } = useSelector(selectUserData);
  const { recommendedFood } = useSelector((state) => state.recommended);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let updateDataRef = useRef(true);

  useEffect(() => {
    const clearLocalStorStatus = isLoadErrorMessage === 401;
    if (clearLocalStorStatus) {
      dispatch(directLogOut());
      dispatch(logout());
      window.localStorage.removeItem('persist:auth');
      setTimeout(() => navigate('/singin'), 400);
    }
  }, [dispatch, isLoadErrorMessage, navigate]);

  useEffect(() => {
    const currentDate = dateConvertor(new Date());
    const mealDay = dateConvertor(new Date(date));
    const clearLocalStorStatus = isLoadErrorMessage === 401;

    if (
      (date === null || currentDate === mealDay) &&
      !clearLocalStorStatus &&
      updateDataRef.current
    ) {
      dispatch(operationsMeal.getUserDay());
      updateDataRef.current = false;
    }

    if (date !== null && currentDate !== mealDay && !clearLocalStorStatus) {
      dispatch(operationsMeal.addNewDay({ weight: user.weight }));
    }
  }, [dispatch, date, user.weight, isLoadErrorMessage]);

  useEffect(() => {
    if (isLoggedIn && recommendedFood.length === 0) {
      dispatch(operationsRecommended.getRecommendedFood());
    }
  }, [isLoggedIn, dispatch, recommendedFood.length]);

  return (
    <Container>
      <MainInformation />
      <MainMealAndRecommendedFood />
    </Container>
  );
};

export default Main;
