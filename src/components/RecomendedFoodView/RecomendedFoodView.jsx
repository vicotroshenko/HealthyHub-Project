import foodList from '../../json/RecommendedFood.json';
import style from './RecomendedFoodView.module.css';

export const RecommendedFoodView = () => {
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
  const shuffledFood = shuffle();

  return (
    <div>
      <ul className={style.list}>
        {shuffledFood.map((item, index) => (
          <li key={index} className={style.item}>
            <div className={style.image_container}>
              <img src={item.img} alt={item.name}/>
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
    </div>
  );
};
