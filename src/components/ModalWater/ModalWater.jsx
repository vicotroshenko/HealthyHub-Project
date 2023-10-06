import { Modal } from 'components/Modal/Modal';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import operations from 'redux/meals/operations';
import style from './ModalWater.module.css';

const inititalValues = {
  water: '',
};

export const ModalWater = ({ toggle, showModal }) => {
  const dispatch = useDispatch();

  const handleWater = (values, { resetForm }) => {
    dispatch(operations.updateWater(values));
    resetForm();
    toggle();
  };

  if (showModal) {
    return (
      <Modal onClose={toggle} styles={style.modal}>
        <h1 className={style.water_title}>Add water intake</h1>
        <p className={style.water_desc}>How much water</p>
        <Formik initialValues={inititalValues} onSubmit={handleWater}>
          <Form>
            <label>
              <Field
                type="number"
                name="water"
                className={style.water_input}
                placeholder="Enter milliliters"
              />
            </label>
            <button type="submit" className={style.water_submit}>
              Confirm
            </button>
            <button
              type="button"
              onClick={toggle}
              className={style.water_cansel}
            >
              Cancel
            </button>
          </Form>
        </Formik>
      </Modal>
    );
  }
};
