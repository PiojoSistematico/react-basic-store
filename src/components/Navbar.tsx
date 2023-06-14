import { NavLink } from "react-router-dom";
import cart from "../assets/cart-shopping-solid.svg";

type NavbarProps = {
  totalItems: number;
};

const Navbar: React.FunctionComponent<NavbarProps> = ({ totalItems }) => {
  return (
    <header>
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
      <button className="btn-cart">
        <img src={cart} alt="" />
        <div className="total-items">{totalItems}</div>
      </button>
    </header>
  );
};

export default Navbar;
