import { Container } from 'components/Container/Container';
import { DiaryMealCollect } from 'components/DiaryMealCollect/DiaryMealCollect';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/meals/operations';

const Diary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getUserDay());
  }, [dispatch]);

  return (
    <>
      <Container>
        <DiaryMealCollect />
      </Container>
    </>
  );
};

export default Diary;
