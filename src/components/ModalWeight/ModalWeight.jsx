import { Modal } from 'components/Modal/Modal';
import { ReactComponent as CloseIcon } from '../../images/svg/modal/close-circle.svg';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/operations';
import style from './ModalWeight.module.css';

const initialValues = {
  weight: '',
};

export const ModalWeight = ({ showModal, toggle }) => {
  const dispatch = useDispatch();

  const handelWeight = values => {
    dispatch(operations.updateWeight(values));
  };

  if (showModal) {
    return (
      <Modal onClose={toggle} styles={style.modal}>
        <button onClick={toggle} className={style.close_button}>
          <CloseIcon />
        </button>
        <h1 className={style.modal_title}>Enter your current weight</h1>
        <p className={style.modal_desc}>
          You can record your weight once a day
        </p>
        <p className={style.modal_day}>
          Today <span></span>
        </p>
        <Formik initialValues={initialValues} onSubmit={handelWeight}>
          <Form className={style.modal_form}>
            <label>
              <Field
                type="number"
                name="weight"
                placeholder="Enter your weight"
              />
            </label>
            <button type="submit">Confirm</button>
          </Form>
        </Formik>
      </Modal>
    );
  }
};
