import { NavLink } from "react-router-dom";
import cart from "../assets/cart-shopping-solid.svg";

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <button className="btn-cart">
        <img src={cart} alt="" />
        <div className="total-items">66</div>
      </button>
    </header>
  );
};

export default Navbar;
