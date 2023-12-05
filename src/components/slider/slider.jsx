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

function SampleNextArrow({ onClick }) {
  return (
    <div className={css.nextArrow} onClick={onClick}>
      <Arrow
        width={66}
        height={66}
        transform="rotate(-135deg)"
        border="solid 1px rgba(23, 61, 51, 1)"
      />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className={css.prevArrow} onClick={onClick}>
      <Arrow
        width={66}
        height={66}
        transform="rotate(-135deg)"
        border="solid 1px rgba(23, 61, 51, 1)"
      />
    </div>
  );
}

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const totalSlides = '05';

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 100,
    margin: '0 24px',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  const handleClick = () => {
    navigate('/description');
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
              <div className={css.arrowWrapper} onClick={handleClick}>
                <Arrow
                  width="60px"
                  height="60px"
                  backgroundColor="rgba(151, 210, 139, 1)"
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
              <div className={css.arrowWrapper} onClick={handleClick}>
                <Arrow
                  width="60px"
                  height="60px"
                  backgroundColor="rgba(151, 210, 139, 1)"
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
              <div className={css.arrowWrapper} onClick={handleClick}>
                <Arrow
                  width="60px"
                  height="60px"
                  backgroundColor="rgba(151, 210, 139, 1)"
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
              <div className={css.arrowWrapper} onClick={handleClick}>
                <Arrow
                  width="60px"
                  height="60px"
                  backgroundColor="rgba(151, 210, 139, 1)"
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
              <div className={css.arrowWrapper} onClick={handleClick}>
                <Arrow
                  width="60px"
                  height="60px"
                  backgroundColor="rgba(151, 210, 139, 1)"
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
