import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header section">
      <a className="link" href="#">
        <img src={logo} alt="Логотип: Место.Россия" className="logo header__logo" />
      </a>
    </header>
  );
}

export default Header;
