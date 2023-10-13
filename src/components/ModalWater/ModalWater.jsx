import { Modal } from 'components/Modal/Modal';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import operations from 'redux/meals/operations';
import css from './ModalWater.module.css';

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
      <Modal onClose={toggle} styles={css.modal}>
        <h1 className={css.water_title}>Add water intake</h1>
        <p className={css.water_desc}>How much water</p>
        <Formik initialValues={inititalValues} onSubmit={handleWater}>
          <Form>
            <label>
              <Field
                type="number"
                name="water"
                className={css.water_input}
                placeholder="Enter milliliters"
              />
            </label>
            <button type="submit" className={css.water_submit}>
              Confirm
            </button>
            <button
              type="button"
              onClick={toggle}
              className={css.water_cansel}
            >
              Cancel
            </button>
          </Form>
        </Formik>
      </Modal>
    );
  }
};
