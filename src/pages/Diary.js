import { Container } from 'components/Container/Container';
import { DiaryMealCollect } from 'components/Diary/DiaryMealCollect/DiaryMealCollect';
import { Preloader } from 'components/Preloader/Preloader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/meals/operations';

const Diary = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.user)

  useEffect(() => {
    if(isLoading){
      dispatch(operations.getUserDay());
    }
  }, [dispatch, isLoading]);

  return (
    <>
      {isLoading && <Preloader/>}
      <Container>
        <DiaryMealCollect />
      </Container>
    </>
  );
};

export default Diary;
