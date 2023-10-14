import { Field, Form, Formik } from 'formik';
import css from './BodySelect.module.css';
import * as yup from 'yup';
import { ButtonSubmit } from 'components/ButtonPrimery/ButtonPrimery';

const schema = yup.object().shape({
  height: yup.number().max(300).required(),
  weight: yup.number().max(350).required(),
});

export const BodySelect = ({ handleSubmit }) => {
  return (
    <div className={css.body}>
      <h1>Body parameters</h1>
      <p>Enter your parameters for correct performance tracking</p>
      <Formik
        initialValues={{
          height: '',
          weight: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div role="group" className={css.body_form}>
            <label>
              Height
              <Field type="number" name="height" max="300" />
            </label>

            <label>
              Weight
              <Field type="number" name="weight" max="350" />
            </label>

            <div className={css.body_button_container}>
              <ButtonSubmit size={{SWidth: 280, MWidth: 380, LWidth: 212,}}>Next</ButtonSubmit>
              <button type="button">Back</button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
