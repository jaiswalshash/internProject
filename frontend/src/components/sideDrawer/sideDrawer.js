import "./sideDrawer.css";
import { Link } from "react-router-dom";
const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sideDrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
            <span className="sideDrawer_cartVal"> 0</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
