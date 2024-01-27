import React, { useCallback, useEffect, useState } from 'react';

import { ScrollTo } from 'components/ScrollTo';
import { BurgerMenu } from 'components/burgerMenu/burgerMenu';
import css from 'sections/header/header.module.css';

import { Menu } from 'components/svg/menu';
import { Logo } from 'components/svg/logo';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = useCallback(() => {
    setOpenMenu(prevOpenMenu => {
      setShowBackdrop(!prevOpenMenu);
      if (!prevOpenMenu) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'initial';
      }
      return !prevOpenMenu;
    });
  }, []);

  const handleFocus = event => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      handleClick();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    const handleKeyPress = event => {
      if (event.key === 'Escape' && openMenu) {
        handleClick();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [openMenu, handleClick]);

  const headerStyle = {
    backgroundColor: isScrolled ? 'rgba(234, 237, 241, 1)' : 'initial',
    transition: 'background-color 0.8s ease',
  };

  return (
    <section className={css.container} style={headerStyle}>
      <div className={css.wrapper}>
        <ScrollTo
          target="main"
          offset={112}
          className={css.logoWrapper}
          ariaLabel='Go to "main"'
        >
          <button aria-label="go to main" className={css.logoButton}>
            <Logo />
          </button>
        </ScrollTo>
        <div className={css.rightWrapper}>
          <button
            className={css.menuWrapper}
            onClick={handleClick}
            onFocus={handleFocus}
            aria-label="Open menu"
          >
            <Menu className={css.menu} />
          </button>
          {showBackdrop && (
            <div className={css.backdrop} onClick={handleClick}></div>
          )}
          {openMenu && <BurgerMenu handleClick={handleClick} />}
          <div>
            <ScrollTo
              target="contactUs"
              offset={112}
              className={css.buttonWrapper}
              ariaLabel='Go to "contacts"'
            >
              <button className={css.button}>
                <span className={css.buttonText}>Get in touch</span>
                <span className={css.dot}></span>
              </button>
            </ScrollTo>
          </div>
        </div>
      </div>
    </section>
  );
};
