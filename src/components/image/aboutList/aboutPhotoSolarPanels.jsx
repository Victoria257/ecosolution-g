import React from 'react';
import solarPanelsTablet1 from 'image/main/tablet/solar-panels-tablet.jpg';
import solarPanelsTablet2 from 'image/main/tablet/solar-panels-tablet-2.jpg';
import solarPanelsTablet3 from 'image/main/tablet/solar-panels-tablet-3.jpg';
import solarPanelsDesktop1 from 'image/main/desktop/solar-panels-desktop.jpg';
import solarPanelsDesktop2 from 'image/main/desktop/solar-panels-desktop-2.jpg';
import solarPanelsDesktop3 from 'image/main/desktop/solar-panels-desktop-3.jpg';

import css from 'sections/about/about.module.css';

export const MainPhotoSolarPanels = () => {
  return (
    <picture>
      <source
        srcSet={`
          ${solarPanelsDesktop1} 1x,
          ${solarPanelsDesktop2} 2x,
          ${solarPanelsDesktop3} 3x
        `}
        media="(min-width: 1200px)"
        type="image/jpeg"
      />

      <source
        srcSet={`
          ${solarPanelsTablet1} 1x,
          ${solarPanelsTablet2} 2x,
          ${solarPanelsTablet3} 3x
        `}
        media="(min-width: 768px)"
        type="image/jpeg"
      />
      <img
        src={solarPanelsTablet3}
        alt="man worker firld by solar panels"
        width="100%"
        height="100%"
        className={css.mainPhotoSolarPanels}
      />
    </picture>
  );
};
