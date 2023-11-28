import { SettingSelect } from 'components/SettingSelect/SettingSelect';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/operations';
import { selectAuthInform } from 'redux/auth/selectors';

const Setting = () => {
  const { isLoggedIn } = useSelector(selectAuthInform);
  const dispatch = useDispatch();
  let updateDataRef = useRef(true);

  useEffect(() => {
    if (isLoggedIn && updateDataRef.current) {
      dispatch(operations.getCurrentUser());
      updateDataRef.current = false;
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <SettingSelect />
    </>
  );
};

export default Setting;
