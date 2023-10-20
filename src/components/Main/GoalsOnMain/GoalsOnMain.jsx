import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/meals/selectors';
import { selectCaloriesConsuming } from 'redux/auth/selectors';
import css from './GoalsOnMain.module.css';
import { BubbleSVG } from 'components/SVG/BubbleSVG/BubbleSVG';
import { BottleSVG } from 'components/SVG/BottleSVG/BottleSVG';

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
            <BubbleSVG />
          </div>
          <div className={css.desc_container}>
            <p>Calories</p>
            <p>{caloriesGoalInteger}</p>
          </div>
        </div>
        <div className={css.box}>
          <div className={css.buble_icon_container}>
            <BottleSVG />
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
