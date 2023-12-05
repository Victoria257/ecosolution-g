import React from 'react';
import { Link } from 'react-scroll';

import css from 'components/footer/footer.module.css';

import { Arrow } from 'components/svg/arrow';
import { InstagramForFooter } from 'components/svg/instagramForFooter';
import { FacebookForFooter } from 'components/svg/facebookForFooter';
import { LogoForFooter } from 'components/svg/logoForFooter';

export const Footer = () => {
  return (
    <section className={css.container}>
      <div className={css.footerWrapper}>
        <div className={css.footer}>
          <div className={css.wrapperLogoAndSocial}>
            <div className={css.logoWrapper}>
              <LogoForFooter />
              <Link
                to="main"
                smooth={true}
                duration={1000}
                offset={-112}
                className={css.arrowWrapper}
              >
                <Arrow
                  width="32px"
                  height="32px"
                  transform="rotate(-45deg)"
                  backgroundColor="rgba(151, 210, 139, 1)"
                />
              </Link>
            </div>
            <div className={css.social}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.socialFB}
              >
                <FacebookForFooter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.socialInsta}
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
