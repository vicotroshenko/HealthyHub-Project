import css from './RecommendedFoodOnMain.module.css';
import foodList from '../../../json/RecommendedFood.json';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const RecommendedFoodOnMain = () => {
  function shuffle() {
    let currentIndex = foodList.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [foodList[currentIndex], foodList[randomIndex]] = [
        foodList[randomIndex],
        foodList[currentIndex],
      ];
    }
    return foodList;
  }
	const shuffleFood = shuffle();

  return (
    <div className={css.recommendedFood}>
      <h2 className={css.rec_food_title}>Recommended food</h2>
      <ul className={css.list}>
        {shuffleFood.map((item, index) => (
          <li key={index} className={css.item}>
            <div className={css.image_container}>
              {/* <img src={item.img} alt={item.name}/> */}
            </div>
            <div className={css.desc_container}>
              <h3>{item.name}</h3>
              <p>
                {item.amount} <span>{item.calories}calories</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Link to="user/recommended" data-name="link" className={css.see_more_link}>
        See more
        <BsArrowRight style={{ verticalAlign: 'middle', marginLeft: 6 }} />
      </Link>
    </div>
  );
};
