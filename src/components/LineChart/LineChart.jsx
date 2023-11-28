import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import css from './LineChart.module.css';
import { DragElement } from 'components/DragElement/DragElement';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title
);

export const LineChart = ({
  period,
  nameElement,
  getStatisticMonth,
  getAvarageMonth,
  getAvarageYear,
  getStatisticYear,
}) => {
  const monthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let checkBoolean = period === 'month';

  const getStatisticForDay = () =>
    checkBoolean ? getStatisticMonth(nameElement.toLowerCase()) : {};
  const statisticForDay = getStatisticForDay();

  
  const getStatisticForYear = () =>
    !checkBoolean ? getStatisticYear(nameElement.toLowerCase()) : [];
  const statisticForYear = getStatisticForYear();


  const getAvaregeNumbers = () => {
    if (checkBoolean) {
      return Math.floor(getAvarageMonth()[nameElement.toLowerCase()]);
    } else {
      return getAvarageYear(statisticForYear || [0]);
    }
  };
  
  let avaregeNumbers = getAvaregeNumbers();

  const maxNumber = checkBoolean
    ? Math.floor(Math.max.apply(null, statisticForDay.sum))
    : Math.floor(Math.max.apply(null, statisticForYear));

  const maxNumberIndex = statisticForYear.indexOf(
    Math.max.apply(null, statisticForYear)
  );


  const data = {
    labels: checkBoolean ? statisticForDay.period : monthList,
    datasets: [
      {
        label: '',
        data: checkBoolean ? statisticForDay.sum : statisticForYear,
        backgroundColor: 'rgba(192, 75, 91, 0.4)',
        borderColor: '#E3FFA8',
        tension: 0.3,
        pointRadius: 0,
        fill: false,
        lineTension: 0.5,
        borderCapStyle: 'butt',
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: '#1f1e1e',
        },
      },
      y: {
        grid: {
          display: true,
          color: '#1f1e1e',
        },
        beginAtZero: true,
        max: maxNumber * 1.6,
      },
    },
  };
  const achievementTraker = {
    id: 'achievementTraker',
    afterDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;
      checkBoolean
        ? point(statisticForDay.number, statisticForDay.number)
        : point(maxNumberIndex, maxNumberIndex);
      function point(x, y) {
        ctx.beginPath();
        const angle = Math.PI / 180;
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#E3FFA8';
        ctx.fillStyle = '#E3FFA8';
        ctx.arc(
          chart.getDatasetMeta(0).data[x].x,
          chart.getDatasetMeta(0).data[y].y,
          5,
          angle * 0,
          angle * 360,
          false
        );
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        return;
      }
    },
  };
  const plugins = [achievementTraker];

  return (
    <>
      {nameElement !== 'Weight' && (
        <div className={css.line_container}>
          <div className={css.title_container}>
            <h3>{nameElement}</h3>
            <p className={css.average}>
              Average value:<span>{avaregeNumbers}</span>
            </p>
          </div>
          <div className={css.line}>
            <Line
              data={data}
              options={options}
              plugins={plugins}
              className={css.chart_block}
            ></Line>
            <DragElement>
              <h3 className={css.drag_title}>{maxNumber}</h3>
              <p className={css.drag_desc}>{nameElement}</p>
            </DragElement>
          </div>
        </div>
      )}
      {nameElement === 'Weight' && (
        <div className={css.weight}>
          <div className={css.title_container}>
            <h3>{nameElement}</h3>
            <p className={css.average}>
              Average value:<span>{avaregeNumbers}</span>
            </p>
          </div>
          <div className={css.weight_container}>
            <ul className={css.weight_days}>
              {checkBoolean &&
                statisticForDay.period?.map((item, index) => (
                  <li key={`${index}`}>{item}</li>
                ))}
              {!checkBoolean &&
                monthList?.map((item, index) => (
                  <li style={{ width: 58 }} key={`${index}`}>
                    {item}
                  </li>
                ))}
            </ul>
            <ul className={css.weight_num}>
              {checkBoolean &&
                statisticForDay.sum?.map((item, index) => (
                  <li key={`${index}`}>{item}</li>
                ))}
              {!checkBoolean &&
                statisticForYear?.map((item, index) => (
                  <li style={{ width: 58 }} key={`${index}`}>
                    {Math.floor(item)}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

LineChart.propTypes = {
  period: PropTypes.string.isRequired,
  nameElement: PropTypes.string.isRequired,
  getStatisticMonth: PropTypes.func,
  getAvarageMonth: PropTypes.func,
  getAvarageYear: PropTypes.func,
  getStatisticYear: PropTypes.func,
};
