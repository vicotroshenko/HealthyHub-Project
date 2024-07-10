import { AuthButtons } from 'components/AuthButtons/AuthButtons';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';

import homeImage from '../images/png/home/Illustration.png';

const Home = () => {
  return (
    <section>
      <AuthContainer image={homeImage}>
        <AuthButtons />
      </AuthContainer>
    </section>
  );
};

export default Home;
