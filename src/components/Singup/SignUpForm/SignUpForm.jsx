import { ButtonSubmit } from 'components/ButtonPrimery/ButtonPrimery';
import { ProgressStepperBasic } from 'components/ProgressStepperBasic/ProgressStepperBasic';
import css from './SignUpForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { BsCheck } from 'react-icons/bs';
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().min(6).max(32).minUppercase(1).minNumbers(1).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const SignUpFrom = ({ handleSubmit }) => {
  const [password, setPassword] = useState('');
  const [showTextError, setShowTextError] = useState(false);
  const [showTextSuccess, setShowTextSuccess] = useState(false);
  const [onFocus, setOnFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const passwordFieldRef = useRef();

  const handleValidation = value => {
    setPassword(value);

    if (
      value === value.toLowerCase() ||
      !searchNumber(value) ||
      value.length <= 5
    ) {
      setShowTextSuccess(false);
      setShowTextError(true);
      return;
    }

    if (
      value !== value.toLowerCase() &&
      searchNumber(value) &&
      value.length > 5
    ) {
      setShowTextSuccess(true);
      setShowTextError(false);
      return;
    }
  };

  const toggleShowPassword = () => {
    if (passwordFieldRef.current.children[0].type === 'password') {
      passwordFieldRef.current.children[0].type = 'text';
      setShowPassword(true);
    } else {
      passwordFieldRef.current.children[0].type = 'password';
      setShowPassword(false);
    }
  };

  const searchNumber = string =>
    string.split('').some(element => !isNaN(Number(element)));

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
                  {msg => <span className={css.errorMessage}>{msg}</span>}
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
                  {msg => <span className={css.errorMessage}>{msg}</span>}
                </ErrorMessage>
              </label>
              <div className={css.passwordContaier}>
              <label htmlFor="password" ref={passwordFieldRef}>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => handleValidation(e.target.value)}
                  className={
                    onFocus && showTextSuccess
                      ? `${css.sign_up_input} ${css.inputSuccess}`
                      : `${css.sign_up_input} ${css.inputError}`
                  }
                  onFocus={() => setOnFocus(true)}
                  onBlur={() => setOnFocus(false)}
                />
                <span className={showTextSuccess ? css.iconStatus : css.hidden}>
                  <BsCheck className={css.successIcon} />
                </span>
                <span className={showTextError ? css.iconStatus : css.hidden}>
                  <RiCloseLine className={css.errorIcon} />
                </span>
                <span className={showTextError && password.length !== 0 ? css.errorMessage : css.hidden}>
                  Enter a valid Password*
                </span>
                <span
                  className={showTextSuccess ? css.successMessage : css.hidden}
                >
                  Password is secure
                </span>
              </label>
              
                <label className={css.showPasswordLable}>
                {!onFocus && 
                <>
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
                  </>
                  }
                </label>
              </div>
              
              <ButtonSubmit size={{ SWidth: 280, MWidth: 380, LWidth: 212 }}>
                Sign In
              </ButtonSubmit>
            </div>
          </Form>
      </Formik>
      <ProgressStepperBasic activeStep={0} />
      <div className={css.sing_in_box}>
        <span>Do you already have an account?</span>
        <Link to={'/singin'}>Sing in</Link>
      </div>
    </div>
  );
};
