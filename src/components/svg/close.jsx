import css from '../burgerMenu/burgerMenu.module.css';
export const Close = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83325 5.83325L14.1666 14.1666M5.83325 14.1666L14.1666 5.83325"
        className={css.closeIcon}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
