import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import userPatternIcon from '../../../images/png/header/profile-circle.png';
import css from './AuthHeaderContain.module.css';

export const AuthHeaderContain = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className={css.header_logo}>
        <NavLink
          to={'/home'}
          className={css.header_logo_link}
        >
          HealthyHub
        </NavLink>
      </div>
      <nav className={css.nav_auth}>
        <NavLink
          to={'/singin'}
          className={
            pathname !== '/singin'
              ? css.header_link
              : `${css.header_link} ${css.isActive}`
          }
        >
          Sing in
        </NavLink>
        <span style={{ verticalAlign: 'top', lineHeight: 2.2 }}> / </span>
        <NavLink
          to={'/singup'}
          className={
            pathname !== '/singup'
              ? css.header_link
              : `${css.header_link} ${css.isActive}`
          }
        >
          Sing up
        </NavLink>
        <img
          src={userPatternIcon}
          className={css.userIcon}
          alt="user pattern icon"
        />
      </nav>
    </>
  );
};
