import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={logo}
          alt={props.alt}
          height={props.size}
        />
      </Link>
      <LanguageSwitcher/>
    </div>
  );
}

Header.defaultProps = {
  alt: "",
  size: 80
};

export default Header;
