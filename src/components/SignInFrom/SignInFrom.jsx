import css from './SignInFrom.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(6).max(32).required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const SignInFrom = ({ handleSubmit }) => {
  return (
    <div className={css.container_sing_in}>
      <h1>Sign up</h1>
      <p className={css.sign_in_desc}>
        You need to register to use the service
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div role="group" className={css.sign_in_form}>
            <label htmlFor="email">
              <Field
                type="email"
                name="email"
                placeholder="E-mail"
                className={css.sign_in_input}
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
                className={css.sign_in_input}
              />
              <ErrorMessage name="password">
                {msg => <p className={css.error}>{msg}</p>}
              </ErrorMessage>
            </label>
            <button type="submit">Sign In</button>
          </div>
        </Form>
      </Formik>

      <div className={css.sing_up_box}>
        <span>If you don't have an account yet</span>
        <a href="/">Sing up</a>
      </div>
    </div>
  );
};
