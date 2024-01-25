import React from 'react';

import { Circle } from 'components/svg/circle';
import { Global } from 'components/svg/global';
import { Charge } from 'components/svg/charge';
import { Ranking } from 'components/svg/ranking';
import { AboutPhoto } from 'components/image/about/aboutPhoto';
import { MainPhotoSolarPanels } from 'components/image/aboutList/aboutPhotoSolarPanels';
import { MainPhotoWindFarm } from 'components/image/aboutList/aboutPhotoWindFarm';

import css from 'sections/about/about.module.css';

export const About = () => {
  return (
    <div name="about" id="about">
      <section className={css.container}>
        <div className={css.thumb}>
          <AboutPhoto className={css.photo} />
        </div>
        <div className={css.textWrapper}>
          <h2 className={css.title}>Main values of our company</h2>
          <p className={css.description}>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </p>
        </div>
        <ul className={css.list}>
          <li className={css.setText}>
            <div className={css.setTitleWrapper}>
              <Circle />
              <h3 className={css.setTitle}>Openness</h3>
            </div>
            <p className={css.setDescription}>
              to the world, people, new ideas and projects
            </p>
          </li>
          <li className={css.setText}>
            <div className={css.setTitleWrapper}>
              <Global />
              <h3 className={css.setTitle}>Responsibility</h3>
            </div>
            <p className={css.setDescription}>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </li>

          <li className={css.setPhoto}>
            <MainPhotoWindFarm
              className={css.mainPhotoWindFarm}
              loading="lazy"
            />
          </li>
          <li className={css.setPhoto}>
            <MainPhotoSolarPanels
              className={css.mainPhotoSolarPanels}
              loading="lazy"
            />
          </li>

          <li className={css.setText}>
            <div className={css.setTitleWrapper}>
              <Charge />
              <h3 className={css.setTitle}>Innovation</h3>
            </div>
            <p className={css.setDescription}>
              we use the latest technology to implement non-standard solutions
            </p>
          </li>
          <li className={css.setText}>
            <div className={css.setTitleWrapper}>
              <Ranking />
              <h3 className={css.setTitle}>Quality</h3>
            </div>
            <p className={css.setDescription}>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};
