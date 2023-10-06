import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { SignUpFrom } from 'components/SignUpForm/SignUpForm';
import homeImage from '../images/png/home/Illustration.png';
import { updateUser } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SingUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingUp = (values, { resetForm }) => {
    dispatch(updateUser(values));
    resetForm();
    navigate('/singup/goal');
  };

  return (
    <>
      <AuthContainer image={homeImage}>
        <SignUpFrom handleSubmit={handleSingUp} />
      </AuthContainer>
    </>
  );
};

export default SingUp;
