import { NavLink } from 'react-router-dom';
import css from './AuthButtons.module.css';

export const AuthButtons = () => {
  return (
    <div className={css.buttons}>
      <h1>Set goals and achieve them</h1>
      <p className={css.buttons_desc}>
        The service will help you set goals and follow them.
      </p>
      <div className={css.buttons_container}>
        <NavLink to={'/singin'} className={css.button_sing_in} type="button">
          Sign in
        </NavLink>
        <NavLink to={'/singup'} className={css.button_sing_up} type="button">
          Sign up
        </NavLink>
      </div>
      <ul className={css.list}>
        <li>Set goals</li>
        <li>Watch your calories</li>
        <li>Keep track of your water intake</li>
        <li>Control your weight</li>
      </ul>
    </div>
  );
};
