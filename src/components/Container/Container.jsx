import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/meals/selectors';

import { Preloader } from 'components/Preloader/Preloader';

import css from './Container.module.css';

export const Container = ({ children }) => {
  const { isLoading } = useSelector(selectUserData);

  return (
    <>
      {isLoading && <Preloader />}
      <main className={css.content_section}>
        <div className={css.container}>{children}</div>
      </main>
    </>
  );
};
