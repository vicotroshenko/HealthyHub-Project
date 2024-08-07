import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthInform } from 'redux/auth/selectors';
import operationsMeal from 'redux/meals/operations';
import { selectStatistictsForDayByMeal } from 'redux/meals/selectors';

import { ModalMeal } from 'components/ModalWindow/ModalMeal/ModalMeal';

import breakfastImage from '../../../images/png/main/breakfast_image.png';
import dinnerImage from '../../../images/png/main/dinner_image.png';
import lunchImage from '../../../images/png/main/lunch_image.png';
import snacktImage from '../../../images/png/main/snack_image.png';
import { ReactComponent as Plus } from '../../../images/svg/main-page/add.svg';
import css from './MealOnMain.module.css';

export const MealOnMain = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [numberOfMeals, setNumberOfMeals] = useState(['1']);

  const { breakfast, lunch, dinner, snack } = useSelector(
    selectStatistictsForDayByMeal
  );
  const { isLoggedIn } = useSelector(selectAuthInform);

  const showMealStat = useCallback((data) => {
    if (typeof data !== 'object') return;

    const values = Object.values(data);
    const maxValue = values.reduce((a, b) => a + b, 0);
    return maxValue === 0;
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && !showModal) {
      dispatch(operationsMeal.getStatistic());
    }
  }, [dispatch, isLoggedIn, showModal]);

  const toggle = (data) => {
    setShowModal(!showModal);
    setModalData(data);
    setNumberOfMeals(['1']);
  };

  const addNewDish = () => {
    setNumberOfMeals(() => [...numberOfMeals, '1']);
  };

  const showBtnBreakfast = showMealStat(breakfast);
  const showBtnLunch = showMealStat(lunch);
  const showBtnDinner = showMealStat(dinner);
  const showBtnSnack = showMealStat(snack);

  return (
    <>
      <ModalMeal
        showModal={showModal}
        data={modalData}
        toggle={toggle}
        addColection={addNewDish}
        numberColection={numberOfMeals}
      />
      <div>
        <div className={css.namebox}>
          <h2>Diary</h2>
          <NavLink
            to={'user/diary'}
            data-name="link"
          >
            See more
          </NavLink>
        </div>
        <ul className={css.list}>
          <li
            className={css.item}
            data-hovername="breakfast"
          >
            <div className={css.title_container}>
              <img
                src={breakfastImage}
                alt="breakfast logo"
              />
              <h3 className={css.sub_title}>Breakfast</h3>
            </div>

            <div className={showBtnBreakfast ? css.hidden : css.meal_info}>
              <p>
                Carbonohidrates: <span>{breakfast.carbohydrates || 0}</span>
              </p>
              <p>
                Protein: <span>{breakfast.protein || 0}</span>
              </p>
              <p>
                Fat: <span>{breakfast.fat || 0}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                toggle({ name: 'Breakfast', image: breakfastImage })
              }
              className={!showBtnBreakfast ? css.hidden : css.button}
            >
              <Plus fill="#E3FFA8" />
              Record your meal
            </button>
          </li>

          <li
            className={css.item}
            data-hovername="lunch"
          >
            <div className={css.title_container}>
              <img
                src={lunchImage}
                alt="lunch logo"
              />
              <h3 className={css.sub_title}>Lunch</h3>
            </div>
            <div className={showBtnLunch ? css.hidden : css.meal_info}>
              <p>
                Carbonohidrates: <span>{lunch.carbohydrates || 0}</span>
              </p>
              <p>
                Protein: <span>{lunch.protein || 0}</span>
              </p>
              <p>
                Fat: <span>{lunch.fat || 0}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle({ name: 'Lunch', image: lunchImage })}
              className={!showBtnLunch ? css.hidden : css.button}
            >
              <Plus />
              Record your meal
            </button>
          </li>

          <li
            className={css.item}
            data-hovername="dinner"
          >
            <div className={css.title_container}>
              <img
                src={dinnerImage}
                alt="dinner logo"
              />
              <h3 className={css.sub_title}>Dinner</h3>
            </div>
            <div className={showBtnDinner ? css.hidden : css.meal_info}>
              <p>
                Carbonohidrates: <span>{dinner.carbohydrates || 0}</span>
              </p>
              <p>
                Protein: <span>{dinner.protein || 0}</span>
              </p>
              <p>
                Fat: <span>{dinner.fat || 0}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle({ name: 'Dinner', image: dinnerImage })}
              className={!showBtnDinner ? css.hidden : css.button}
            >
              <Plus />
              Record your meal
            </button>
          </li>

          <li
            className={css.item}
            data-hovername="snack"
          >
            <div className={css.title_container}>
              <img
                src={snacktImage}
                alt="snack logo"
              />
              <h3 className={css.sub_title}>Dinner</h3>
            </div>
            <div className={showBtnSnack ? css.hidden : css.meal_info}>
              <p>
                Carbonohidrates: <span>{snack.carbohydrates || 0}</span>
              </p>
              <p>
                Protein: <span>{snack.protein || 0}</span>
              </p>
              <p>
                Fat: <span>{snack.fat || 0}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle({ name: 'Snack', image: snacktImage })}
              className={!showBtnSnack ? css.hidden : css.button}
            >
              <Plus />
              Record your meal
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
