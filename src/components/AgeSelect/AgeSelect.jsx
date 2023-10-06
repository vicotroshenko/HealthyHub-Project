import { Field, Form, Formik } from 'formik';
import style from './AgeSelect.module.css';
import * as yup from 'yup';

const schema = yup.object().shape({
  gender: yup.string().required(),
  age: yup.number().max(100).required(),
});

export const AgeSelect = ({ handleSubmit }) => {
  return (
    <div className={style.age}>
      <h1>Select gender, Age</h1>
      <p>Choose a goal so that we can help you effectively</p>
      <Formik
        initialValues={{
          gender: '',
          age: 0,
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div role="group" className={style.age_form}>
            <h4>Gender</h4>
            <div className={style.gender_container}>
              <label>
                <Field
                  type="radio"
                  name="gender"
                  value="male"
                  className={style.gender_input}
                />
                <span>Male</span>
              </label>

              <label>
                <Field
                  type="radio"
                  name="gender"
                  value="female"
                  className={style.gender_input}
                />
                <span>Female</span>
              </label>
            </div>

            <h4>Your age</h4>
            <label className={style.age_field}>
              <Field type="number" name="age" max="100" />
            </label>
            <div className={style.age_button_container}>
              <button type="submit">Next</button>
              <button type="button">Back</button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
