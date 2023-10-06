import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import bodyImage from '../images/png/bodyParam/body-params.png';
import { BodySelect } from 'components/BodySelect/BodySelect';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from 'redux/auth/authSlice';

const BodyParameters = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBodyParam = (values, { resetForm }) => {
    dispatch(updateUser(values));
    resetForm();
    navigate('/singup/activity');
  };

  return (
    <AuthContainer image={bodyImage}>
      <BodySelect handleSubmit={handleBodyParam} />
    </AuthContainer>
  );
};

export default BodyParameters;
