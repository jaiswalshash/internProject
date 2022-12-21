import Product from "../../components/product/product";
import "./homeScreen.css";
// import { useSelector } from "react-redux";
import productData from "../../data/productData.js";
const HomeScreen = () => {
  // const product = useSelector((state) => state.product);
  return (
    <div className="homeScreen">
      <h2 className="home_heading"> Available Products </h2>
      <div className="products">
        {productData?.map((item) => {
          return (
            <Product
              key={item.id}
              img_url={item.imageURL}
              title={item.name}
              price={item.price}
              description={item.description}
              inStock={item.stock}
            />
          );
        })}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
