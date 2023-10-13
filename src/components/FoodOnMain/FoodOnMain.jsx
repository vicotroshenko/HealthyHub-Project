import { Dough } from 'components/Dough/Dough';
import { useSelector } from 'react-redux';
import {
  selectCaloriesConsuming,
  selectGainMuscle,
  selectLoseFat,
  selectMaintain,
  selectUserGoal,
} from 'redux/auth/selectors';
import { useEffect, useState } from 'react';
import css from './FoodOnMain.module.css';
import { selectStatisticsForCurrentDayAllElem } from 'redux/meals/selectors';

export const FoodOnMain = () => {
  const [goal, setGoal] = useState({});

  const dayCalories = useSelector(selectCaloriesConsuming);
  const loseFatGoal = useSelector(selectLoseFat);
  const maintainGoal = useSelector(selectMaintain);
  const gainMusculGoal = useSelector(selectGainMuscle);
  const userGoal = useSelector(selectUserGoal);
  const statistic = useSelector(selectStatisticsForCurrentDayAllElem);

  useEffect(() => {
    switch (userGoal) {
      case 'Lose fat':
        setGoal(loseFatGoal);
        return;
      case 'Maintain':
        setGoal(maintainGoal);
        return;
      case 'Gain Muscle':
        setGoal(gainMusculGoal);
        return;
      default:
        setGoal({});
    }
  }, [userGoal, loseFatGoal, maintainGoal, gainMusculGoal]);

  return (
    <>
      <h2 className={css.food_title}>Food</h2>
      <div className={css.food_container}>
        <div>
          <Dough
            dayAmount={dayCalories}
            currentAmount={statistic.calories}
            color={'#45FFBC'}
            text={{ title: false, describe: 'calories' }}
            styles={{
              container: { width: 172, height: 172 },
              title: { fontSize: 32, margin: 0 },
              bold: 65,
            }}
          />
        </div>

        <div>
          <div className={css.stat_wrapper}>
            <Dough
              dayAmount={goal.carbonohidrates}
              currentAmount={statistic.carbohydrates}
              color={'#FFC4F7'}
              text={{ title: false, describe: '' }}
              styles={{
                container: { width: 55, height: 55 },
                title: { fontSize: 14, fontWeight: 400, lineHeight: 1.43 },
                bold: 18,
              }}
            />
            <div className={css.food_info}>
              <h3>Carbonohidrates</h3>
              <p>
                Goal<span>{goal.carbonohidrates || 0}</span>
              </p>
              <p>
                left
                <span>
                  {(
                    goal.carbonohidrates - statistic.carbohydrates || 0
                  ).toFixed(2)}
                </span>
              </p>
            </div>
          </div>

          <div className={css.stat_wrapper}>
            <Dough
              dayAmount={goal.protein}
              currentAmount={statistic.protein}
              color={'#FFF3B7'}
              text={{ title: false, describe: '' }}
              styles={{
                container: { width: 55, height: 55 },
                title: { fontSize: 14, fontWeight: 400, lineHeight: 1.43 },
                bold: 18,
              }}
            />
            <div className={css.food_info}>
              <h3>Protein</h3>
              <p>
                Goal<span>{goal.protein || 0}</span>
              </p>
              <p>
                left
                <span>
                  {(goal.protein - statistic.protein || 0).toFixed(2)}
                </span>
              </p>
            </div>
          </div>

          <div className={css.stat_wrapper}>
            <Dough
              dayAmount={goal.fat}
              currentAmount={statistic.fat}
              color={'#B6B6B6'}
              text={{ title: false, describe: '' }}
              styles={{
                container: { width: 55, height: 55 },
                title: { fontSize: 14, fontWeight: 400, lineHeight: 1.43 },
                bold: 18,
              }}
            />
            <div className={css.food_info}>
              <h3>Fat</h3>
              <p>
                Goal<span>{goal.fat || 0}</span>
              </p>
              <p>
                left<span>{(goal.fat - statistic.fat || 0).toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
