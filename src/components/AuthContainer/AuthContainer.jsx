import css from './AuthContainer.module.css';

export const AuthContainer = ({ image, children }) => {
  return (
    <div className={css.container}>
      <div className={css.container_main_image}>
        <img src={image} alt="describes page" />
      </div>
      {children}
    </div>
  );
};
