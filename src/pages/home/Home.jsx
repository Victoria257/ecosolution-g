import { Main } from 'components/main/main';

import { Header } from 'components/header/header';
import { About } from 'components/about/about';
import { Electricity } from 'components/electricity/electricity';
import { Cases } from 'components/cases/cases';
import { Questions } from 'components/questions/questions';
import { Contacts } from 'components/contacts/contacts';
import { Footer } from 'components/footer/footer';

import css from './home.module.css';

export const Home = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Header />
        <main>
          <Main />
          <About />
          <Electricity />
          <Cases />
          <Questions />
          <Contacts />
        </main>
        <Footer />
      </div>
    </div>
  );
};
