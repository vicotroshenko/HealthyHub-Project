import PropTypes from 'prop-types';
import { ButtonSubmit } from 'components/ButtonPrimery/ButtonPrimery';
import css from './SignInFrom.module.css';
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteError } from 'redux/auth/authSlice';

const schema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(6).max(32).required(),
});

const initialValues = {
  email: '',
  password: '',
};


export const SignInFrom = ({ handleSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordFieldRef = useRef();
  const dispatch = useDispatch();

  const error = useSelector(state => state.auth.isAuthError);


  if(error){
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Your entered data is incorect',
      showConfirmButton: false,
      timer: 3500, 
      background: "#0F0F0F",
      color: "white",
    })
    dispatch(deleteError())
  }

  const toggleShowPassword = () => {
    if (passwordFieldRef.current.children[0].type === 'password') {
      passwordFieldRef.current.children[0].type = 'text';
      setShowPassword(true);
    } else {
      passwordFieldRef.current.children[0].type = 'password';
      setShowPassword(false);
    }
  };

  return (
    <div className={css.container_sing_in}>
      <h1>Sign in</h1>
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
            <div className={css.passwordContainer}>
              <label htmlFor="password" ref={passwordFieldRef}>
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
              <label>
                <input
                  type="checkbox"
                  onClick={toggleShowPassword}
                  className={css.showPasswordBtn}
                />
                <BsFillEyeFill
                  className={showPassword ? css.passwordIcon : css.hidden}
                />
                <BsFillEyeSlashFill
                  className={!showPassword ? css.passwordIcon : css.hidden}
                />
              </label>
            </div>
            <ButtonSubmit size={{ SWidth: 280, MWidth: 380, LWidth: 212 }}>
              Sign In
            </ButtonSubmit>
          </div>
        </Form>
      </Formik>

      <div className={css.sing_up_box}>
        <span>If you don't have an account yet</span>
        <Link to={'/singup'}>Sing up</Link>
      </div>
    </div>
  );
};


SignInFrom.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}