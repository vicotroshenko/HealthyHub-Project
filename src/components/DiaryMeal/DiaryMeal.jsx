import style from './DiaryMeal.module.css';
import { ReactComponent as Edit } from '../../images/svg/diary/edit-2.svg';
import { ReactComponent as Plus } from '../../images/svg/main-page/add.svg';
import { useState } from 'react';
import { ModalMeal } from 'components/ModalMeal/ModalMeal';

export const DiaryMeal = ({ meal, name, image, statistic }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [numberOfMeals, setNumberOfMeals] = useState(['1']);
  const [changeDish, setChangeDish] = useState(null);

  const toggle = () => {
    setShowModal(!showModal);
    setModalData({ name, image });
    setNumberOfMeals(['1']);
  };

  const addNewDish = () => {
    setNumberOfMeals(() => [...numberOfMeals, '1']);
  };

  const handleEdit = editItem => {
    setChangeDish(editItem);
    toggle();
  };
  return (
    <>
      <ModalMeal
        showModal={showModal}
        data={modalData}
        toggle={toggle}
        addColection={addNewDish}
        numberColection={numberOfMeals}
        change={changeDish}
      />
      <div className={style.diary_container}>
        <div>
          <div className={style.meal_image}>
            <div className={style.meal_image_wrapper}>
              <img src={image} alt={name} />
            </div>
            <h2>{name}</h2>
          </div>
          <div className={style.meal_statisic}>
            <p>
              Carbonohidrates<span>{statistic.carbohydrates}</span>
            </p>
            <p>
              Protein<span>{statistic.protein}</span>
            </p>
            <p>
              Fat<span>{statistic.fat}</span>
            </p>
          </div>
        </div>

        <ul className={style.diary_meal_container}>
          {meal.map((item, index) => (
            <li key={item._id} className={style.dish_container}>
              <p>{index + 1}</p>
              <div className={style.wrapper}>
                <div>
                  <div className={style.dish_name}>
                    <h3>{item.title}</h3>
                  </div>

                  <div className={style.dish_elements}>
                    <p>
                      Carb.<span>{item.carbohydrates}</span>
                    </p>
                    <p>
                      Prot.<span>{item.protein}</span>
                    </p>
                    <p>
                      Fat.<span>{item.fat}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className={style.btn_edit}
                    onClick={() => handleEdit({ name, dish: item })}
                  >
                    <Edit />
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
          <li className={style.dish_container}>
            <p>{meal.length + 1}</p>
            <button type="button" onClick={toggle} className={style.button_add}>
              <Plus />
              Record your meal
            </button>
          </li>
          {meal.length <= 2 && (
            <li className={style.dish_add_numbers}>
              <p>{meal.length + 2}</p>
            </li>
          )}
          {meal.length <= 1 && (
            <li className={style.dish_add_numbers}>
              <p>{meal.length + 3}</p>
            </li>
          )}
          {meal.length === 0 && (
            <li className={style.dish_add_numbers}>
              <p>{meal.length + 4}</p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};