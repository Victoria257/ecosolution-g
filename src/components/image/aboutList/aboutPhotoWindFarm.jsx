import React from 'react';
import windFarmTablet1 from 'image/main/tablet/wind-farms-tablet.jpg';
import windFarmTablet2 from 'image/main/tablet/wind-farms-tablet-2.jpg';
import windFarmTablet3 from 'image/main/tablet/wind-farms-tablet-3.jpg';
import windFarmDesktop1 from 'image/main/desktop/wind-farms-desktop.jpg';
import windFarmDesktop2 from 'image/main/desktop/wind-farms-desktop-2.jpg';
import windFarmDesktop3 from 'image/main/desktop/wind-farms-desktop-3.jpg';
import css from 'sections/about/about.module.css';

export const MainPhotoWindFarm = () => {
  return (
    <picture>
      <source
        srcSet={`
          ${windFarmDesktop1} 1x,
          ${windFarmDesktop2} 2x,
          ${windFarmDesktop3} 3x
        `}
        media="(min-width: 1200px)"
        type="image/jpeg"
      />

      <source
        srcSet={`
          ${windFarmTablet1} 1x,
          ${windFarmTablet2} 2x,
          ${windFarmTablet3} 3x
        `}
        media="(min-width: 768px)"
        type="image/jpeg"
      />
      <img
        src={windFarmTablet3}
        alt="wind farms fields"
        width="100%"
        height="100%"
        className={css.mainPhotoWindFarm}
      />
    </picture>
  );
};
