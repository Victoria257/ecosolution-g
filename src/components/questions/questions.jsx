import React from 'react';
import { Link, Element } from 'react-scroll';
import css from 'components/questions/questions.module.css';
import { Add } from 'components/svg/add';
import { Minus } from 'components/svg/minus';
import { useState } from 'react';

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
            <li className={css.set}>
              <div className={css.questionWrapper}>
                <button
                  className={css.buttonIcon}
                  onClick={() => handleToggle(0)}
                >
                  {add[0] ? <Add /> : <Minus />}
                </button>
                <div className={css.text}>
                  <p className={css.question}>
                    How do wind turbines and solar panels work together in a
                    renewable energy system?
                  </p>
                  {!add[0] && (
                    <p className={css.answer}>
                      Wind turbines and solar panels generate electricity
                      through different mechanisms. Wind turbines harness the
                      kinetic energy of the wind to turn blades, which then
                      drive a generator. Solar panels convert sunlight into
                      electricity through the photovoltaic effect. When
                      integrated into a renewable energy system, these
                      technologies complement each other by providing a
                      continuous and reliable power supply. Wind power is often
                      more abundant during certain times, while solar power is
                      consistent during daylight hours, resulting in a more
                      stable overall energy output.
                    </p>
                  )}
                </div>
              </div>
            </li>
            <li className={css.set}>
              <div className={css.questionWrapper}>
                <button
                  className={css.buttonIcon}
                  onClick={() => handleToggle(1)}
                >
                  {add[1] ? <Add /> : <Minus />}
                </button>
                <div className={css.text}>
                  <p className={css.question}>
                    What sets EcoSolution's renewable energy solutions apart
                    from others on the market?
                  </p>
                  {!add[1] && <p className={css.answer}>answer</p>}
                </div>
              </div>
            </li>
            <li className={css.set}>
              <div className={css.questionWrapper}>
                <button
                  className={css.buttonIcon}
                  onClick={() => handleToggle(2)}
                >
                  {add[2] ? <Add /> : <Minus />}
                </button>
                <div className={css.text}>
                  <p className={css.question}>
                    How can businesses and communities benefit from integrating
                    renewable energy solutions from EcoSolution?
                  </p>
                  {!add[2] && <p className={css.answer}>answer</p>}
                </div>
              </div>
            </li>
            <li className={css.set}>
              <div className={css.questionWrapper}>
                <button
                  className={css.buttonIcon}
                  onClick={() => handleToggle(3)}
                >
                  {add[3] ? <Add /> : <Minus />}
                </button>
                <div className={css.text}>
                  <p className={css.question}>
                    What measures does EcoSolution take to ensure the
                    environmental sustainability of its products?
                  </p>
                  {!add[3] && <p className={css.answer}>answer</p>}
                </div>
              </div>
            </li>
            <li className={css.set}>
              <div className={css.questionWrapper}>
                <button
                  className={css.buttonIcon}
                  onClick={() => handleToggle(4)}
                >
                  {add[4] ? <Add /> : <Minus />}
                </button>
                <div className={css.text}>
                  <p className={css.question}>
                    How does EcoSolution engage with local communities and
                    support a just transition to renewable energy?
                  </p>
                  {!add[4] && <p className={css.answer}>answer</p>}
                </div>
              </div>
            </li>
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
