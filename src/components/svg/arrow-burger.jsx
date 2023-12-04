import React from 'react';
import css from 'components/burgerMenu/burgerMenu.module.css';

export const ArrowBurger = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={css.arrowBurger}
        d="M6.28418 4.49219L12.007 4.49219L12.007 10.215"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={css.arrowBurger}
        d="M3.99365 12.5061L11.9274 4.57237"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
