import React from 'react';
import PropTypes from 'prop-types';

import { ScrollTo } from 'components/ScrollTo.js';
import { Arrow } from 'components/svg/arrow';

import css from 'sections/main/main.module.css';

export const Main = ({ hideButton }) => {
  return (
    <div name="main" id="main">
      <section className={css.container}>
        <div className={css.mainWrapper}>
          <div className={css.titleWrapper}>
            <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
          </div>
          <div className={css.rightWrapper}>
            <p className={css.description}>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            {!hideButton && (
              <div className={css.moreContainer} tabIndex={0}>
                <ScrollTo
                  target="cases"
                  offset={112}
                  className={css.more}
                  ariaLabel='Go to "cases"'
                >
                  <span className={css.moreText}>Learn more</span>
                  <div className={css.arrow}>
                    <Arrow
                      width="32px"
                      backgroundColor="rgba(151, 210, 139, 1)"
                      transform="rotate(45deg)"
                      color="rgba(23, 61, 51, 1)"
                    />
                  </div>
                </ScrollTo>
              </div>
            )}
          </div>
        </div>
        <div className={css.contactsWrapper}>
          <div className={css.contacts}>
            <div className={css.contactsLeftWrapper}>
              <a
                className={css.address}
                href="https://www.google.com/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323789,17z/data=!3m1!4b1?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
            </div>

            <div className={css.contactsRightWrapper}>
              <a className={css.email} href="office@ecosolution.com">
                office@ecosolution.com
              </a>
              <p className={css.ecosolution}>ecosolution © 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Main.propTypes = {
  hideButton: PropTypes.bool,
};
