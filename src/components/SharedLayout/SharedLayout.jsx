import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Preloader } from 'components/Preloader/Preloader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Preloader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
