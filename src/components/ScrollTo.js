import React from 'react';

export const ScrollTo = ({ target, offset = 0, children }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(target);

    if (targetElement) {
      const targetOffset = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};
