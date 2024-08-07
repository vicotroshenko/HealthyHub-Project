import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

import css from './Dough.module.css';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const Dough = ({
  dayAmount = 0,
  currentAmount = 0,
  color = '#45FFBC',
  text,
  styles,
}) => {
  const getPercent = () =>
    Math.floor(
      ((currentAmount > dayAmount ? dayAmount : currentAmount) / dayAmount) *
        100
    ) || 0;

  const percent = getPercent();

  const data = {
    datasets: [
      {
        label: 'percent, %',
        data: [percent, 100 - percent],
        backgroundColor: [color, 'transparent'],
        borderColor: ['transparent'],
      },
    ],
  };

  const options = {
    borderRadius: percent === 100 ? 0 : 10,
    cutout: styles.bold || 10,
  };

  const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx } = chart;
      ctx.save();

      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius - innerRadius;
      const angle = Math.PI / 180;

      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = '#292928';
      ctx.arc(xCoor, yCoor, outerRadius - width / 2, 0, angle * 360, false);
      ctx.stroke();
    },
  };

  return (
    <div style={{ ...styles.container, position: 'relative' }}>
      <Doughnut
        data={data}
        options={options}
        plugins={[backgroundCircle]}
      ></Doughnut>
      <div className={css.titleBox}>
        <h5 style={styles.title}>{text.title || `${percent}%`}</h5>
        <span style={styles.desc || {}}>{text.describe || ''}</span>
      </div>
    </div>
  );
};

Dough.propTypes = {
  image: PropTypes.string,
  dayAmount: PropTypes.number,
  currentAmount: PropTypes.number,
  color: PropTypes.string,
  text: PropTypes.object,
  styles: PropTypes.object,
};
