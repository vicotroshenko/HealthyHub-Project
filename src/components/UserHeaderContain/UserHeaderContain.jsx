import css from './UserHeaderContain.module.css';
import loseFatIcon from '../../images/png/header/goal-lose-fat.png';
import maintainIcon from '../../images/png/header/goal-maintain.png';
import gainMuscleIcon from '../../images/png/header/goal-gain-muscle.png';
import weightIcon from '../../images/png/header/weight.png';
import { ReactComponent as ArrowIcon } from '../../images/svg/header/arrow-down.svg';
import { ReactComponent as EditIcon } from '../../images/svg/header/edit-2.svg';
import { ReactComponent as MenuIcon } from '../../images/svg/header/menu.svg';
import { ReactComponent as SettingIcon } from '../../images/svg/header/setting-2.svg';
import { ReactComponent as LogOutIcon } from '../../images/svg/header/logout.svg';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ModalGoal } from 'components/ModalGoal/ModalGoal';
import { ModalWeight } from 'components/ModalWeight/ModalWeight';
import { selectUserSettings } from 'redux/auth/selectors';

export const UserHeaderContain = ({ handleSubmit }) => {
  const [visible, setVisible] = useState(false);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showWeightModal, setShowWeightModal] = useState(false);

  const { goal, weight, name, avatarURL } = useSelector(selectUserSettings);

  const toggle = () => {
    setVisible(!visible);
  };

  const toggleGoal = () => {
    setShowGoalModal(!showGoalModal);
  };

  const toggleWeight = () => {
    setShowWeightModal(!showWeightModal);
  };

  const choseImage = () => {
    switch (goal) {
      case 'Lose fat':
        return loseFatIcon;
      case 'Maintain':
        return maintainIcon;
      case 'Gain Muscle':
        return gainMuscleIcon;
      default:
        return null;
    }
  };
  const image = choseImage();
  return (
    <>
      <ModalGoal showModal={showGoalModal} toggle={toggleGoal} />
      <ModalWeight showModal={showWeightModal} toggle={toggleWeight} />

      <div className={css.header_logo}>
        <NavLink to={'/'} className={css.header_logo_link}>
          HealthyHub
        </NavLink>
      </div>
      <div className={css.data_container}>
        <div className={css.mobile_hidden}>
          <button className={css.data} onClick={toggleGoal}>
            <div className={css.data_image_wrapper}>
              <img src={image} alt="goal" />
            </div>
            <div className={css.data_desc}>
              <p>Goal</p>
              <div className={css.data_desc_wrapper}>
                <p>{goal}</p>
                <ArrowIcon />
              </div>
            </div>
          </button>
          <button className={css.data} onClick={toggleWeight}>
            <div className={css.data_image_wrapper}>
              <img src={weightIcon} alt="weight" />
            </div>
            <div className={css.data_desc}>
              <p>Weight</p>
              <div className={css.data_desc_wrapper}>
                <p>{weight}</p>
                <EditIcon />
              </div>
            </div>
          </button>
        </div>
        <div className={css.tablet_hidden}>
          <button>
            <MenuIcon />
          </button>
        </div>

        <button className={css.user_block} onClick={toggle}>
          <p>{name}</p>
          <div className={css.user_avatar}>
            <img src={avatarURL} alt="User avatar" />
          </div>
          <ArrowIcon />
        </button>

        {visible && (
          <div className={css.drop_menu}>
            <NavLink to={'/setting'} className={css.drop_button}>
              <SettingIcon />
              Setting
            </NavLink>
            <button
              type="button"
              onClick={handleSubmit}
              className={css.drop_button}
            >
              <LogOutIcon />
              Log out
            </button>
          </div>
        )}
      </div>
    </>
  );
};
