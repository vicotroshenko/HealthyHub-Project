import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { GoalSelect } from 'components/Singup/GoalSelect/GoalSelect';
import goalImage from '../images/png/goal/Summer hiking.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from 'redux/auth/authSlice';

const Goal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleGoal = (values, { resetForm }) => {
    dispatch(updateUser(values));
    resetForm();
    navigate('/singup/age');
  };

  return (
    <>
      <AuthContainer image={goalImage}>
        <GoalSelect handleSubmit={handleGoal} />
      </AuthContainer>
    </>
  );
};

export default Goal;
