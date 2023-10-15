import { Modal } from 'components/Modal/Modal';
import { ReactComponent as Plus } from '../../images/svg/main-page/add.svg';
import { useDispatch } from 'react-redux';
import operations from 'redux/meals/operations';
import css from './ModalMeal.module.css';
import { ButtonSubmit } from 'components/ButtonPrimery/ButtonPrimery';

export const ModalMeal = ({
  showModal,
  data,
  toggle,
  numberColection,
  addColection,
  change = null,
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

    toggle();

    for (const dish of dishes) {
      if (change) {
        dispatch(
          operations.updateDish({ name: data.name, id: change.dish._id, dish })
        );
        return;
      }

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
  };

  const deletCurrentDish = () => {
    dispatch(
      operations.deleteDishFromCurrentDay({
        name: data.name,
        id: change.dish._id,
      })
    );
    toggle();
  };


  if (showModal) {
    return (
      <Modal onClose={toggle} styles={css.modal}>
        <h1 className={css.title_page}>Record your meal</h1>
        <div className={css.name_container}>
          <div className={css.name_image_container}>
            <img src={data.image} alt={data.name} />
          </div>
          <h2>{data.name}</h2>
        </div>

        <form className={css.form_container} onSubmit={handleMealInform}>
          <div role="group" style={{ width: '100%' }}>
          <div className={css.scroll_container}>
            {numberColection.map((item, index) => (
              <div key={index} className={css.inner_form}>
                <label>
                  <input
                    type="text"
                    name="title"
                    placeholder="The name of the product or dish"
                    defaultValue={change ? change.dish.title : ''}
                    className={css.title}
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="carbohydrates"
                    placeholder="Carbonoh."
                    defaultValue={change ? change.dish.carbohydrates : ''}
                    className={css.carbohydrates}
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="protein"
                    placeholder="Protein"
                    defaultValue={change ? change.dish.protein : ''}
                    className={css.protein}
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="fat"
                    placeholder="Fat"
                    defaultValue={change ? change.dish.fat : ''}
                    className={css.fat}
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="calories"
                    placeholder="Calories"
                    defaultValue={change ? change.dish.calories : ''}
                    className={css.calories}
                  />
                </label>
              </div>
            ))}

            {!change && (
              <button
                type="button"
                onClick={addColection}
                className={css.add_more}
              >
                <Plus />
                Add more
              </button>
            )}
            {change && (
              <button
                type="button"
                onClick={deletCurrentDish}
                className={css.add_more}
              >
                Delete
              </button>
            )}
          </div>
            <div className={css.btn_container}>
            <ButtonSubmit size={{SWidth: 276, MWidth: 212}}>
              <span>Confirm</span>
            </ButtonSubmit>
              <button
                type="button"
                onClick={toggle}
                className={css.button_cancel}
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
