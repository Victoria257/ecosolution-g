import React from 'react';
import { Link } from 'react-scroll';

import { useEffect } from 'react';

import { Menu } from 'components/svg/menu';
import { Logo } from 'components/svg/logo';
import { useState } from 'react';
import { BurgerMenu } from 'components/burgerMenu/burgerMenu';

import css from 'components/header/header.module.css';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: isScrolled ? 'rgba(234, 237, 241, 1)' : 'initial',
    transition: 'background-color 0.3s ease',
  };

  const handleClick = () => {
    setOpenMenu(!openMenu);
    setShowBackdrop(!openMenu);
    if (openMenu) {
      document.body.style.overflow = 'initial';
    } else {
      document.body.style.overflow = 'hidden';
    }
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
        >
          <Logo />
        </Link>
        <div className={css.rightWrapper}>
          <div className={css.menuWrapper} onClick={handleClick} tabIndex={0}>
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
