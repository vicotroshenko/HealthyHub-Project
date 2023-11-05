import PropTypes from 'prop-types';
import { Modal } from 'components/ModalWindow/Modal/Modal';
import { ReactComponent as Plus } from '../../../images/svg/main-page/add.svg';
import { useDispatch } from 'react-redux';
import operationsMeal from 'redux/meals/operations';
import css from './ModalMeal.module.css';
import { ButtonSubmit } from 'components/ButtonPrimery/ButtonPrimery';

export const ModalMeal = ({
  showModal = false,
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
    let dishes = [{}];

    function collectData(data){
      return data.length !== undefined
      ? data.forEach((item, index) => {
          if (!dishes[index]) {
            dishes.push({});
          }
          dishes[index][data.name] = item.value;
        })
      : (dishes[0][data.name] = data.value);
    } 
    collectData(title)
    collectData(carbohydrates)
    collectData(protein)
    collectData(fat)
    collectData(calories)
    
    for (const dish of dishes) {
      if (change) {
        dispatch(
          operationsMeal.updateDish({
            name: data.name,
            id: change.dish._id,
            dish,
          })
        );
        toggle();
        return;
      }

      dispatch(
        operationsMeal.addToMeal({ dish, name: data.name.toLowerCase() })
      );
    }
    toggle();
  };

  const deletCurrentDish = () => {
    dispatch(
      operationsMeal.deleteDishFromCurrentDay({
        name: data.name,
        id: change.dish._id,
      })
    );
    toggle();
  };

  return (
    <Modal toggle={toggle} styles={css.modal} visible={showModal}>
      <h1 className={css.title_page}>Record your meal</h1>
      <div className={css.name_container}>
        <div className={css.name_image_container}>
          <img src={data?.image} alt={data?.name} />
        </div>
        <h2>{data?.name}</h2>
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
                    min="0"
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="protein"
                    placeholder="Protein"
                    defaultValue={change ? change.dish.protein : ''}
                    className={css.protein}
                    min="0"
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="fat"
                    placeholder="Fat"
                    defaultValue={change ? change.dish.fat : ''}
                    className={css.fat}
                    min="0"
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="calories"
                    placeholder="Calories"
                    defaultValue={change ? change.dish.calories : ''}
                    className={css.calories}
                    min="0"
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
            <ButtonSubmit size={{ SWidth: 276, MWidth: 212 }}>
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
};


ModalMeal.propTypes = {
  toggle: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  data: PropTypes.object,
  numberColection: PropTypes.array.isRequired,
  addColection: PropTypes.func.isRequired,
  change: PropTypes.object,
}