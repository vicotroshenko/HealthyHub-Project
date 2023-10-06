import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Plus } from '../../images/svg/main-page/add.svg';
import breakfastImage from '../../images/png/main/breakfast_image.png';
import lunchImage from '../../images/png/main/lunch_image.png';
import dinnerImage from '../../images/png/main/dinner_image.png';
import snacktImage from '../../images/png/main/snack_image.png';
import { ModalMeal } from 'components/ModalMeal/ModalMeal';
import { selectStatisticsForCurrentDay } from 'redux/meals/selectors';
import style from './MealOnMain.module.css';

export const MealOnMain = () => {
  const [nameHover, setNameHover] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [numberOfMeals, setNumberOfMeals] = useState(['1']);

  const {
    breakfast = [{}],
    lunch = [{}],
    dinner = [{}],
    snack = [{}],
  } = useSelector(selectStatisticsForCurrentDay);

  const toggle = data => {
    setShowModal(!showModal);
    setModalData(data);
    setNumberOfMeals(['1']);
  };

  const hoveron = e => {
    setNameHover(e.currentTarget.dataset.hovername);
  };
  const hoveroff = () => {
    setNameHover('');
  };

  const addNewDish = () => {
    setNumberOfMeals(() => [...numberOfMeals, '1']);
  };

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
        <div className={style.namebox}>
          <h2>Diary</h2>
          <a href="/">See more</a>
        </div>
        <ul className={style.list}>
          <li
            className={style.item}
            onMouseEnter={hoveron}
            onMouseLeave={hoveroff}
            data-hovername="breakfast"
          >
            <div className={style.title_container}>
              <img src={breakfastImage} alt="breakfast logo" />
              <h3>Breakfast</h3>
            </div>

            <div
              className={
                nameHover === 'breakfast' ? style.hidden : style.meal_info
              }
            >
              <p>
                Carbonohidrates: <span>{breakfast[0].carbohydrates || 0}</span>
              </p>
              <p>
                Protein: <span>{breakfast[0].protein || 0}</span>
              </p>
              <p>
                Fat: <span>{breakfast[0].fat || 0}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                toggle({ name: 'Breakfast', image: breakfastImage })
              }
              className={
                nameHover !== 'breakfast' ? style.hidden : style.button
              }
            >
              <Plus fill="#E3FFA8" />
              Record your meal
            </button>
          </li>

          <li
            className={style.item}
            onMouseEnter={hoveron}
            onMouseLeave={hoveroff}
            data-hovername="lunch"
          >
            <div className={style.title_container}>
              <img src={lunchImage} alt="lunch logo" />
              <h3>Lunch</h3>
            </div>
            <div
              className={nameHover === 'lunch' ? style.hidden : style.meal_info}
            >
              <p>
                Carbonohidrates: <span>{lunch[0].carbohydrates || 0}</span>
              </p>
              <p>
                Protein: <span>{lunch[0].protein || 0}</span>
              </p>
              <p>
                Fat: <span>{lunch[0].fat || 0}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle({ name: 'Lunch', image: lunchImage })}
              className={nameHover !== 'lunch' ? style.hidden : style.button}
            >
              <Plus />
              Record your meal
            </button>
          </li>

          <li
            className={style.item}
            onMouseEnter={hoveron}
            onMouseLeave={hoveroff}
            data-hovername="dinner"
          >
            <div className={style.title_container}>
              <img src={dinnerImage} alt="dinner logo" />
              <h3>Dinner</h3>
            </div>
            <div
              className={
                nameHover === 'dinner' ? style.hidden : style.meal_info
              }
            >
              <p>
                Carbonohidrates: <span>{dinner[0].carbohydrates || 0}</span>
              </p>
              <p>
                Protein: <span>{dinner[0].protein || 0}</span>
              </p>
              <p>
                Fat: <span>{dinner[0].fat || 0}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle({ name: 'Dinner', image: dinnerImage })}
              className={nameHover !== 'dinner' ? style.hidden : style.button}
            >
              <Plus />
              Record your meal
            </button>
          </li>

          <li
            className={style.item}
            onMouseEnter={hoveron}
            onMouseLeave={hoveroff}
            data-hovername="snack"
          >
            <div className={style.title_container}>
              <img src={snacktImage} alt="snack logo" />
              <h3>Dinner</h3>
            </div>
            <div
              className={nameHover === 'snack' ? style.hidden : style.meal_info}
            >
              <p>
                Carbonohidrates: <span>{snack[0].carbohydrates || 0}</span>
              </p>
              <p>
                Protein: <span>{snack[0].protein || 0}</span>
              </p>
              <p>
                Fat: <span>{snack[0].fat || 0}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle({ name: 'Snack', image: snacktImage })}
              className={nameHover !== 'snack' ? style.hidden : style.button}
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
