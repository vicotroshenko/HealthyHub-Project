import { useSelector } from 'react-redux';
import css from './RecomendedFoodView.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import operationsRecommended from 'redux/recommended/operations';
import { selectAuthInform } from 'redux/auth/selectors';

export const RecommendedFoodView = () => {
  const dispatch = useDispatch();
  const recommendedFood = useSelector(
    state => state.recommended.recommendedFood
  );
  const { isLoggedIn } = useSelector(selectAuthInform);
  let recFod = useRef([...recommendedFood]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(operationsRecommended.getRecommendedFood());
    }
  }, [dispatch, isLoggedIn]);

  function shuffle() {
    let currentIndex = recFod.current.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [recFod.current[currentIndex], recFod.current[randomIndex]] = [
        recFod.current[randomIndex],
        recFod.current[currentIndex],
      ];
    }
    return recFod.current;
  }

  const shuffledFood = shuffle();

  return (
    <div>
      <ul className={css.list}>
        {shuffledFood.map((item, index) => (
          <li key={index} className={css.item}>
            <div className={css.image_container}>
              <img src={item.img} alt={item.name} />
            </div>
            <div className={css.desc_container}>
              <h3 className={css.sub_title}>{item.name}</h3>
              <p>
                {item.amount} <span>{item.calories}calories</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
