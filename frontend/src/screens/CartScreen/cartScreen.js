import CartItem from "../../components/cartItem/cartItem";
import "./cartScreen.css";
import { useSelector } from "react-redux";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cartScreen">
      <div className="cartScreen__left">
        {/* <h2>Shopping Cart</h2> */}
        {cart?.map((item) => (
          <CartItem
            id={item.id}
            img_url={item.image_URL}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        {/* <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem /> */}
      </div>
      <div className="cartScreen__right">
        <p>Subtotal (0) items</p>
        <p>$1099</p>
        <button className="cartScreen__btn">Proceed To Checkout</button>
      </div>
    </div>
  );
};

export default CartScreen;
