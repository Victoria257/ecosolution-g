import React from 'react';
import { Element, Link } from 'react-scroll';

import css from 'sections/main/main.module.css';
import { Arrow } from 'components/svg/arrow';

export const Main = ({ hideButton }) => {
  return (
    <Element name="main">
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
              <div className={css.moreContainer}>
                <Link
                  to="cases"
                  smooth={true}
                  duration={1000}
                  offset={-112}
                  className={css.more}
                  tabIndex={0}
                  aria-label='Go to "cases"'
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
                </Link>
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
    </Element>
  );
};