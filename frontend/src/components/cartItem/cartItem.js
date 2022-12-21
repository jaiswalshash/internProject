import "./cartItem.css";
import { Link } from "react-router-dom";
const CartItem = (img_url, title, price) => {
  return (
    <div className="cartItem">
      <div className="cartItem__img">
        {/* <img
          src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
          alt="product__image"
        /> */}
        <img src={img_url} alt={title} />
      </div>

      <Link to={`/product/${1111}`} className="cartItem__name">
        <p>Product 1</p>
      </Link>

      <p className="product__price">$1099</p>

      <select className="product__qty">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="delete__btn">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
