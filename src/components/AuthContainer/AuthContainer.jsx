import style from './AuthContainer.module.css';

export const AuthContainer = ({ image, children }) => {
  return (
    <div className={style.container}>
      <div className={style.container_main_image}>
        <img src={image} alt="describes page" />
      </div>
      {children}
    </div>
  );
};
