import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/store" element={<Store></Store>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </main>
  );
}

export default App;
