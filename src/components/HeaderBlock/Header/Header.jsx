import { AuthHeaderContain } from 'components/HeaderBlock/AuthHeaderContain/AuthHeaderContain';
import { UserHeaderContain } from 'components/HeaderBlock/UserHeaderContain/UserHeaderContain';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/operations';
import { selectAuthInform } from 'redux/auth/selectors';
import css from './Header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuthInform);
  
  const handleLogOut = () => {
    dispatch(operations.logOut());
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        {!isLoggedIn ? (
          <AuthHeaderContain />
        ) : (
          <UserHeaderContain handleSubmit={handleLogOut} />
        )}
      </div>
    </header>
  );
};
