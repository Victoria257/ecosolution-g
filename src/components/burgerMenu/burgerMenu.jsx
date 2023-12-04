import React from 'react';
import { Link } from 'react-scroll';

import css from 'components/burgerMenu/burgerMenu.module.css';
import { Close } from 'components/svg/close';
import { Facebook } from 'components/svg/facebook';
import { Instagram } from 'components/svg/instagram';
import { ArrowBurger } from 'components/svg/arrow-burger';

export const BurgerMenu = ({ handleClick }) => {
  return (
    <div className={css.burgerMenu}>
      <section className={css.container}>
        <div className={css.buttonWrapper} onClick={handleClick}>
          <button className={css.closeButton}>
            <Close />
            <span className={css.buttonText}> close</span>
          </button>
        </div>
        <div className={css.wrapper}>
          <ul className={css.list}>
            <li className={css.set} tabIndex="0" role="menuitem">
              <Link
                to="main"
                smooth={true}
                duration={1000}
                offset={-112}
                className={css.link}
                onClick={handleClick}
              >
                <p>Main</p>
                <ArrowBurger className={css.arrowBurger} />
              </Link>
            </li>
            <li className={css.set} tabIndex="0" role="menuitem">
              <Link
                to="about"
                smooth={true}
                duration={1000}
                offset={-112}
                className={css.link}
                onClick={handleClick}
              >
                <p>About</p>
                <ArrowBurger color="rgba(255, 255, 255, 1)" />
              </Link>
            </li>
            <li className={css.set} tabIndex="0" role="menuitem">
              <Link
                to="cases"
                smooth={true}
                duration={1000}
                offset={-112}
                className={css.link}
                onClick={handleClick}
              >
                <p>Cases</p>
                <ArrowBurger color="rgba(255, 255, 255, 1)" />
              </Link>
            </li>
            <li className={css.set} tabIndex="0" role="menuitem">
              <Link
                to="questions"
                smooth={true}
                duration={1000}
                offset={-112}
                className={css.link}
                onClick={handleClick}
              >
                <p>FAQ</p>
                <ArrowBurger color="rgba(255, 255, 255, 1)" />
              </Link>
            </li>
            <li className={css.set} tabIndex="0" role="menuitem">
              <Link
                to="contactUs"
                smooth={true}
                duration={1000}
                offset={-112}
                className={css.link}
                onClick={handleClick}
              >
                <p>Contact Us</p>
                <ArrowBurger color="rgba(255, 255, 255, 1)" />
              </Link>
            </li>
          </ul>
          <div className={css.social}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.socialFB}
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.socialInsta}
            >
              <Instagram />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
