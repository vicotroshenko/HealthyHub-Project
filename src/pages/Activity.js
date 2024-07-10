import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import operations from 'redux/auth/operations';
import { selectUserSettings } from 'redux/auth/selectors';

import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { ActivitySelect } from 'components/Singup/ActivitySelect/ActivitySelect';

import activityImage from '../images/png/activity/activity.png';

const Activity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUserSettings);

  const handleBodyParam = (values, { resetForm }) => {
    const activity = Number(values.activity);
    const data = { ...user, activity };

    dispatch(operations.singup(data));
    resetForm();
    navigate('/');
  };

  return (
    <AuthContainer image={activityImage}>
      <ActivitySelect handleSubmit={handleBodyParam} />
    </AuthContainer>
  );
};

export default Activity;
