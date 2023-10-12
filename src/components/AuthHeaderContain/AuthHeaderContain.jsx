import style from './AuthHeaderContain.module.css';
import userPatternIcon from '../../images/png/header/profile-circle.png';
import { NavLink } from 'react-router-dom';

export const AuthHeaderContain = () => {
  return (
    <>
      <div className={style.header_logo}>
        <NavLink to={"/home"} className={style.header_logo_link}>
          HealthyHub
        </NavLink>
      </div>
      <nav className={style.nav_auth}>
        <NavLink to={"/singin"} className={style.header_link}>
          Sing in /
        </NavLink>{' '}
        <NavLink to={"/singup"} className={style.header_link}>
          Sing up
        </NavLink>
        <img
          src={userPatternIcon}
          className={style.userIcon}
          alt="user pattern icon"
        />
      </nav>
    </>
  );
};
