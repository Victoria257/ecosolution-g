import React from 'react';
import windTurbineMobile1 from 'image/about/mobile/wind-turbine-mobile.jpg';
import windTurbineMobile2 from 'image/about/mobile/wind-turbine-mobile-2.jpg';
import windTurbineMobile3 from 'image/about/mobile/wind-turbine-mobile-3.jpg';
import windTurbineTablet1 from 'image/about/tablet/wind-turbine-tablet.jpg';
import windTurbineTablet2 from 'image/about/tablet/wind-turbine-tablet-2.jpg';
import windTurbineTablet3 from 'image/about/tablet/wind-turbine-tablet-3.jpg';
import windTurbineDesktop1 from 'image/about/desktop/wind-turbine-desktop.jpg';
import windTurbineDesktop2 from 'image/about/desktop/wind-turbine-desktop-2.jpg';
import windTurbineDesktop3 from 'image/about/desktop/wind-turbine-desktop-3.jpg';

export const AboutPhoto = () => {
  return (
    <picture>
      <source
        srcSet={`
          ${windTurbineDesktop1} 1x,
          ${windTurbineDesktop2} 2x,
          ${windTurbineDesktop3} 3x
        `}
        media="(min-width: 1200px)"
        type="image/jpeg"
      />
      <source
        srcSet={`
          ${windTurbineMobile1} 1x,
          ${windTurbineMobile2} 2x,
          ${windTurbineMobile3} 3x
        `}
        media="(max-width: 767px)"
        type="image/jpeg"
      />
      <source
        srcSet={`
          ${windTurbineTablet1} 1x,
          ${windTurbineTablet2} 2x,
          ${windTurbineTablet3} 3x
        `}
        media="(min-width: 768px)"
        type="image/jpeg"
      />
      <img src={windTurbineTablet3} alt="wind-turbine" width="100%" />
    </picture>
  );
};
