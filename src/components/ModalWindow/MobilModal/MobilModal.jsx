import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserSettings } from 'redux/auth/selectors';

import { Modal } from 'components/ModalWindow/Modal/Modal';
import { ModalGoal } from 'components/ModalWindow/ModalGoal/ModalGoal';
import { ModalWeight } from 'components/ModalWindow/ModalWeight/ModalWeight';

import gainMuscleIcon from '../../../images/png/header/goal-gain-muscle.png';
import loseFatIcon from '../../../images/png/header/goal-lose-fat.png';
import maintainIcon from '../../../images/png/header/goal-maintain.png';
import weightIcon from '../../../images/png/header/weight.png';
import { ReactComponent as EditIcon } from '../../../images/svg/header/edit-2.svg';
import { ReactComponent as ArrowIcon } from '../../../images/svg/main-page/arrow-right.svg';
import css from './MobilModal.module.css';

export const MobilModal = ({ toggle, showModal }) => {
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showWeightModal, setShowWeightModal] = useState(false);

  const toggleGoal = () => {
    setShowGoalModal(!showGoalModal);
  };

  const toggleWeight = () => {
    setShowWeightModal(!showWeightModal);
  };

  const { goal, weight } = useSelector(selectUserSettings);

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
      <Modal
        visible={showModal}
        toggle={toggle}
        styles={css.modal}
      >
        <div className={css.mobile_inner}>
          <button
            type="button"
            className={css.data_button}
            onClick={() => {
              toggleGoal();
              toggle();
            }}
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
                <ArrowIcon fill="#E3FFA8" />
              </div>
            </div>
          </button>
          <button
            type="button"
            className={css.data_button}
            onClick={() => {
              toggleWeight();
              toggle();
            }}
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
                <p>{weight} kg</p>
                <EditIcon />
              </div>
            </div>
          </button>
        </div>
      </Modal>
    </>
  );
};

MobilModal.propTypes = {
  toggle: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
