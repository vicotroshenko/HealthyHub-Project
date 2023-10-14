import { HiOutlinePlus } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ModalWater } from 'components/ModalWater/ModalWater';
import { selectUserData } from 'redux/meals/selectors';
import css from './WaterOnMain.module.css';
import { ButtonSubmit } from 'components/ButtonPrimery/ButtonPrimery';

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
      <h2 className={css.water_title}>Water</h2>
      <div className={css.water_container}>
        <div className={css.water_chart}>
          <p
            style={percent >= 85 ? { display: 'none' } : { display: 'block' }}
            className={css.water_percent}
          >{`${percent}%`}</p>
          <div style={{ height: `${percent}%` }} className={css.water_anim}>
            <p
              style={percent < 85 ? { display: 'none' } : { display: 'block' }}
              className={css.water_percent_inner}
            >{`${percent}%`}</p>
          </div>
        </div>

        <div className={css.water_info}>
          <h3>Water consumption</h3>
          <p className={css.water_amount}>
            {water || 0}
            <span> ml</span>
          </p>
          <p>
            left: <span>{change} ml</span>
          </p>
          <ButtonSubmit size={{SWidth: 166}} onClick={toggle}>
            <HiOutlinePlus style={{width: 16, height: 16, color: "#0F0F0F"}} />
            <span>Add water intake</span>
          </ButtonSubmit>
        </div>
      </div>
    </>
  );
};
