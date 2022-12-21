import "./productScreen.css";
import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartSlice";
import cartData from "../../data/cart";

const ProductScreen = (prod, img_url, title, price, description, inStock) => {
  const imgUrl = prod.imgURL;
  // const dispatch = useDispatch();
  console.log(prod);
  return (
    <div className="productScreen">
      <div className="left">
        <div className="left__image">
          {/* <img
            src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
            alt="productImage"
          /> */}
          <img src={imgUrl} alt={prod.title} />
        </div>
        <div className="left__info">
          <p className="prod__name">{prod.title}</p>
          <p className="price">{prod.price}</p>
          <p className="left__description">
            {/* {" "}
            Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super
            Retina XDR display.1 Ceramic Shield with 4x better drop
            performance.2 Incredible low-light photography with Night mode on
            all cameras. Cinema-grade Dolby Vision video recording, editing, and
            playback. Powerful A14 Bionic chip. And new MagSafe accessories for
            easy attach and faster wireless charging.3 Let the fun begin. */}
            {prod.description}
          </p>
        </div>
      </div>

      <div className="right">
        <div className="right__info">
          <p>
            Price <span>{prod.price}</span>
          </p>
          <p>
            Instock <span>{prod.inStock}</span>
          </p>
          <p>
            Quantity
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button
              type="button"
              onClick={() => {
                // dispatch(
                //   addToCart({
                //     id,
                //     img_url,
                //     title,
                //     price,
                //     inStock,
                //   })
                // );
                cartData.push({
                  id:{prod},
                  imageURL:{img_url},
                  title:{title},
                  price:{price},
                  description:{description},
                  inStock:{inStock}
                })
                console.log(cartData);
              }}
            >
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
