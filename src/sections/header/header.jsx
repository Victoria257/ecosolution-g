import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-scroll';

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
    backgroundColor: isScrolled ? 'white' : 'initial',
    transition: 'background-color 0.8s ease',
  };

  return (
    <section className={css.container} style={headerStyle}>
      <div className={css.wrapper}>
        <Link
          to="main"
          smooth={true}
          duration={1000}
          offset={-112}
          className={css.logoWrapper}
          tabIndex={0}
          aria-label='Go to "main"'
        >
          <Logo />
        </Link>
        <div className={css.rightWrapper}>
          <div
            className={css.menuWrapper}
            onClick={handleClick}
            tabIndex={0}
            aria-label="Open menu"
          >
            <Menu className={css.menu} />
          </div>
          {showBackdrop && (
            <div className={css.backdrop} onClick={handleClick}></div>
          )}
          {openMenu && <BurgerMenu handleClick={handleClick} />}

          <Link
            to="contactUs"
            smooth={true}
            duration={1000}
            offset={-112}
            className={css.buttonWrapper}
            aria-label='Go to "contacts"'
          >
            <button className={css.button}>
              <span className={css.buttonText}>Get in touch</span>
              <span className={css.dot}></span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
