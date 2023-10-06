import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import ageImage from '../images/png/age/age.png';
import { AgeSelect } from 'components/AgeSelect/AgeSelect';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from 'redux/auth/authSlice';

const Age = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAge = (values, { resetForm }) => {
    dispatch(updateUser(values));
    resetForm();
    navigate('/singup/body-parameters');
  };

  return (
    <AuthContainer image={ageImage}>
      <AgeSelect handleSubmit={handleAge} />
    </AuthContainer>
  );
};

export default Age;
