import { Header } from './header/header';
import { Main } from './main/main';
import { About } from './about/about';
import { Electricity } from './electricity/electricity';
import { Cases } from './cases/cases';
import { Questions } from './questions/questions';
import { Contacts } from './contacts/contacts';
import { Footer } from './footer/footer';

import css from '../app.module.css';
export const App = () => {
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
