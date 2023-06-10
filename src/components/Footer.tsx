import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav>
        <NavLink className="nav-links" to="/">
          Home
        </NavLink>
        <NavLink className="nav-links" to="/store">
          Store
        </NavLink>
        <NavLink className="nav-links" to="/about">
          About
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
