import React from 'react';
import { Element } from 'react-scroll';

import Slider from 'components/slider/slider';

import css from 'sections/cases/cases.module.css';

export const Cases = () => {
  return (
    <Element name="cases" id="cases">
      <section className={css.container}>
        <h2 className={css.title}>Successful cases of our company</h2>
        <div className={css.sliderWrapper}>
          <Slider />
        </div>
      </section>
    </Element>
  );
};
