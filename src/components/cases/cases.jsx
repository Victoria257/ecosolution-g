import React from 'react';
import { Element } from 'react-scroll';

import css from 'components/cases/cases.module.css';
import Slider from 'components/slider/slider';

export const Cases = () => {
  return (
    <Element name="cases">
      <section className={css.container}>
        <h2 className={css.title}>Successful cases of our company</h2>
        <div className={css.sliderWrapper}>
          <Slider />
        </div>
      </section>
    </Element>
  );
};
