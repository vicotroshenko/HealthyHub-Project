import breakfastImage from '../../../images/png/main/breakfast_image.png';
import lunchImage from '../../../images/png/main/lunch_image.png';
import dinnerImage from '../../../images/png/main/dinner_image.png';
import snacktImage from '../../../images/png/main/snack_image.png';
import { BsArrowLeft } from 'react-icons/bs';
import { DiaryMeal } from 'components/Diary/DiaryMeal/DiaryMeal';
import { useSelector } from 'react-redux';
import {
  selectStatisticBreakfast,
  selectStatisticDinner,
  selectStatisticLunch,
  selectStatisticSnack,
  selectUserData,
} from 'redux/meals/selectors';
import css from './DiaryMealCollect.module.css';
import { Link } from 'react-router-dom';

export const DiaryMealCollect = () => {
  const { breakfast, lunch, dinner, snack } = useSelector(selectUserData);
  const breakfastStat = useSelector(selectStatisticBreakfast);
  const lunchStat = useSelector(selectStatisticLunch);
  const dinnerStat = useSelector(selectStatisticDinner);
  const snackStat = useSelector(selectStatisticSnack);

  return (
    <>
      <div className={css.title_container}>
        <Link to={'/'} data-name="link">
          {' '}
          <BsArrowLeft style={{ width: 24, height: 24 }} />
        </Link>
        <h1 className={css.title}>Diary</h1>
      </div>
      <div className={css.inner_container}>
        <DiaryMeal
          meal={breakfast}
          name={'Breakfast'}
          image={breakfastImage}
          statistic={breakfastStat}
        />
        <DiaryMeal
          meal={lunch}
          name={'Lunch'}
          image={lunchImage}
          statistic={lunchStat}
        />
        <DiaryMeal
          meal={dinner}
          name={'Dinner'}
          image={dinnerImage}
          statistic={dinnerStat}
        />
        <DiaryMeal
          meal={snack}
          name={'Snack'}
          image={snacktImage}
          statistic={snackStat}
        />
      </div>
    </>
  );
};
