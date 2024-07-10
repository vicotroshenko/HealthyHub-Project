import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/HeaderBlock/Header/Header';
import { Preloader } from 'components/Preloader/Preloader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
