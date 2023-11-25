import PropTypes from 'prop-types';
import { HomeSVG } from 'components/SVG/HomeSVG/HomeSVG';
import css from './AuthContainer.module.css';
import { useLocation } from 'react-router-dom';
import { Preloader } from 'components/Preloader/Preloader';
import { useSelector } from 'react-redux';
import { selectAuthInform } from 'redux/auth/selectors';

export const AuthContainer = ({ image, children }) => {
  const { pathname } = useLocation();
  const { isLoading } = useSelector(selectAuthInform)

  const mainImage =
    pathname === '/home' || pathname === '/singin' || pathname === '/singup';

  return (
    <>
      {isLoading && <Preloader />}
      <div className={css.container}>
        <div className={css.container_main_image}>
          {!mainImage && <img src={image} alt="describes page" />}
          {mainImage && <HomeSVG />}
        </div>
        {children}
      </div>
    </>
  );
};


AuthContainer.propTypes = {
  image: PropTypes.string.isRequired,
}