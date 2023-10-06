import { Field, Form, Formik } from 'formik';
import style from './GoalSelect.module.css';

export const GoalSelect = ({ handleSubmit }) => {
  return (
    <div className={style.goal}>
      <h1>Your goal</h1>
      <p>Choose a goal so that we can help you effectively</p>
      <Formik
        initialValues={{
          goal: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div role="group" className={style.goal_form}>
            <label>
              <Field type="radio" id="lostfat" name="goal" value="Lose fat" />
              <span>Lose Fat</span>
            </label>
            <label>
              <Field type="radio" id="maintain" name="goal" value="Maintain" />
              <span>Maintain</span>
            </label>
            <label>
              <Field
                type="radio"
                id="gainmuscle"
                name="goal"
                value="Gain Muscle"
              />
              <span>Gain Muscle</span>
            </label>
          </div>
          <div className={style.goat_btn_container}>
            <button type="submit">Next</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
