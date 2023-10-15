import { GoalsOnMain } from 'components/GoalsOnMain/GoalsOnMain';
import { WaterOnMain } from 'components/WaterOnMain/WaterOnMain';
import { FoodOnMain } from 'components/FoodOnMain/FoodOnMain';
import { BsArrowRight } from 'react-icons/bs';
import css from './MainInformation.module.css';
import { NavLink } from 'react-router-dom';

export const MainInformation = () => {
  return (
    <div className={css.inner_container}>
      <div className={css.up_page_main}>
        <h1 className={css.title}>Today</h1>
        <NavLink to={'user/statistic'} data-name="link">
          On the way to the goal
          <BsArrowRight style={{ marginLeft: 6, verticalAlign: 'middle' }} />
        </NavLink>
      </div>
      <div>
        <GoalsOnMain />
      </div>
      <div>
        <WaterOnMain />
      </div>
      <div>
        <FoodOnMain />
      </div>
    </div>
  );
};
