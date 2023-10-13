import { useSelector } from 'react-redux';
import { ReactComponent as CaloriesImage } from '../../images/svg/main-page/bubble.svg';
import { ReactComponent as WaterImage } from '../../images/svg/main-page/milk.svg';
import { selectUserData } from 'redux/meals/selectors';
import { selectCaloriesConsuming } from 'redux/auth/selectors';
import css from './GoalsOnMain.module.css';

export const GoalsOnMain = () => {
  const { waterGoal } = useSelector(selectUserData);
  const caloriesGoal = useSelector(selectCaloriesConsuming);
  const caloriesGoalInteger = Math.floor(caloriesGoal);

  return (
    <>
      <h2 className={css.goal_title}>Daily goal</h2>
      <div className={css.goals_container}>
        <div className={css.box}>
          <div className={css.buble_icon_container}>
            <CaloriesImage />
          </div>
          <div className={css.desc_container}>
            <p>Calories</p>
            <p>{caloriesGoalInteger}</p>
          </div>
        </div>
        <div className={css.box}>
          <div className={css.buble_icon_container}>
            <WaterImage />
          </div>
          <div className={css.desc_container}>
            <p>Water</p>
            <p>
              {waterGoal}
              <span>ml</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
