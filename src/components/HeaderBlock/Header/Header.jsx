import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import operations from 'redux/auth/operations';
import { selectAuthInform } from 'redux/auth/selectors';
import { logout } from 'redux/meals/mealsSlice';
import Swal from 'sweetalert2';

import { AuthHeaderContain } from 'components/HeaderBlock/AuthHeaderContain/AuthHeaderContain';
import { UserHeaderContain } from 'components/HeaderBlock/UserHeaderContain/UserHeaderContain';

import css from './Header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuthInform);
  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
      background: '#0F0F0F',
      color: 'white',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(operations.logOut());
        dispatch(logout());
        setTimeout(() => navigate('/singin'), 300);
      }
    });
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
