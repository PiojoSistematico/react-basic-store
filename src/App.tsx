import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [itemsArray, setItemsArray] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  // Fetching items from https://fakestoreapi.com
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItemsArray(data));
  }, []);

  console.log(itemsArray);

  return (
    <main>
      <Navbar totalItems={totalItems}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/store"
          element={
            <Store
              itemsArray={itemsArray}
              setTotalItems={setTotalItems}
            ></Store>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </main>
  );
}

export default App;
