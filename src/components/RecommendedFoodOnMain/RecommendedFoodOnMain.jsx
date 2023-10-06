import style from './RecommendedFoodOnMain.module.css';
import foodList from '../../json/RecommendedFood.json';
import { ReactComponent as Arrow } from '../../images/svg/main-page/arrow-right.svg';
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
    <div className={style.recommendedFood}>
      <h2 className={style.rec_food_title}>Recommended food</h2>
      <ul className={style.list}>
        {shuffleFood.map((item, index) => (
          <li key={index} className={style.item}>
            <div className={style.image_container}>
              {/* <img src={item.img} alt={item.name}/> */}
            </div>
            <div className={style.desc_container}>
              <h3>{item.name}</h3>
              <p>
                {item.amount} <span>{item.calories}calories</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/recommended" className={style.see_more_link}>
        See more
        <Arrow style={{ verticalAlign: 'middle', marginLeft: 6 }} />
      </Link>
    </div>
  );
};
