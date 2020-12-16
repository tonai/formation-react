import logo from '../../logo.svg';
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <img
        src={logo}
        alt={props.alt}
        height={props.size}
      />
    </div>
  );
}

Header.defaultProps = {
  alt: "",
  size: 80
};

export default Header;
