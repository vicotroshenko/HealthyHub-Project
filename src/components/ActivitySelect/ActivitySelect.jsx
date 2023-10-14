import { Field, Form, Formik } from 'formik';
import css from './ActivitySelect.module.css';
import * as yup from 'yup';
import { ButtonSubmit } from 'components/ButtonPrimery/ButtonPrimery';

const schema = yup.object().shape({
  activity: yup.string().required(),
});

export const ActivitySelect = ({ handleSubmit }) => {
  return (
    <div className={css.activity}>
      <h1>Your Activity</h1>
      <p>To correctly calculate calorie and water intake</p>
      <Formik
        initialValues={{
          activity: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div role="group" className={css.activity_form}>
            <label>
              <Field type="radio" name="activity" value="1.25" />
              <span>
                1.25 - if you do not have physical activity and sedentary work
              </span>
            </label>

            <label>
              <Field type="radio" name="activity" value="1.375" />
              <span>
                1,375 - if you do short runs or light gymnastics 1-3 times a
                week
              </span>
            </label>

            <label>
              <Field type="radio" name="activity" value="1.55" />
              <span>
                1.55 - if you play sports with average loads 3-5 times a week
              </span>
            </label>

            <label>
              <Field type="radio" name="activity" value="1.725" />
              <span>1,725 ​​- if you train fully 6-7 times a week</span>
            </label>

            <label>
              <Field type="radio" name="activity" value="1.9" />
              <span>
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </span>
            </label>
            <div className={css.activity_button_container}>
              <ButtonSubmit size={{SWidth: 300, MWidth: 360, LWidth: 192,}}>Next</ButtonSubmit>
              <button type="button">Back</button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
