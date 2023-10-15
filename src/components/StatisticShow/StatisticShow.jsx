import { LineChart } from 'components/LineChart/LineChart';
import css from './StatisticShow.module.css';
import { useEffect, useState } from 'react';
import operations from 'redux/meals/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserDashboardStatMonth,
  selectUserDashboardStatYear,
} from 'redux/meals/selectors';
import { BsArrowLeft } from 'react-icons/bs';
import { ReactComponent as ArrowDown } from '../../images/svg/header/arrow-down.svg';
import { Link } from 'react-router-dom';

export const StatisticShow = ({ containerRef }) => {
  const [period, setPeriod] = useState('month');
  const [vissible, setVissible] = useState(false);

  const statisticMonth = useSelector(selectUserDashboardStatMonth);
  const statisticYear = useSelector(selectUserDashboardStatYear);
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const dispatch = useDispatch();
  const nameOfMonth = new Date().toLocaleString('en-us', { month: 'long' });

  useEffect(() => {
    dispatch(operations.getStatisticForMonth({ month, year }));
    dispatch(operations.getStatisticForYear({ year }));
  }, [dispatch, month, year]);

  useEffect(() => {
    const container = containerRef.current;

    function closeDropDown(e) {
      const { name } = e.target;
      if (name === 'month' || name === 'year' || name === 'drop button') return;
      setVissible(false);
    }
    container.addEventListener('click', closeDropDown);

    return () => {
      container.removeEventListener('click', closeDropDown);
    };
  }, [containerRef]);

  const toggle = e => {
    if (e.target.name === 'drop button') setVissible(!vissible);
    return;
  };

  const handleStatisticDataForDashboard = statElement => {
    if (!Array.isArray(statElement)) {
      return;
    }

    const data = statElement?.reduce(
      (acc, { date, weight, water, breakfast, lunch, dinner, snack }) => {
        const calories = sumCalories(
          sumCaloriesForMeal(breakfast),
          sumCaloriesForMeal(lunch),
          sumCaloriesForMeal(dinner),
          sumCaloriesForMeal(snack)
        );
        const dataForDay = {
          water,
          weight,
          date,
          calories,
        };
        acc.push(dataForDay);

        return acc;
      },
      []
    );

    function sumCaloriesForMeal(meal) {
      return meal?.reduce((acc, element) => (acc += element.calories), 0);
    }
    function sumCalories(firstM, secondM, thirdM, fourthM) {
      return firstM + secondM + thirdM + fourthM;
    }

    return data;
  };
  const collectedStatForMonth = handleStatisticDataForDashboard(statisticMonth);
  const collectedStatForYear = handleStatisticDataForDashboard(statisticYear);

  const findAvaregeValueByMonth = () => {
    const avarege = collectedStatForMonth.reduce(
      (acc, item) => {
        acc.calories += item.calories;
        acc.water += item.water;
        acc.weight += item.weight;

        return acc;
      },
      { calories: 0, water: 0, weight: 0 }
    );

    avarege.calories /= collectedStatForMonth.length;
    avarege.water /= collectedStatForMonth.length;
    avarege.weight /= collectedStatForMonth.length;
    Math.floor(avarege.water);
    return avarege;
  };

  const findAvaregeValueByYear = element => {
    if (!Array.isArray(element)) {
      return;
    }

    let count = 0;
    let number = 0;
    const avaredge = element.reduce((acc, item) => {
      if (item > 0) {
        number += item;
        count += 1;
      }
      acc = Math.floor(number / count);
      return acc;
    }, 0);
    return avaredge;
  };

  const getStatFromMonth = element => {
    if (typeof element !== 'string') {
      return;
    }
    const dayInMonth = new Date(year, month, 0).getDate();

    let dayInMonthArray = [];
    let elementForDays = [];

    for (let i = 1; i <= dayInMonth; i += 1) {
      dayInMonthArray.push(i);
      elementForDays.push(0);
    }

    for (let i = 0; i <= collectedStatForMonth.length - 1; i += 1) {
      const day = new Date(collectedStatForMonth[i].date).getDate();
      elementForDays.splice(day - 1, 1, collectedStatForMonth[i][element]);
    }
    let number = elementForDays.indexOf(Math.max.apply(null, elementForDays));

    return { period: dayInMonthArray, sum: elementForDays, number };
  };

  const getStatFromYear = element => {
    if (typeof element !== 'string') {
      return;
    }

    const elementStat = [];
    const count = [];
    for (let i = 0; i < 12; i += 1) {
      elementStat.push(0);
      count.push(0);
    }

    collectedStatForYear.forEach(item => {
      const date = new Date(new Date(item.date)).getMonth();
      elementStat[date] += item[element];
      count[date] += 1;
    });

    for (let i = 0; i <= elementStat.length - 1; i++) {
      elementStat[i] /= count[i] || 1;
    }

    return elementStat;
  };

  const handleSelect = e => {
    const { name } = e.target;
    setPeriod(name);
  };

  return (
    <>
      <div className={css.select_menu_container}>
        <div>
          <div className={css.drop_container}>
            <Link to={'/'} data-name="link" >
              {' '}
              <BsArrowLeft style={{ width: 24, height: 24, verticalAlign: "middle" }}/>
            </Link>
            <button
              type="button"
              className={css.drop_button}
              name="drop button"
              onClick={toggle}
            >
              {period === 'month' ? 'Last month' : 'Last year'}
            </button>
            <ArrowDown
              style={
                vissible
                  ? { transform: 'rotate(180deg)' }
                  : { transform: 'rotate(0)' }
              }
            />
          </div>
          {vissible && (
            <div className={css.drop_menu}>
              <button
                type="button"
                onClick={handleSelect}
                name={period === 'month' ? 'year' : 'month'}
              >
                {period === 'month' ? 'Last year' : 'Last month'}
              </button>
            </div>
          )}
        </div>
        <p>{period === 'month' ? nameOfMonth : year}</p>
      </div>
      <div className={css.chart_container}>
        <div className={css.calories_element}>
          {period === 'month' && (
            <LineChart
              nameElement={'Calories'}
              getStatisticMonth={getStatFromMonth}
              getAvarageMonth={findAvaregeValueByMonth}
              period={period}
            />
          )}
          {period === 'year' && (
            <LineChart
              nameElement={'Calories'}
              getStatisticYear={getStatFromYear}
              getAvarageYear={findAvaregeValueByYear}
              period={period}
            />
          )}
        </div>
        <div className={css.water_element}>
          {period === 'month' && (
            <LineChart
              nameElement={'Water'}
              getStatisticMonth={getStatFromMonth}
              getAvarageMonth={findAvaregeValueByMonth}
              period={period}
            />
          )}
          {period === 'year' && (
            <LineChart
              nameElement={'Water'}
              getStatisticYear={getStatFromYear}
              getAvarageYear={findAvaregeValueByYear}
              period={period}
            />
          )}
        </div>
        <div className={css.weight_element}>
          <LineChart
            nameElement={'Weight'}
            getStatisticMonth={getStatFromMonth}
            getStatisticYear={getStatFromYear}
            getAvarageMonth={findAvaregeValueByMonth}
            getAvarageYear={findAvaregeValueByYear}
            period={period}
          />
        </div>
      </div>
    </>
  );
};
