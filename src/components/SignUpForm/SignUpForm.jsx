import css from './SignUpForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().min(6).max(32).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const SignUpFrom = ({ handleSubmit }) => {
  return (
    <div className={css.container_sing_up}>
      <h1>Sign up</h1>
      <p className={css.sign_up_desc}>
        You need to register to use the service
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div role="group" className={css.sign_up_form}>
            <label htmlFor="name">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={css.sign_up_input}
              />
              <ErrorMessage name="name">
                {msg => <p className={css.error}>{msg}</p>}
              </ErrorMessage>
            </label>
            <label htmlFor="email">
              <Field
                type="email"
                name="email"
                placeholder="E-mail"
                className={css.sign_up_input}
              />
              <ErrorMessage name="email">
                {msg => <p className={css.error}>{msg}</p>}
              </ErrorMessage>
            </label>
            <label htmlFor="password">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={css.sign_up_input}
              />
              <ErrorMessage name="password">
                {msg => <p className={css.error}>{msg}</p>}
              </ErrorMessage>
            </label>
            <button type="submit">Sign Up</button>
          </div>
        </Form>
      </Formik>

      <div className={css.sing_in_box}>
        <span>Do you already have an account?</span>
        <a href="/">Sing in</a>
      </div>
    </div>
  );
};
