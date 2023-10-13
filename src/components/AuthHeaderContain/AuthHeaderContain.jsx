import css from './AuthHeaderContain.module.css';
import userPatternIcon from '../../images/png/header/profile-circle.png';
import { NavLink } from 'react-router-dom';

export const AuthHeaderContain = () => {
  return (
    <>
      <div className={css.header_logo}>
        <NavLink to={"/home"} className={css.header_logo_link}>
          HealthyHub
        </NavLink>
      </div>
      <nav className={css.nav_auth}>
        <NavLink to={"/singin"} className={css.header_link}>
          Sing in /
        </NavLink>{' '}
        <NavLink to={"/singup"} className={css.header_link}>
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
