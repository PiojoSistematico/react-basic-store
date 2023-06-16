import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [itemsArray, setItemsArray] = useState([]);

  // the initial state check if there is a previous cart saved to local storage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  // Fetching items from https://fakestoreapi.com
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItemsArray(data));
  }, []);

  // Save cart data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <main>
      <Navbar cart={cart}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/store"
          element={
            <Store
              itemsArray={itemsArray}
              cart={cart}
              setCart={setCart}
            ></Store>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart itemsArray={itemsArray} cart={cart} setCart={setCart}></Cart>
          }
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
