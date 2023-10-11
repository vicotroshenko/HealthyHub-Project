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
import style from './LineChart.module.css';
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

  const statisticObject = checkBoolean
    ? getStatisticMonth(nameElement.toLowerCase())
    : {};
  const statisticForYear = !checkBoolean
    ? getStatisticYear(nameElement.toLowerCase())
    : [];

  let avaregeNumbers = null;
  if (checkBoolean) {
    avaregeNumbers = Math.floor(getAvarageMonth()[nameElement.toLowerCase()]);
  } else {
    avaregeNumbers = getAvarageYear(statisticForYear || [0]);
  }

  const maxNumber = checkBoolean
    ? Math.floor(Math.max.apply(null, statisticObject.sum))
    : Math.floor(Math.max.apply(null, statisticForYear));
  const maxNumberIndex = statisticForYear.indexOf(
    Math.max.apply(null, statisticForYear)
  );

  const data = {
    labels: checkBoolean ? statisticObject.period : monthList,
    datasets: [
      {
        label: '',
        data: checkBoolean ? statisticObject.sum : statisticForYear,
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
      const {
        ctx
      } = chart;
      checkBoolean
        ? point(statisticObject.number, statisticObject.number)
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
        <div className={style.line_container}>
          <div className={style.title_container}>
            <h3>{nameElement}</h3>
            <p>
              Average value:<span>{avaregeNumbers}</span>
            </p>
          </div>
          <div>
            <Line
              data={data}
              options={options}
              plugins={plugins}
              className={style.chart_block}
            ></Line>
            <DragElement>
              <h3 className={style.drag_title}>{maxNumber}</h3>
              <p className={style.drag_desc}>{nameElement}</p>
            </DragElement>
          </div>
        </div>
      )}
      {nameElement === 'Weight' && (
        <div className={style.weight}>
          <div className={style.title_container}>
            <h3>{nameElement}</h3>
            <p>
              Average value:<span>{avaregeNumbers}</span>
            </p>
          </div>
          <div className={style.weight_container}>
            <ul className={style.weight_days}>
              {checkBoolean &&
                statisticObject.period?.map((item, index) => (
                  <li key={`${index}`}>{item}</li>
                ))}
              {!checkBoolean &&
                monthList?.map((item, index) => (
                  <li style={{ width: 58 }} key={`${index}`}>
                    {item}
                  </li>
                ))}
            </ul>
            <ul className={style.weight_num}>
              {checkBoolean &&
                statisticObject.sum?.map((item, index) => (
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
