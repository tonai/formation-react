import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

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
    </div>
  );
}

Header.defaultProps = {
  alt: "",
  size: 80
};

export default Header;
