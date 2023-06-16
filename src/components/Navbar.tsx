import { NavLink } from "react-router-dom";
import cartImg from "../assets/cart-shopping-solid.svg";

type NavbarProps = {
  cart: {
    [key: number]: number;
  };
};

const Navbar: React.FunctionComponent<NavbarProps> = ({ cart }) => {
  const totalItems = Object.keys(cart).reduce(
    (sum, elem) => sum + cart[parseInt(elem, 10)],
    0
  );
  return (
    <header>
      <nav>
        <NavLink className="nav-links" to="/">
          Home
        </NavLink>
        <NavLink className="nav-links" to="/store">
          Store
        </NavLink>
      </nav>
      <NavLink className="nav-links" to="/cart">
        <button className="btn-cart">
          <img src={cartImg} alt="" />
          <div className="total-items">{totalItems}</div>
        </button>
      </NavLink>
    </header>
  );
};

export default Navbar;
