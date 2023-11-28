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
import Diary from 'pages/Diary';
import Statistic from 'pages/Statistic';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRout from 'routes/ProtextedRout';
import { selectAuthInform } from 'redux/auth/selectors';
import NotFound from 'pages/NotFound';

export const App = () => {
  const { isLoggedIn } = useSelector(selectAuthInform);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      (isLoggedIn && pathname === '/singin') ||
      (isLoggedIn && pathname.includes('singup')) ||
      (isLoggedIn && pathname === '/home')
    ) {
      navigate('/');
    }
  }, [isLoggedIn, navigate, pathname]);

  useEffect(() => {
    if (
      (!isLoggedIn && pathname === '/') ||
      (!isLoggedIn && pathname.includes('user'))
    ) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate, pathname]);

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
        <Route path="/singup" element={<SingUp />} />
        <Route path="/singup/goal" element={<Goal />} />
        <Route path="/singup/age" element={<Age />} />
        <Route path="/singup/body-parameters" element={<BodyParameters />} />
        <Route path="/singup/activity" element={<Activity />} />
        <Route path="/singin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="user/recommended"
          element={
            <ProtectedRout isLoggedIn={isLoggedIn}>
              <RecommendedFood />
            </ProtectedRout>
          }
        />

        <Route
          path="user/setting"
          element={
            <ProtectedRout isLoggedIn={isLoggedIn}>
              <Setting />
            </ProtectedRout>
          }
        />

        <Route
          path="user/diary"
          element={
            <ProtectedRout isLoggedIn={isLoggedIn}>
              <Diary />
            </ProtectedRout>
          }
        />

        <Route
          path="user/statistic"
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
