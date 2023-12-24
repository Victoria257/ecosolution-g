import React, { useState, useEffect } from 'react';

import css from 'sections/electricity/electricity.module.css';

export const Electricity = () => {
  const [electricityCount, setElectricityCount] = useState(1134147814);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const targetDate = new Date('2023-11-29T00:00:00Z').getTime();

      const kilowattHours =
        Math.floor((currentTime - targetDate) / 1000) + 1134147814;

      setElectricityCount(kilowattHours);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <section className={css.container}>
      <h2 className={css.title}>
        Electricity we produced <br /> for all time
      </h2>
      <p className={css.wrapper}>
        <span className={css.electricity}>
          {formatNumber(electricityCount)}
        </span>
        <span className={css.kilowatt}>kWh</span>
      </p>
    </section>
  );
};
