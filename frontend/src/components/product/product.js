import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
const Product = (prod) => {
  const imgUrl = prod.img_url;
  console.log(imgUrl);
  return (
    <div className="product">
      {/* <img
        src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
        alt="prod"
      /> */}
      {/* console.log({id}, {instock}) */}
      <img src={(imgUrl)} alt={prod.title} />
      <div className="product_info">
        <p className="product_name">{prod.title}</p>
        <p className="product_description">
          {/* Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super
          Retina XDR display.1 Ceramic Shield with 4x better drop performance.
          Incredible low-light photography with Night mode on all cameras. */}
          {prod.description}
        </p>
        <p className="product_price">{prod.price}</p>

        <Link to={`/product/${1111}`} className="info_button">
          {" "}
          View{" "}
        </Link>
      </div>
    </div>
  );
};

export default Product;
