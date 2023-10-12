import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import settinImage from '../../images/png/setting/setting.png';
import style from './SettingSelect.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserSettings } from 'redux/auth/selectors';
import { ReactComponent as DownloadPic } from '../../images/svg/setting/direct-inbox.svg';
import { useEffect, useState } from 'react';
import operations from 'redux/auth/operations';

const schema = yup.object().shape({
  name: yup.string().required(),
  avatarURL: yup.string(),
  age: yup.number().max(100).required(),
  gender: yup.string().required(),
  height: yup.number().max(300).required(),
  weight: yup.number().max(350).required(),
  activity: yup.string().required(),
});

export const SettingSelect = () => {
  const dispatch = useDispatch();

  const { activity, age, avatarURL, gender, height, name, weight } =
    useSelector(selectUserSettings);

  const initialValues = {
    name,
    age,
    gender,
    height,
    weight,
    activity: activity.toString(),
  };

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  const handleSubmitSetting = values => {
    values.activity = Number(values.activity);

    dispatch(operations.updateSetting(values));
    dispatch(operations.updateWeight({ weight: values.weight }));
  };

  const handleFileUpload = event => {
    const file = event.currentTarget.files[0];
    const pathFile = event.target.value;

    const formData = new FormData();
    formData.append('avatarURL', file);
    formData.append('path', pathFile);

    dispatch(operations.updateAvatars(formData));
  };

  return (
    <div className={style.container}>
      <div className={style.up_container}>
        <h1>Profile setting</h1>
      </div>
      <AuthContainer image={settinImage}>
        <div className={style.from_container}>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmitSetting}
          >
            <Form>
              <div className={style.btn_container_up}>
                <button type="button" className={style.btn_cancel}>
                  Cancel
                </button>
                <button type="submit" className={style.btn_save}>
                  Save
                </button>
              </div>
              <div role="group" className={style.setting_form}>
                <div className={style.setting_up}>
                  <label>
                    {' '}
                    Your name
                    <Field
                      type="text"
                      name="name"
                      className={style.input_field}
                    />
                  </label>

                  <label className={style.avart_item_label}>
                    {' '}
                    <span className={style.avatar_lable_name}>Your photo</span>
                    <img
                      src={avatarURL}
                      alt="user's avatar"
                      className={style.user_avatar}
                    />
                    <input
                      type="file"
                      name="avatarURL"
                      onChange={handleFileUpload}
                      accept=".jpg, .png"
                    />
                    <DownloadPic />
                    <span className={style.avatar_desc}>
                      Download new photo
                    </span>
                  </label>

                  <label>
                    {' '}
                    Your age
                    <Field
                      type="number"
                      name="age"
                      max="100"
                      className={style.input_field}
                    />
                  </label>

                  <div className={style.gender_item}>
                    <h4>Gender</h4>
                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="male"
                        className={style.input_field_radio}
                      />
                      Male
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="female"
                        className={style.input_field_radio}
                      />
                      Female
                    </label>
                  </div>

                  <label>
                    {' '}
                    Your height
                    <Field
                      type="number"
                      name="height"
                      max="300"
                      className={style.input_field}
                    />
                  </label>

                  <label>
                    {' '}
                    Your weight
                    <Field
                      type="number"
                      name="weight"
                      max="350"
                      className={style.input_field}
                    />
                  </label>
                </div>

                <h3>Your activity</h3>
                <div className={style.setting_bottom}>
                  <label>
                    <Field
                      type="radio"
                      name="activity"
                      value="1.2"
                      className={style.input_field_radio}
                    />
                    <span>
                      1.2 - if you do not have physical activity and sedentary
                      work
                    </span>
                  </label>

                  <label>
                    <Field
                      type="radio"
                      name="activity"
                      value="1.375"
                      className={style.input_field_radio}
                    />
                    <span>
                      1,375 - if you do short runs or light gymnastics 1-3 times
                      a week
                    </span>
                  </label>

                  <label>
                    <Field
                      type="radio"
                      name="activity"
                      value="1.55"
                      className={style.input_field_radio}
                    />
                    <span>
                      1.55 - if you play sports with average loads 3-5 times a
                      week
                    </span>
                  </label>

                  <label>
                    <Field
                      type="radio"
                      name="activity"
                      value="1.725"
                      className={style.input_field_radio}
                    />
                    <span>1,725 ​​- if you train fully 6-7 times a week</span>
                  </label>

                  <label>
                    <Field
                      type="radio"
                      name="activity"
                      value="1.9"
                      className={style.input_field_radio}
                    />
                    <span>
                      1.9 - if your work is related to physical labor, you train
                      2 times a day and include strength exercises in your
                      training program
                    </span>
                  </label>
                </div>
                <div className={style.btn_container_bottom}>
                  <button type="submit" className={style.btn_save}>
                    Save
                  </button>
                  <button type="button" className={style.btn_cancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </AuthContainer>
    </div>
  );
};
