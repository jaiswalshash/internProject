import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUp from "../profile/signUp/signUp";
import "./navbar.css";
const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        {/* <h2 onClick={<Link to="/"></Link>}>ShopLine</h2> */}
        <Link to="/" className="logo__name">
          ShopLine
        </Link>
      </div>
      <ul className="navbar_links">
        <li>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
            <span className="navbar_cartVal"> 0</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
        </li>

        <li>
          <Link to="/signUp">
            <i className="fa-solid fa-lock"></i>
            LogIn/ SignUp
          </Link>
        </li>
      </ul>
      <div className="navbar_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
