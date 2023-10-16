import loseFatIcon from '../../../images/png/header/goal-lose-fat.png';
import maintainIcon from '../../../images/png/header/goal-maintain.png';
import gainMuscleIcon from '../../../images/png/header/goal-gain-muscle.png';
import { ReactComponent as CloseIcon } from '../../../images/svg/modal/close-circle.svg';
import { Modal } from 'components/ModalWindow/Modal/Modal';
import { Field, Formik, Form } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/operations';
import { selectUserGoal } from 'redux/auth/selectors';
import css from './ModalGoal.module.css';
import { ButtonSubmit } from 'components/ButtonPrimery/ButtonPrimery';

const initialValues = {
  goal: ['Lose fat'],
};

export const ModalGoal = ({ showModal, toggle }) => {
  const [checked, setChecked] = useState(useSelector(selectUserGoal));
  const dispatch = useDispatch();

  const handleGoal = () => {
    dispatch(operations.updateGoal({ goal: checked }));
  };

  return (
    <Modal toggle={toggle} styles={css.modal} visible={showModal}>
      <button type="button" onClick={toggle} className={css.close_button}>
        <CloseIcon />
      </button>
      <h1 className={css.modal_title}>Target selection</h1>
      <p className={css.modal_desc}>
        The service will adjust your calorie intake to your goal
      </p>
      <Formik initialValues={initialValues} onSubmit={handleGoal}>
        <Form className={css.checkbox}>
          <label
            style={
              'Lose fat' === checked
                ? { color: '#B6C3FF', fontWeight: 500 }
                : { color: '#FFF' }
            }
          >
            <Field
              type="checkbox"
              name="goal"
              value="Lose fat"
              onClick={() => setChecked('Lose fat')}
              checked={checked === 'Lose fat'}
            />
            <div className={css.new_checkbox}>
              <img src={loseFatIcon} alt="goal check lose fat" />
            </div>
            Lose Fat
          </label>
          <label
            style={
              'Maintain' === checked
                ? { color: '#B6C3FF', fontWeight: 500 }
                : { color: '#FFF' }
            }
          >
            <Field
              type="checkbox"
              name="goal"
              value="Maintain"
              onClick={() => setChecked('Maintain')}
              checked={checked === 'Maintain'}
            />
            <div className={css.new_checkbox}>
              <img src={maintainIcon} alt="goal check maintain" />
            </div>
            Maintain
          </label>
          <label
            style={
              'Gain Muscle' === checked
                ? { color: '#B6C3FF', fontWeight: 500 }
                : { color: '#FFF' }
            }
          >
            <Field
              type="checkbox"
              name="goal"
              value="Gain Muscle"
              onClick={() => setChecked('Gain Muscle')}
              checked={checked === 'Gain Muscle'}
            />
            <div className={css.new_checkbox}>
              <img src={gainMuscleIcon} alt="goal check gain muscle" />
            </div>
            Gain muscle
          </label>
          <ButtonSubmit size={{ SWidth: 280, MWidth: 166 }}>
            <span>Confirm</span>
          </ButtonSubmit>
          <button type="button" onClick={toggle} className={css.cancel_btn}>
            Cancel
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};
