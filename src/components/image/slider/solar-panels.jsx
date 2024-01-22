import React from 'react';
import solarPanels1 from 'image/slider/solar-panels/solar-panels-1.jpg';
import solarPanels2 from 'image/slider/solar-panels/solar-panels-2.jpg';
import solarPanels3 from 'image/slider/solar-panels/solar-panels-3.jpg';

import css from './slider-photo.module.css';

export const SolarPanels = () => {
  return (
    <picture>
      <source
        srcSet={`
          ${solarPanels1} 1x,
          ${solarPanels2} 2x,
          ${solarPanels3} 3x
        `}
        type="image/jpeg"
      />

      <img
        src={solarPanels3}
        alt="Solar panels"
        width="100%"
        height="100%"
        className={css.photo}
      />
    </picture>
  );
};
