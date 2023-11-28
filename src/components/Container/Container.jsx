import { useSelector } from 'react-redux';
import css from './Container.module.css';
import { selectUserData } from 'redux/meals/selectors';
import { Preloader } from 'components/Preloader/Preloader';

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
