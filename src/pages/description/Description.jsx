import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Main } from 'sections/main/main';
import { AboutPhoto } from 'components/image/about/aboutPhoto';
import { Arrow } from 'components/svg/arrow';

import css from './description.module.css';

export const Description = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className={css.container}>
      <div className={css.buttonWrapper} onClick={handleClick}>
        <button className={css.button}>
          <Arrow
            width="32px"
            transform="rotate(225deg)"
            backgroundColor="rgba(151, 210, 139, 1)"
            color="rgba(23, 61, 51, 1)"
          />
          <span className={css.buttonText}> Back</span>
        </button>
      </div>
      <Main hideButton={true} />
      <div className={css.thumb}>
        <AboutPhoto />
      </div>
    </div>
  );
};
