import css from "./BottleSVG.module.css";

export const BottleSVG = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 60 50.0001 V 64 C 59 68 56 72 50 73.3334 h -20 C 24.5 73.3334 20 68.8334 20 62 V 46.6001 L 20 52 C 20 64 19 72 30 73 C 29.6667 73 29.3333 73 29 73 S 31 73 32 73 L 33 73 H 38 H 38 C 64 76 60 62 60 50 H 60 Z"
        stroke="#B6C3FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 36.0998V49.9998H47.0666C44.6 49.9998 42.2 49.4332 40 48.3332C37.8 47.2332 35.4 46.6665 32.9667 46.6665L20 46.5998V36.0998C20 34.5665 20.8668 32.4665 21.9668 31.3665L29.0334 24.2998C29.6334 23.6998 30 22.8332 30 21.9665V16.6665H50V21.9665C50 22.8332 50.3666 23.6998 50.9666 24.2998L58.0332 31.3665C59.1332 32.4665 60 34.5665 60 36.0998Z"
        stroke="#B6C3FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
				className={css.water}
      />
      <path
        d="M60 53.3333V50"
        stroke="#B6C3FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 49.9334V46.6001"
        stroke="#B6C3FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.3337 16.6665H31.667C28.9003 16.6665 26.667 14.3998 26.667 11.6665C26.667 8.93317 28.9003 6.6665 31.667 6.6665H48.3337C51.1003 6.6665 53.3337 8.93317 53.3337 11.6665C53.3337 14.3998 51.1003 16.6665 48.3337 16.6665Z"
        stroke="#B6C3FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
