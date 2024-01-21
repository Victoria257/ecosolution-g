import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';

import questions from '../../json/questions.json';

import css from 'sections/questions/questions.module.css';

import { Add } from 'components/svg/add';
import { Minus } from 'components/svg/minus';

export const Questions = () => {
  const [add, setAdd] = useState([false, true, true, true, true]);

  const handleToggle = index => {
    setAdd(prevStates => {
      return prevStates.map((_, i) => (i === index ? !prevStates[i] : true));
    });
  };

  return (
    <Element name="questions">
      <section className={css.container}>
        <div className={css.titleWrapper}>
          <h2 className={css.title}>Frequently Asked Questions</h2>
        </div>
        <div className={css.listWrapper}>
          <ul className={css.list}>
            {questions.map((item, index) => (
              <li className={css.set} key={index}>
                <div className={css.questionWrapper}>
                  <button
                    className={css.buttonIcon}
                    onClick={() => handleToggle(index)}
                    aria-label={add[index] ? 'Open answer' : 'Close answer'}
                  >
                    {add[index] ? <Add /> : <Minus />}
                  </button>
                  <div className={css.text}>
                    <p className={css.question}>{item.question}</p>
                    {!add[index] && <p className={css.answer}>{item.answer}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.findQuestionAndButtonWrapper}>
          <div className={css.findQuestionAndButton}>
            <p className={css.findQuestion}>
              Didn't find the answer to your question?{' '}
            </p>
            <Link
              to="contactUs"
              smooth={true}
              duration={1000}
              offset={-112}
              className={css.buttonWrapper}
              aria-label='Go to "contacts"'
            >
              <button className={css.button}>
                Contact Us
                <span className={css.dot}></span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Element>
  );
};
