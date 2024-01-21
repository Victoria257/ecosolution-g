import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { Close } from 'components/svg/close';
import { Facebook } from 'components/svg/facebook';
import { Instagram } from 'components/svg/instagram';
import { ArrowBurger } from 'components/svg/arrow-burger';
import css from 'components/burgerMenu/burgerMenu.module.css';

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
                aria-label='Go to "main"'
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
                aria-label='Go to "about"'
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
                aria-label='Go to "cases"'
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
                aria-label='Go to "questions"'
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
                aria-label='Go to "contact"'
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
              aria-label="Open our Facebook page"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.socialInsta}
              aria-label="Open our Instagram page"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

BurgerMenu.propTypes = {
  handleClick: PropTypes.func,
};
