import { ReactComponent as Plus } from '../../images/svg/main-page/add.svg';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ModalWater } from 'components/ModalWater/ModalWater';
import { selectUserData } from 'redux/meals/selectors';
import style from './WaterOnMain.module.css';

export const WaterOnMain = () => {
  const [showModal, setShowModal] = useState(false);
  const { waterGoal, water } = useSelector(selectUserData);

  const change = waterGoal - water < 0 ? 0 : waterGoal - water;
  const percent =
    Math.floor(((water > waterGoal ? waterGoal : water) / waterGoal) * 100) ||
    0;

  const toggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ModalWater toggle={toggle} showModal={showModal} />
      <h2 className={style.water_title}>Water</h2>
      <div className={style.water_container}>
        <div className={style.water_chart}>
          <p
            style={percent >= 85 ? { display: 'none' } : { display: 'block' }}
            className={style.water_percent}
          >{`${percent}%`}</p>
          <div style={{ height: `${percent}%` }} className={style.water_anim}>
            <p
              style={percent < 85 ? { display: 'none' } : { display: 'block' }}
              className={style.water_percent_inner}
            >{`${percent}%`}</p>
          </div>
        </div>

        <div className={style.water_info}>
          <h3>Water consumption</h3>
          <p className={style.water_amount}>
            {water || 0}
            <span> ml</span>
          </p>
          <p>
            left: <span>{change} ml</span>
          </p>
          <button onClick={toggle} type="button">
            <Plus />
            Add water intake
          </button>
        </div>
      </div>
    </>
  );
};