import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from 'redux/auth/authSlice';

import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { AgeSelect } from 'components/Singup/AgeSelect/AgeSelect';

import ageImage from '../images/png/age/age.png';

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
