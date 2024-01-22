import React from 'react';
import windTurbineGrass1 from 'image/slider/wind-turbine-green/wind-turbines-grass-1.jpg';
import windTurbineGrass2 from 'image/slider/wind-turbine-green/wind-turbines-grass-2.jpg';
import windTurbineGrass3 from 'image/slider/wind-turbine-green/wind-turbines-grass-3.jpg';

import css from './slider-photo.module.css';

export const WindTurbineGreen = () => {
  return (
    <picture>
      <source
        srcSet={`
          ${windTurbineGrass1} 1x,
          ${windTurbineGrass2} 2x,
          ${windTurbineGrass3} 3x
        `}
        type="image/jpeg"
      />

      <img
        src={windTurbineGrass3}
        alt="view with wind turbines and green grass"
        width="100%"
        height="100%"
        className={css.photo}
      />
    </picture>
  );
};
