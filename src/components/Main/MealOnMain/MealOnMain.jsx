import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Plus } from '../../../images/svg/main-page/add.svg';
import breakfastImage from '../../../images/png/main/breakfast_image.png';
import lunchImage from '../../../images/png/main/lunch_image.png';
import dinnerImage from '../../../images/png/main/dinner_image.png';
import snacktImage from '../../../images/png/main/snack_image.png';
import { ModalMeal } from 'components/ModalWindow/ModalMeal/ModalMeal';
import {
  selectStatisticBreakfast,
  selectStatisticDinner,
  selectStatisticLunch,
  selectStatisticSnack,
  selectUserData,
} from 'redux/meals/selectors';
import css from './MealOnMain.module.css';
import operations from 'redux/meals/operations';
import { NavLink } from 'react-router-dom';

export const MealOnMain = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [numberOfMeals, setNumberOfMeals] = useState(['1']);

  const breakfast = useSelector(selectStatisticBreakfast);
  const lunch = useSelector(selectStatisticLunch);
  const dinner = useSelector(selectStatisticDinner);
  const snack = useSelector(selectStatisticSnack);
  const { isLoading } = useSelector(selectUserData)


  const showButtonAdd = (data) => {
    if(typeof data !== "object") return;

    const values = Object.values(data)
    const maxValue = values.reduce((a, b) => a + b, 0)
    return maxValue === 0;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if(isLoading){
      dispatch(operations.getStatistic());
    }
  }, [dispatch, isLoading]);

  const toggle = data => {
    setShowModal(!showModal);
    setModalData(data);
    setNumberOfMeals(['1']);
  };


  const addNewDish = () => {
    setNumberOfMeals(() => [...numberOfMeals, '1']);
  };

  const showBtnBreakfast = showButtonAdd(breakfast);
  const showBtnLunch = showButtonAdd(lunch);
  const showBtnDinner = showButtonAdd(dinner);
  const showBtnSnack = showButtonAdd(snack);

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
          <NavLink to={"user/diary"} data-name="link" >See more</NavLink>
        </div>
        <ul className={css.list}>
          <li
            className={css.item}
            data-hovername="breakfast"
          >
            <div className={css.title_container}>
              <img src={breakfastImage} alt="breakfast logo" />
              <h3 className={css.sub_title}>Breakfast</h3>
            </div>

            <div
              className={
                showBtnBreakfast ? css.hidden : css.meal_info
              }
            >
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
              className={
                !showBtnBreakfast ? css.hidden : css.button
              }
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
              <img src={lunchImage} alt="lunch logo" />
              <h3 className={css.sub_title}>Lunch</h3>
            </div>
            <div
              className={showBtnLunch ? css.hidden : css.meal_info}
            >
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
              <img src={dinnerImage} alt="dinner logo" />
              <h3 className={css.sub_title}>Dinner</h3>
            </div>
            <div
              className={
                showBtnDinner ? css.hidden : css.meal_info
              }
            >
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
              <img src={snacktImage} alt="snack logo" />
              <h3 className={css.sub_title}>Dinner</h3>
            </div>
            <div
              className={showBtnSnack ? css.hidden : css.meal_info}
            >
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
