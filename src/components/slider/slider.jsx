import React, { useState } from 'react';
import Slider from 'react-slick';
import Photo1 from 'image/slider/photo-1.png';
import Photo2 from 'image/slider/photo-2.png';
import Photo3 from 'image/slider/photo-3.png';
import Photo4 from 'image/slider/photo-4.png';
import Photo5 from 'image/slider/photo-5.png';

import { Arrow } from 'components/svg/arrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from './slider.module.css';
import { useNavigate } from 'react-router-dom';

function SampleNextArrow({ onClick, isHoverNext, handleBlur, handleHover }) {
  return (
    <div
      className={css.nextArrow}
      onClick={onClick}
      tabIndex={0}
      onFocus={() => handleHover('next')}
      onMouseOver={() => handleHover('next')}
      onMouseOut={() => handleBlur('next')}
      onBlur={() => handleBlur('next')}
    >
      <Arrow
        width={66}
        height={66}
        transform="rotate(-135deg)"
        border={
          !isHoverNext
            ? ' solid 1px  rgba(23, 61, 51, 1)'
            : 'solid 3px rgba(151, 210, 139, 1)'
        }
        color={!isHoverNext ? 'rgba(23, 61, 51, 1)' : 'rgba(151, 210, 139, 1)'}
      />
    </div>
  );
}

function SamplePrevArrow({ onClick, isHoverPrev, handleBlur, handleHover }) {
  return (
    <div className={css.prevArrow} onClick={onClick} tabIndex={0}>
      <Arrow
        width={66}
        height={66}
        transform="rotate(-135deg)"
        border={
          !isHoverPrev
            ? ' solid 1px  rgba(23, 61, 51, 1)'
            : 'solid 1px rgba(151, 210, 139, 1)'
        }
        color={!isHoverPrev ? 'rgba(23, 61, 51, 1)' : 'rgba(151, 210, 139, 1)'}
        onFocus={() => handleHover('prev')}
        onMouseOver={() => handleHover('prev')}
        onMouseOut={() => handleBlur('prev')}
        onBlur={() => handleBlur('prev')}
      />
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
          <img src={Photo5} alt="photo1" />

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
          <img src={Photo1} alt="Photo2" />
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
          <img src={Photo2} alt="Photo3" />
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
          <img src={Photo4} alt="Photo4" />
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
          <img src={Photo3} alt="Photo5" />
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
