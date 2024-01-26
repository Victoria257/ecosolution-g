import React, { useState } from 'react';

import { ScrollTo } from 'components/ScrollTo';
import css from 'sections/footer/footer.module.css';

import { Arrow } from 'components/svg/arrow';
import { InstagramForFooter } from 'components/svg/instagramForFooter';
import { FacebookForFooter } from 'components/svg/facebookForFooter';
import { LogoForFooter } from 'components/svg/logoForFooter';

export const Footer = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleBlur = () => {
    setIsHover(false);
  };

  return (
    <section className={css.container}>
      <div className={css.footerWrapper}>
        <div className={css.footer}>
          <div className={css.wrapperLogoAndSocial}>
            <div className={css.logoWrapper}>
              <ScrollTo
                target="main"
                offset={112}
                className={css.logoWrapper}
                ariaLabel='Go to "main"'
              >
                <button className={css.logoContainer}>
                  <LogoForFooter className={css.logo} />
                </button>
              </ScrollTo>
              <div
                onFocus={handleHover}
                onMouseOver={handleHover}
                onMouseOut={handleBlur}
                onBlur={handleBlur}
              >
                <ScrollTo
                  target="main"
                  offset={112}
                  className={css.arrowWrapper}
                  ariaLabel='Go to "main"'
                >
                  <button className={css.arrowButton}>
                    <Arrow
                      width="32px"
                      height="32px"
                      transform="rotate(-45deg)"
                      transition="backgroundColor 0.8s, color 0.8s"
                      backgroundColor={
                        isHover
                          ? 'rgba(23, 61, 51, 1)'
                          : 'rgba(151, 210, 139, 1)'
                      }
                      color={
                        !isHover
                          ? 'rgba(23, 61, 51, 1)'
                          : 'rgba(151, 210, 139, 1)'
                      }
                    />
                  </button>
                </ScrollTo>
              </div>
            </div>
            <div className={css.social}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open our Facebook page"
                className={css.socialFB}
              >
                <FacebookForFooter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.socialInsta}
                aria-label="Open our Instagram page"
              >
                <InstagramForFooter />
              </a>
            </div>
          </div>
          <div className={css.contacts}>
            <div className={css.contactsLeftWrapper}>
              <a
                href="https://www.google.com/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323789,17z/data=!3m1!4b1?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
            </div>
            <div className={css.contactsRightWrapper}>
              <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
              <p>ecosolution © 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
