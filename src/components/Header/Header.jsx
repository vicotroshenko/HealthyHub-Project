import { AuthHeaderContain } from 'components/AuthHeaderContain/AuthHeaderContain';
import { UserHeaderContain } from 'components/UserHeaderContain/UserHeaderContain';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/operations';
import { selectAuthInform } from 'redux/auth/selectors';
import style from './Header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuthInform);
  
  const handleLogOut = () => {
    dispatch(operations.logOut());
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        {!isLoggedIn ? (
          <AuthHeaderContain />
        ) : (
          <UserHeaderContain handleSubmit={handleLogOut} />
        )}
      </div>
    </header>
  );
};
