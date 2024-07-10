import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/operations';
import operationsMeal from 'redux/meals/operations';

import { ButtonSubmit } from 'components/ButtonPrimery/ButtonPrimery';
import { Modal } from 'components/ModalWindow/Modal/Modal';

import { ReactComponent as CloseIcon } from '../../../images/svg/modal/close-circle.svg';
import css from './ModalWeight.module.css';

const initialValues = {
  weight: '',
};

export const ModalWeight = ({ showModal, toggle }) => {
  const dispatch = useDispatch();

  const handelWeight = (values) => {
    dispatch(operations.updateWeight(values));
    dispatch(operationsMeal.updateWeight(values));
  };

  return (
    <Modal
      toggle={toggle}
      styles={css.modal}
      visible={showModal}
    >
      <button
        onClick={toggle}
        className={css.close_button}
      >
        <CloseIcon />
      </button>
      <h1 className={css.modal_title}>Enter your current weight</h1>
      <p className={css.modal_desc}>You can record your weight once a day</p>
      <p className={css.modal_day}>
        Today <span></span>
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handelWeight}
      >
        <Form className={css.modal_form}>
          <label>
            <Field
              type="number"
              name="weight"
              placeholder="Enter your weight"
              min="0"
              max="180"
              className={css.input_field}
            />
          </label>
          <ButtonSubmit size={{ SWidth: 280, MWidth: 166 }}>
            <span>Confirm</span>
          </ButtonSubmit>
          <button
            type="button"
            onClick={toggle}
            className={css.cancel_btn}
          >
            Cancel
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

ModalWeight.propTypes = {
  toggle: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
