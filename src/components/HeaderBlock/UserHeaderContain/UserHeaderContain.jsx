import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';
import { RiArrowUpSLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserSettings } from 'redux/auth/selectors';

import { MobilModal } from 'components/ModalWindow/MobilModal/MobilModal';
import { Modal } from 'components/ModalWindow/Modal/Modal';
import { ModalGoal } from 'components/ModalWindow/ModalGoal/ModalGoal';
import { ModalWeight } from 'components/ModalWindow/ModalWeight/ModalWeight';

import gainMuscleIcon from '../../../images/png/header/goal-gain-muscle.png';
import loseFatIcon from '../../../images/png/header/goal-lose-fat.png';
import maintainIcon from '../../../images/png/header/goal-maintain.png';
import weightIcon from '../../../images/png/header/weight.png';
import { ReactComponent as MenuIcon } from '../../../images/svg/header/menu.svg';
import css from './UserHeaderContain.module.css';

export const UserHeaderContain = ({ handleSubmit }) => {
  const [visible, setVisible] = useState(false);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showWeightModal, setShowWeightModal] = useState(false);
  const [showMobileModal, setShowMobileModal] = useState(false);

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
  const toggleMobile = () => {
    setShowMobileModal(!showMobileModal);
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
      <ModalGoal
        showModal={showGoalModal}
        toggle={toggleGoal}
      />
      <ModalWeight
        showModal={showWeightModal}
        toggle={toggleWeight}
      />
      <MobilModal
        showModal={showMobileModal}
        toggle={toggleMobile}
      />

      <div className={css.header_logo}>
        <NavLink
          to={'/'}
          className={css.header_logo_link}
        >
          HealthyHub
        </NavLink>
      </div>
      <div className={css.data_container}>
        <div className={css.mobile_hidden}>
          <button
            className={css.data}
            onClick={toggleGoal}
          >
            <div className={css.data_image_wrapper}>
              <img
                src={image}
                alt="goal"
              />
            </div>
            <div className={css.data_desc}>
              <p>Goal</p>
              <div className={css.data_desc_wrapper}>
                <p>{goal}</p>
                <RiArrowUpSLine
                  className={
                    !showGoalModal
                      ? css.goal_arrow
                      : `${css.goal_arrow} ${css.active}`
                  }
                />
              </div>
            </div>
          </button>
          <button
            className={css.data}
            onClick={toggleWeight}
          >
            <div className={css.data_image_wrapper}>
              <img
                src={weightIcon}
                alt="weight"
              />
            </div>
            <div className={css.data_desc}>
              <p>Weight</p>
              <div className={css.data_desc_wrapper}>
                <p>{weight}</p>
                <BiEditAlt className={css.edit_icon} />
              </div>
            </div>
          </button>
        </div>
        <div className={css.tablet_hidden}>
          <button
            type="button"
            onClick={toggleMobile}
          >
            <MenuIcon />
          </button>
        </div>

        <button
          className={css.user_block}
          onClick={toggle}
        >
          <p>{name}</p>
          <div className={css.user_avatar}>
            <img
              src={avatarURL}
              alt="User avatar"
            />
          </div>
          <RiArrowUpSLine
            className={
              !visible ? css.arrow_icon : `${css.arrow_icon} ${css.active}`
            }
          />
        </button>

        <Modal
          styles={css.drop_menu}
          toggle={toggle}
          visible={visible}
        >
          <NavLink
            to={'user/setting'}
            className={css.drop_button}
            onClick={toggle}
          >
            <AiOutlineSetting style={{ width: 16, height: 16 }} />
            Setting
          </NavLink>
          <button
            type="button"
            onClick={() => {
              handleSubmit();
              toggle();
            }}
            className={css.drop_button}
          >
            <BiLogOut style={{ width: 16, height: 16 }} />
            Log out
          </button>
        </Modal>
      </div>
    </>
  );
};

UserHeaderContain.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
