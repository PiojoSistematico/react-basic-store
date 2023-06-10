import { NavLink } from "react-router-dom";
import cart from "../assets/cart-shopping-solid.svg";

const Navbar = () => {
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
        <div className="total-items">66</div>
      </button>
    </header>
  );
};

export default Navbar;
