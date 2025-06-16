import React from "react";
import "./ProductInfo.css";
import { useEffect, useState } from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar.jsx";
import AuthBar from "../../Components/AuthBar/AuthBar.jsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productState } from "../../Atoms/product.js";
import { cartState } from "../../Atoms/cart.js";

function ProductInfo() {
  const [added, setAdded] = useState(false);

  const product = useRecoilValue(productState);
  const setCart = useSetRecoilState(cartState);

  const handleClick = (item) => {
    if (!added) {
      setCart((prev) => [...prev, item]);
    }
    setAdded(true);
  };

  return (
    <>
      <AuthBar />
      <NavigationBar />
      <section>
        <div className="section1">
          <img src={product.image} alt="my-image" />
        </div>
        <div className="section2">
          <div className="name">{product.title}</div>
          <div className="category">{product.category}</div>
          <div className="price">${product.price}</div>
          <div className="description">{product.description}</div>
          <button
            className="bag"
            onClick={() => handleClick({ ...product, count: 1 })}
          >
            {added ? "ADDED TO BAG" : "ADD TO BAG"}
          </button>
        </div>
      </section>
    </>
  );
}

export default ProductInfo;
