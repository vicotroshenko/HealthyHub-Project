import SharedLayout from 'components/SharedLayout/SharedLayout';
import Activity from 'pages/Activity';
import Age from 'pages/Age';
import BodyParameters from 'pages/BodyParameters';
import Goal from 'pages/Goal';
import Home from 'pages/Home';
import Main from 'pages/Main';
import RecommendedFood from 'pages/RecommendedFood';
import Setting from 'pages/Setting';
import SignIn from 'pages/SignIn';
import SingUp from 'pages/SingUp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRout from 'routes/ProtextedRout';
import dateConvertor from '../../helpers/dateConvertor';
import operations from 'redux/meals/operations';
import { selectUserData } from 'redux/meals/selectors';
import { selectAuthInform } from 'redux/auth/selectors';
import Diary from 'pages/Diary';
import Statistic from 'pages/Statistic';

export const App = () => {
  const { isLoggedIn, user } = useSelector(selectAuthInform);
  const { date, isLoadError } = useSelector(selectUserData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const currentDate = dateConvertor(new Date());
  const mealDay = dateConvertor(new Date(date));

  useEffect(() => {
    if (
      (isLoggedIn && pathname === '/singin') ||
      (isLoggedIn && pathname.includes('singup')) ||
      (isLoggedIn && pathname === '/')
    ) {
      navigate('/');
    } 
  }, [isLoggedIn, navigate, pathname]);

  useEffect(() => {
    if (mealDay !== currentDate) {
      dispatch(operations.addNewDay({ weight: user.weight }));
    }
    if (isLoadError) {
      dispatch(operations.getUserDay());
    }
  }, [mealDay, user, currentDate, dispatch, isLoadError]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>

      <Route
        index
        element={
          <ProtectedRout isLoggedIn={isLoggedIn}>
            <Main />
          </ProtectedRout>
        }
      />
      <Route path="/singup" element={<SingUp />}>
        <Route path="goal" element={<Goal />} />
        <Route path="age" element={<Age />} />
        <Route path="body-parameters" element={<BodyParameters />} />
        <Route path="activity" element={<Activity />} />
      </Route>
      <Route path="/singin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
        <Route
          path="/recommended"
          element={
            <ProtectedRout isLoggedIn={isLoggedIn}>
              <RecommendedFood />
            </ProtectedRout>
          }
        />

        <Route
          path="/setting"
          element={
            <ProtectedRout isLoggedIn={isLoggedIn}>
              <Setting />
            </ProtectedRout>
          }
        />

        <Route
          path="/diary"
          element={
            <ProtectedRout isLoggedIn={isLoggedIn}>
              <Diary />
            </ProtectedRout>
          }
        />

        <Route
          path="/statistic"
          element={
            <ProtectedRout isLoggedIn={isLoggedIn}>
              <Statistic />
            </ProtectedRout>
          }
        />
      </Route>
    </Routes>
  );
};
