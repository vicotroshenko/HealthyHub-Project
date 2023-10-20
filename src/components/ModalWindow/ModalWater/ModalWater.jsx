import { Modal } from 'components/ModalWindow/Modal/Modal';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import operationsMeal from 'redux/meals/operations';
import css from './ModalWater.module.css';
import { ButtonSubmit } from 'components/ButtonPrimery/ButtonPrimery';
import Swal from 'sweetalert2';

const inititalValues = {
  water: '',
};

export const ModalWater = ({ toggle, showModal }) => {
  const dispatch = useDispatch();

  const handleWater = (values, { resetForm }) => {
    if(values.water < 0){
      Swal.fire({
        title: 'You entered a negative number. This number will be subtracted from the total amount of water consumed',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, subtract!',
        background: '#0F0F0F',
        color: 'white',
      }).then(result => {
        if (result.isConfirmed) {
          dispatch(operationsMeal.updateWater(values));
          resetForm();
          toggle();
        }
      });
      return;
    }
    dispatch(operationsMeal.updateWater(values));
    resetForm();
    toggle();
  };

  return (
    <Modal toggle={toggle} styles={css.modal} visible={showModal}>
      <h1 className={css.water_title}>Add water intake</h1>
      <p className={css.water_desc}>How much water</p>
      <Formik initialValues={inititalValues} onSubmit={handleWater}>
        <Form className={css.water_form}>
          <label className={css.water_label}>
            <Field
              type="number"
              name="water"
              className={css.water_input}
              placeholder="Enter milliliters"
            />
          </label>
          <ButtonSubmit size={{ SWidth: 276, MWidth: 212 }}>
            <span>Confirm</span>
          </ButtonSubmit>
          <button type="button" onClick={toggle} className={css.water_cansel}>
            Cancel
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};
