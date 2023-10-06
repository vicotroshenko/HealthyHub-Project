import { Modal } from 'components/Modal/Modal';
import { ReactComponent as Plus } from '../../images/svg/main-page/add.svg';
import { useDispatch } from 'react-redux';
import operations from 'redux/meals/operations';
import style from './ModalMeal.module.css';

export const ModalMeal = ({
  showModal,
  data,
  toggle,
  numberColection,
  addColection,
}) => {
  const dispatch = useDispatch();

  const handleMealInform = event => {
    const { title, carbohydrates, protein, fat, calories } = event.target;
    event.preventDefault();
    const dishes = [{}];

    title.length !== undefined
      ? title.forEach((item, index) => {
          if (!dishes[index]) {
            dishes.push({});
          }
          dishes[index].title = item.value;
        })
      : (dishes[0].title = title.value);

    carbohydrates.length !== undefined
      ? carbohydrates.forEach((item, index) => {
          if (!dishes[index]) {
            dishes.push({});
          }
          dishes[index].carbohydrates = item.value;
        })
      : (dishes[0].carbohydrates = carbohydrates.value);

    protein.length !== undefined
      ? protein.forEach((item, index) => {
          if (!dishes[index]) {
            dishes.push({});
          }
          dishes[index].protein = item.value;
        })
      : (dishes[0].protein = protein.value);

    fat.length !== undefined
      ? fat.forEach((item, index) => {
          if (!dishes[index]) {
            dishes.push({});
          }
          dishes[index].fat = item.value;
        })
      : (dishes[0].fat = fat.value);

    calories.length !== undefined
      ? calories.forEach((item, index) => {
          if (!dishes[index]) {
            dishes.push({});
          }
          dishes[index].calories = item.value;
        })
      : (dishes[0].calories = calories.value);

    for (const dish of dishes) {
      switch (data.name) {
        case 'Breakfast':
          dispatch(operations.addBreakfast(dish));
          break;
        case 'Lunch':
          dispatch(operations.addLunch(dish));
          break;
        case 'Dinner':
          dispatch(operations.addDinner(dish));
          break;
        case 'Snack':
          dispatch(operations.addSnack(dish));
          break;
        default:
          return console.log('Error');
      }
    }

    toggle();
  };

  if (showModal) {
    return (
      <Modal onClose={toggle} styles={style.modal}>
        <div className={style.title_container}>
          <div className={style.title_image_container}>
            <img src={data.image} alt={data.name} />
          </div>
          <h1>{data.name}</h1>
        </div>

        <form className={style.form_container} onSubmit={handleMealInform}>
          <div role="group" style={{ width: '100%' }}>
            {numberColection.map((item, index) => (
              <div key={index} className={style.inner_form}>
                <label>
                  <input
                    type="text"
                    name="title"
                    placeholder="The name of the product or dish"
                    className={style.title}
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="carbohydrates"
                    placeholder="Carbonoh."
                    className={style.carbohydrates}
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="protein"
                    placeholder="Protein"
                    className={style.protein}
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="fat"
                    placeholder="Fat"
                    className={style.fat}
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="calories"
                    placeholder="Calories"
                    className={style.calories}
                  />
                </label>
              </div>
            ))}

            <button
              type="button"
              onClick={addColection}
              className={style.add_more}
            >
              <Plus />
              Add more
            </button>

            <div className={style.btn_container}>
              <button type="submit" className={style.button_submit}>
                Confirm
              </button>
              <button
                type="button"
                onClick={toggle}
                className={style.button_cancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </Modal>
    );
  }
};
