import React from 'react';

export const Arrow = ({
  width,
  height,
  transform,
  border,
  backgroundColor,
}) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform, border, backgroundColor, borderRadius: '50px' }}
      >
        <rect width="60" height="60" rx="30" fill="none" />
        <path
          d="M26.9976 22.9867L37.0125 22.9867L37.0125 33.0017"
          stroke="#173D33"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.989 37.0109L36.8731 23.1269"
          stroke="#173D33"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
