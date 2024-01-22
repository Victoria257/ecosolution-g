import React from 'react';
import landscapeWithWindmills1 from 'image/slider/landscape-with-windmills/landscape-with-windmills-1.jpg';
import landscapeWithWindmills2 from 'image/slider/landscape-with-windmills/landscape-with-windmills-2.jpg';
import landscapeWithWindmills3 from 'image/slider/landscape-with-windmills/landscape-with-windmills-3.jpg';

import css from './slider-photo.module.css';

export const LandscapeWithWindmills = () => {
  return (
    <picture>
      <source
        srcSet={`
          ${landscapeWithWindmills1} 1x,
          ${landscapeWithWindmills2} 2x,
          ${landscapeWithWindmills3} 3x
        `}
        type="image/jpeg"
      />

      <img
        src={landscapeWithWindmills3}
        alt="Landscape with windmills"
        width="100%"
        height="100%"
        className={css.photo}
      />
    </picture>
  );
};
