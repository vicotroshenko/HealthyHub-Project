import { Container } from 'components/Container/Container';
import { MainInformation } from 'components/MainInformation/MainInformation';
import { MainMealAndRecommendedFood } from 'components/MainMealAndRecommendedFood/MainMealAndRecommendedFood';
import { Preloader } from 'components/Preloader/Preloader';
import { useSelector } from 'react-redux';


const Main = () => {
  const { isLoading } = useSelector(state => state.user);
  console.log(isLoading);

  return (
    <Container>
      {isLoading && <Preloader/>}
      <MainInformation />
      <MainMealAndRecommendedFood />
    </Container>
  );
};

export default Main;
