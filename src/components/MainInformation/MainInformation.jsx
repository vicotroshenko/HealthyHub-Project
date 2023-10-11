import { GoalsOnMain } from 'components/GoalsOnMain/GoalsOnMain';
import { WaterOnMain } from 'components/WaterOnMain/WaterOnMain';
import { FoodOnMain } from 'components/FoodOnMain/FoodOnMain';
import { ReactComponent as Arrow } from '../../images/svg/main-page/arrow-right.svg';
import style from './MainInformation.module.css';
import { NavLink } from 'react-router-dom';

export const MainInformation = () => {
  return (
    <div className={style.main_container}>
      <div className={style.inner_container}>
        <div className={style.up_page_main}>
          <h1>Today</h1>
          <NavLink to={"/statistic"}>
            On the way to the goal
            <Arrow style={{ marginLeft: 6, verticalAlign: 'top' }} />
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
    </div>
  );
};
