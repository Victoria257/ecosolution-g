import React from 'react';
import solarisStation1 from 'image/slider/solaris-station/solaris-station-1.jpg';
import solarisStation2 from 'image/slider/solaris-station/solaris-station-2.jpg';
import solarisStation3 from 'image/slider/solaris-station/solaris-station-3.jpg';

import css from './slider-photo.module.css';

export const SolarisStation = () => {
  return (
    <picture>
      <source
        srcSet={`
          ${solarisStation1} 1x,
          ${solarisStation2} 2x,
          ${solarisStation3} 3x
        `}
        type="image/jpeg"
      />

      <img
        src={solarisStation3}
        alt="Solaris station"
        width="100%"
        height="100%"
        className={css.photo}
      />
    </picture>
  );
};
