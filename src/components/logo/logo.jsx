import css from 'components/logo/logo.module.css';
import logo from 'image/Logo.svg';

export const Logo = () => {
  return (
    <div className={css.container}>
      <img src={logo} alt="Логотип" />
    </div>
  );
};
