import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

import { Arrow } from 'components/svg/arrow';

import { WindTurbineGreen } from 'components/image/slider/wind-turbine-green';
import { SolarisStation } from 'components/image/slider/solaris-station';
import { SolarPanels } from 'components/image/slider/solar-panels';
import { NuclearPowerPlantCenter } from 'components/image/slider/nuclear-power-plant-center';
import { LandscapeWithWindmills } from 'components/image/slider/landscape-with-windmills';

import css from './slider.module.css';

function SampleNextArrow({ onClick, isHoverNext, handleBlur, handleHover }) {
  return (
    <div
      className={css.nextArrow}
      onClick={onClick}
      onFocus={() => handleHover('next')}
      onMouseOver={() => handleHover('next')}
      onMouseOut={() => handleBlur('next')}
      onBlur={() => handleBlur('next')}
    >
      <button className={css.nextArrowButton}>
        <Arrow
          width={66}
          height={66}
          transform="rotate(-135deg)"
          transition="border 0.8s, color 0.8s"
          aria-label="Next photo"
          border={
            !isHoverNext
              ? ' solid 1px  rgba(23, 61, 51, 1)'
              : 'solid 3px rgba(151, 210, 139, 1)'
          }
          color={
            !isHoverNext ? 'rgba(23, 61, 51, 1)' : 'rgba(151, 210, 139, 1)'
          }
        />
      </button>
    </div>
  );
}

function SamplePrevArrow({ onClick, isHoverPrev, handleBlur, handleHover }) {
  return (
    <div className={css.prevArrow} onClick={onClick}>
      <button className={css.prevArrowButton}>
        <Arrow
          width={66}
          height={66}
          transform="rotate(-135deg)"
          transition="border 0.8s, color 0.8s"
          aria-label="Previous photo"
          border={
            !isHoverPrev
              ? ' solid 1px  rgba(23, 61, 51, 1)'
              : 'solid 1px rgba(151, 210, 139, 1)'
          }
          color={
            !isHoverPrev ? 'rgba(23, 61, 51, 1)' : 'rgba(151, 210, 139, 1)'
          }
          onFocus={() => handleHover('prev')}
          onMouseOver={() => handleHover('prev')}
          onMouseOut={() => handleBlur('prev')}
          onBlur={() => handleBlur('prev')}
        />
      </button>
    </div>
  );
}

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverStates, setHoverStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isHoverNext, setIsHoverNext] = useState(false);
  const [isHoverPrev, setIsHoverPrev] = useState(false);

  const navigate = useNavigate();

  const handleHover = e => {
    if (e === 'prev') {
      setIsHoverPrev(true);
    }
    if (e === 'next') setIsHoverNext(true);
  };

  const handleBlur = e => {
    if (e === 'prev') {
      setIsHoverPrev(false);
    }
    if (e === 'next') setIsHoverNext(false);
  };

  const handleHoverArrow = index => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };
  const handleBlurArrow = index => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };
  const handleClick = () => {
    navigate('/description');
  };

  const totalSlides = '05';

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 100,
    margin: '0 24px',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        isHover={isHoverNext}
        handleBlur={handleBlur}
        handleHover={handleHover}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        isHover={isHoverPrev}
        handleBlur={handleBlur}
        handleHover={handleHover}
      />
    ),
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <div className={css.counterSliderWrapper}>
        <p className={css.counterSlider}>
          {currentSlide + 1 < 10
            ? `0${currentSlide + 1} `
            : `${currentSlide + 1} `}
          <span className={css.counterSliderSpan}>/ {totalSlides}</span>
        </p>
      </div>

      <Slider {...settings} className={css.sliderContainer}>
        <div className={css.container}>
          <WindTurbineGreen />

          <div className={css.content}>
            <div className={css.descriptionWrapper}>
              <h3 className={css.description}>
                Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
              </h3>
              <div
                onClick={handleClick}
                className={css.arrowWrapper}
                onFocus={() => handleHoverArrow(0)}
                onMouseOver={() => handleHoverArrow(0)}
                onMouseOut={() => handleBlurArrow(0)}
                onBlur={() => handleBlurArrow(0)}
              >
                <Arrow
                  width="60px"
                  height="60px"
                  transition="backgroundColor 0.8s, color 0.8s"
                  aria-label="Open more information"
                  backgroundColor={
                    hoverStates[0]
                      ? 'rgba(23, 61, 51, 1)'
                      : 'rgba(151, 210, 139, 1)'
                  }
                  color={
                    !hoverStates[0]
                      ? 'rgba(23, 61, 51, 1)'
                      : 'rgba(151, 210, 139, 1)'
                  }
                />
              </div>
            </div>
            <div className={css.captionWrapper}>
              <div className={css.captionContainer}>
                <p>Wind Power for auto field irrigation</p>
                <p>July 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.container}>
          <SolarPanels />
          <div className={css.content}>
            <div className={css.descriptionWrapper}>
              <h3 className={css.description}>
                Zhytomyr city Private Enterprise “Bosch”
              </h3>
              <div
                className={css.arrowWrapper}
                onClick={handleClick}
                onFocus={() => handleHoverArrow(1)}
                onMouseOver={() => handleHoverArrow(1)}
                onMouseOut={() => handleBlurArrow(1)}
                onBlur={() => handleBlurArrow(1)}
              >
                <Arrow
                  width="60px"
                  height="60px"
                  transition="backgroundColor 0.8s, color 0.8s"
                  aria-label="Open more information"
                  backgroundColor={
                    hoverStates[1]
                      ? 'rgba(23, 61, 51, 1)'
                      : 'rgba(151, 210, 139, 1)'
                  }
                  color={
                    !hoverStates[1]
                      ? 'rgba(23, 61, 51, 1)'
                      : 'rgba(151, 210, 139, 1)'
                  }
                />
              </div>
            </div>
            <div className={css.captionWrapper}>
              <div className={css.captionContainer}>
                <p>Solar Panels for industrial use</p>
                <p>November 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.container}>
          <SolarisStation />
          <div className={css.content}>
            <div className={css.descriptionWrapper}>
              <h3 className={css.description}>
                Rivne city Private Enterprise “Biotech”
              </h3>
              <div
                className={css.arrowWrapper}
                onClick={handleClick}
                onFocus={() => handleHoverArrow(2)}
                onMouseOver={() => handleHoverArrow(2)}
                onMouseOut={() => handleBlurArrow(2)}
                onBlur={() => handleBlurArrow(2)}
              >
                <Arrow
                  width="60px"
                  height="60px"
                  transition="backgroundColor 0.8s, color 0.8s"
                  aria-label="Open more information"
                  backgroundColor={
                    hoverStates[2]
                      ? 'rgba(23, 61, 51, 1)'
                      : 'rgba(151, 210, 139, 1)'
                  }
                  color={
                    !hoverStates[2]
                      ? 'rgba(23, 61, 51, 1)'
                      : 'rgba(151, 210, 139, 1)'
                  }
                />
              </div>
            </div>
            <div className={css.captionWrapper}>
              <div className={css.captionContainer}>
                <p>Thermal modules</p>
                <p>October 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.container}>
          <LandscapeWithWindmills />
          <div className={css.content}>
            <div className={css.descriptionWrapper}>
              <h3 className={css.description}>
                Kherson city Private Enterprise “HealthyFarm”
              </h3>
              <div
                className={css.arrowWrapper}
                onClick={handleClick}
                onFocus={() => handleHoverArrow(3)}
                onMouseOver={() => handleHoverArrow(3)}
                onMouseOut={() => handleBlurArrow(3)}
                onBlur={() => handleBlurArrow(3)}
              >
                <Arrow
                  width="60px"
                  height="60px"
                  transition="backgroundColor 0.8s, color 0.8s"
                  aria-label="Open more information"
                  backgroundColor={
                    hoverStates[3]
                      ? 'rgba(23, 61, 51, 1)'
                      : 'rgba(151, 210, 139, 1)'
                  }
                  color={
                    !hoverStates[3]
                      ? 'rgba(23, 61, 51, 1)'
                      : 'rgba(151, 210, 139, 1)'
                  }
                />
              </div>
            </div>
            <div className={css.captionWrapper}>
              <div className={css.captionContainer}>
                <p>Wind power</p>
                <p>September 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.container}>
          <NuclearPowerPlantCenter />
          <div className={css.content}>
            <div className={css.descriptionWrapper}>
              <h3 className={css.description}>
                Zaporizhia city Private Enterprise “Biotech”
              </h3>
              <div
                className={css.arrowWrapper}
                onClick={handleClick}
                onFocus={() => handleHoverArrow(4)}
                onMouseOver={() => handleHoverArrow(4)}
                onMouseOut={() => handleBlurArrow(4)}
                onBlur={() => handleBlurArrow(4)}
              >
                <Arrow
                  width="60px"
                  height="60px"
                  transition="backgroundColor 0.8s, color 0.8s"
                  aria-label="Open more information"
                  backgroundColor={
                    hoverStates[4]
                      ? 'rgba(23, 61, 51, 1)'
                      : 'rgba(151, 210, 139, 1)'
                  }
                  color={
                    !hoverStates[4]
                      ? 'rgba(23, 61, 51, 1)'
                      : 'rgba(151, 210, 139, 1)'
                  }
                />
              </div>
            </div>
            <div className={css.captionWrapper}>
              <div className={css.captionContainer}>
                <p>Mini nuclear stations</p>
                <p>May 2021</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
  isHoverNext: PropTypes.func,
  handleBlur: PropTypes.func.isRequired,
  handleHover: PropTypes.func.isRequired,
};

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
  isHoverNext: PropTypes.func,
  handleBlur: PropTypes.func.isRequired,
  handleHover: PropTypes.func.isRequired,
};
