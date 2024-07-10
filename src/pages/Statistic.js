import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthInform } from 'redux/auth/selectors';
import operationsMeal from 'redux/meals/operations';
import { selectUserData } from 'redux/meals/selectors';

import { Container } from 'components/Container/Container';
import { StatisticShow } from 'components/StatisticShow/StatisticShow';

const Statistic = () => {
  const containerRef = useRef();
  const updateDataRef = useRef(true);

  const { isLoggedIn } = useSelector(selectAuthInform);
  const { isLoadErrorMessage } = useSelector(selectUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const errorStatus = isLoadErrorMessage === 401;

    if (isLoggedIn && !errorStatus && updateDataRef.current) {
      dispatch(operationsMeal.getStatisticForMonth({ month, year }));
      dispatch(operationsMeal.getStatisticForYear({ year }));
      updateDataRef.current = false;
    }
  }, [dispatch, isLoggedIn, isLoadErrorMessage]);

  return (
    <Container>
      <div
        ref={containerRef}
        style={{ width: '100%' }}
      >
        <StatisticShow containerRef={containerRef} />
      </div>
    </Container>
  );
};

export default Statistic;
