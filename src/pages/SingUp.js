import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from 'redux/auth/authSlice';

import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { SignUpFrom } from 'components/Singup/SignUpForm/SignUpForm';

import homeImage from '../images/png/home/Illustration.png';

const SingUp = () => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingUp = (values, { resetForm }) => {
    const data = { ...values, password };
    if (
      password === password.toLowerCase() ||
      !searchNumber(password) ||
      password.length <= 5
    ) {
      return;
    }

    dispatch(updateUser(data));
    resetForm();
    navigate('/singup/goal');
  };

  const getPassword = (value) => setPassword(value);
  const searchNumber = (string) =>
    string.split('').some((element) => !isNaN(Number(element)));

  return (
    <>
      <AuthContainer image={homeImage}>
        <SignUpFrom
          handleSubmit={handleSingUp}
          getPassword={getPassword}
        />
      </AuthContainer>
    </>
  );
};

export default SingUp;
