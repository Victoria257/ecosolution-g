import { Main } from 'sections/main/main';

import { Header } from 'sections/header/header';
import { About } from 'sections/about/about';
import { Electricity } from 'sections/electricity/electricity';
import { Cases } from 'sections/cases/cases';
import { Questions } from 'sections/questions/questions';
import { Contacts } from 'sections/contacts/contacts';
import { Footer } from 'sections/footer/footer';

import css from './home.module.css';

export const Home = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <header>
          <Header />
        </header>
        <main>
          <Main />
          <About />
          <Electricity />
          <Cases />
          <Questions />
          <Contacts />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
