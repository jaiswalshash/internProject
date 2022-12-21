import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Backdrop from "./components/backDrop/backDrop";
import Navbar from "./components/navbar/navbar";
import SideDrawer from "./components/sideDrawer/sideDrawer";
import CartScreen from "./screens/CartScreen/cartScreen.js";
import HomeScreen from "./screens/HomeScreen/homeScreen.js";
import ProductScreen from "./screens/ProductScreen/productScreen.js";
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
