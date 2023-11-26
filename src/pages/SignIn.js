import { SignInFrom } from 'components/SignInFrom/SignInFrom';
import homeImage from '../images/png/home/Illustration.png';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/operations';
import { login } from 'redux/meals/mealsSlice';


const SignIn = () => {
  const dispatch = useDispatch();

  const handleSingIn = (values, { resetForm }) => {
    dispatch(operations.logIn(values));
    dispatch(login());
    resetForm();
  };

  return (
    <AuthContainer image={homeImage}>
      <SignInFrom handleSubmit={handleSingIn} />
    </AuthContainer>
  );
};

export default SignIn;
