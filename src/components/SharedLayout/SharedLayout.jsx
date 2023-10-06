import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
