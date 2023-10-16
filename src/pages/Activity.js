import { ActivitySelect } from 'components/Singup/ActivitySelect/ActivitySelect';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import activityImage from '../images/png/activity/activity.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/operations';
import { selectUserSettings } from 'redux/auth/selectors';

const Activity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUserSettings);

  const handleBodyParam = (values, { resetForm }) => {
    const activity = Number(values.activity);
    const data = { ...user, activity };

    dispatch(operations.singup(data));
    resetForm();
    navigate('/singin');
  };

  return (
    <AuthContainer image={activityImage}>
      <ActivitySelect handleSubmit={handleBodyParam} />
    </AuthContainer>
  );
};

export default Activity;
