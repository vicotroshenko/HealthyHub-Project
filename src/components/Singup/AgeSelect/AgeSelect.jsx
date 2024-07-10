import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserSettings } from 'redux/auth/selectors';
import * as yup from 'yup';

import { ButtonSubmit } from 'components/ButtonPrimery/ButtonPrimery';
import { ProgressStepperBasic } from 'components/ProgressStepperBasic/ProgressStepperBasic';

import css from './AgeSelect.module.css';

const schema = yup.object().shape({
  gender: yup.string().required(),
  age: yup.number().max(100).required(),
});

export const AgeSelect = ({ handleSubmit }) => {
  const { gender, age } = useSelector(selectUserSettings);

  return (
    <div className={css.age}>
      <h1>Select gender, Age</h1>
      <p>Choose a goal so that we can help you effectively</p>
      <Formik
        initialValues={{
          gender: gender || '',
          age: age || '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div
            role="group"
            className={css.age_form}
          >
            <h4>Gender</h4>
            <div className={css.gender_container}>
              <label>
                <Field
                  type="radio"
                  name="gender"
                  value="male"
                  className={css.gender_input}
                />
                <span>Male</span>
              </label>

              <label>
                <Field
                  type="radio"
                  name="gender"
                  value="female"
                  className={css.gender_input}
                />
                <span>Female</span>
              </label>
            </div>

            <h4>Your age</h4>
            <label className={css.age_field}>
              <Field
                type="number"
                name="age"
                max="100"
              />
            </label>
            <div className={css.age_button_container}>
              <ButtonSubmit size={{ SWidth: 300, MWidth: 380, LWidth: 212 }}>
                Next
              </ButtonSubmit>
              <NavLink
                to={'/singup/goal'}
                className={css.back_link}
              >
                Back
              </NavLink>
            </div>
          </div>
        </Form>
      </Formik>
      <ProgressStepperBasic activeStep={2} />
    </div>
  );
};

AgeSelect.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
