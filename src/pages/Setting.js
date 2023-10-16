import { Preloader } from 'components/Preloader/Preloader';
import { SettingSelect } from 'components/Singup/SettingSelect/SettingSelect';
import { useSelector } from 'react-redux';

const Setting = () => {

  const { isLoading } = useSelector(state => state.user)


  return  <>
  {isLoading && <Preloader/>}
  <SettingSelect />;
  </> 
};

export default Setting;
