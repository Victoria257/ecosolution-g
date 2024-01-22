import React from 'react';
import nuclearPowerPlantCenter1 from 'image/slider/nuclear-power-plant-center/nuclear-power-plant-center-1.jpg';
import nuclearPowerPlantCenter2 from 'image/slider/nuclear-power-plant-center/nuclear-power-plant-center-2.jpg';
import nuclearPowerPlantCenter3 from 'image/slider/nuclear-power-plant-center/nuclear-power-plant-center-3.jpg';

import css from './slider-photo.module.css';

export const NuclearPowerPlantCenter = () => {
  return (
    <picture>
      <source
        srcSet={`
          ${nuclearPowerPlantCenter1} 1x,
          ${nuclearPowerPlantCenter2} 2x,
          ${nuclearPowerPlantCenter3} 3x
        `}
        type="image/jpeg"
      />

      <img
        src={nuclearPowerPlantCenter3}
        alt="Nuclear power plant center in Spain"
        width="100%"
        height="100%"
        className={css.photo}
      />
    </picture>
  );
};
