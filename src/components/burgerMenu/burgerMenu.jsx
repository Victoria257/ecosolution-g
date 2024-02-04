import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScrollTo } from 'components/ScrollTo';
import { Close } from 'components/svg/close';
import { Facebook } from 'components/svg/facebook';
import { Instagram } from 'components/svg/instagram';
import { ArrowBurger } from 'components/svg/arrow-burger';
import css from 'components/burgerMenu/burgerMenu.module.css';

export const BurgerMenu = ({ handleClick }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      const firstElement = document.querySelector(`.${css.closeButton}`);
      const lastElement = document.querySelector(`.${css.socialInsta}`);
      const activeElement = document.activeElement;
      const value = activeElement.getAttribute('value');

      if (value === 'firstButton' && event.key === 'Tab' && event.shiftKey) {
        event.preventDefault();
        lastElement && lastElement.focus();
      } else if (
        value === 'lastButton' &&
        event.key === 'Tab' &&
        !event.shiftKey
      ) {
        event.preventDefault();
        firstElement && firstElement.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={css.burgerMenu}>
      <section className={css.container}>
        <div className={css.buttonWrapper} onClick={handleClick}>
          <button className={css.closeButton} value="firstButton" autoFocus>
            <Close />
            <span className={css.buttonText}> close</span>
          </button>
        </div>
        <nav className={css.wrapper}>
          <ul className={css.list}>
            <li className={css.set} role="menuitem" onClick={handleClick}>
              <ScrollTo
                target="main"
                offset={112}
                className={css.link}
                ariaLabel='Go to "main"'
              >
                <button className={css.buttons}>
                  <p className={css.setText}>Main</p>
                  <ArrowBurger className={css.arrowBurger} />
                </button>
              </ScrollTo>
            </li>
            <li className={css.set} role="menuitem" onClick={handleClick}>
              <ScrollTo
                target="about"
                offset={112}
                className={css.link}
                ariaLabel='Go to "about"'
              >
                <button className={css.buttons}>
                  <p className={css.setText}>About</p>
                  <ArrowBurger color="rgba(255, 255, 255, 1)" />
                </button>
              </ScrollTo>
            </li>
            <li className={css.set} role="menuitem" onClick={handleClick}>
              <ScrollTo
                target="cases"
                offset={112}
                className={css.link}
                ariaLabel='Go to "cases"'
              >
                <button className={css.buttons}>
                  <p className={css.setText}>Cases</p>
                  <ArrowBurger color="rgba(255, 255, 255, 1)" />
                </button>
              </ScrollTo>
            </li>
            <li className={css.set} role="menuitem" onClick={handleClick}>
              <ScrollTo
                target="questions"
                offset={112}
                className={css.link}
                ariaLabel='Go to "questions"'
              >
                <button className={css.buttons}>
                  <p className={css.setText}>FAQ</p>
                  <ArrowBurger color="rgba(255, 255, 255, 1)" />
                </button>
              </ScrollTo>
            </li>
            <li className={css.set} role="menuitem" onClick={handleClick}>
              <ScrollTo
                target="contactUs"
                offset={112}
                className={css.link}
                ariaLabel='Go to "contact"'
              >
                <button className={css.buttons}>
                  <p className={css.setText}>Contact Us</p>
                  <ArrowBurger color="rgba(255, 255, 255, 1)" />
                </button>
              </ScrollTo>
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
              tabIndex="0"
              role="button"
              value="lastButton"
            >
              <Instagram />
            </a>
          </div>
        </nav>
      </section>
    </div>
  );
};

BurgerMenu.propTypes = {
  handleClick: PropTypes.func,
};
