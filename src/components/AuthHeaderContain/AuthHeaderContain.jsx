import style from './AuthHeaderContain.module.css';
import userPatternIcon from '../../images/png/header/profile-circle.png';

export const AuthHeaderContain = () => {
  return (
    <>
      <div className={style.header_logo}>
        <a href="/" className={style.header_logo_link}>
          HealthyHub
        </a>
      </div>
      <nav className={style.nav_auth}>
        <a href="/" className={style.header_link}>
          Sing in /
        </a>{' '}
        <a href="/" className={style.header_link}>
          Sing up
        </a>
        <img
          src={userPatternIcon}
          className={style.userIcon}
          alt="user pattern icon"
        />
      </nav>
    </>
  );
};
