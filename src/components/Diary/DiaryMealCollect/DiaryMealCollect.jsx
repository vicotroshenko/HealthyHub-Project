import { BsArrowLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectStatistictsForDayByMeal,
  selectUserData,
} from 'redux/meals/selectors';

import { DiaryMeal } from 'components/Diary/DiaryMeal/DiaryMeal';

import breakfastImage from '../../../images/png/main/breakfast_image.png';
import dinnerImage from '../../../images/png/main/dinner_image.png';
import lunchImage from '../../../images/png/main/lunch_image.png';
import snacktImage from '../../../images/png/main/snack_image.png';
import css from './DiaryMealCollect.module.css';

export const DiaryMealCollect = () => {
  const { breakfast, lunch, dinner, snack } = useSelector(selectUserData);
  const statistic = useSelector(selectStatistictsForDayByMeal);

  return (
    <>
      <div className={css.title_container}>
        <Link
          to={'/'}
          data-name="link"
        >
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
          statistic={statistic.breakfast}
        />
        <DiaryMeal
          meal={lunch}
          name={'Lunch'}
          image={lunchImage}
          statistic={statistic.lunch}
        />
        <DiaryMeal
          meal={dinner}
          name={'Dinner'}
          image={dinnerImage}
          statistic={statistic.dinner}
        />
        <DiaryMeal
          meal={snack}
          name={'Snack'}
          image={snacktImage}
          statistic={statistic.snack}
        />
      </div>
    </>
  );
};
