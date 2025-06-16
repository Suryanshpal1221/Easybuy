import React from "react";
import "./Products.css";
import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import { NavLink } from "react-router-dom";
import NavigationBar from "../../Components/NavigationBar/NavigationBar.jsx";
import AuthBar from "../../Components/AuthBar/AuthBar.jsx";
import { useSetRecoilState } from "recoil";
import { productState } from "../../Atoms/product.js";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const setProduct = useSetRecoilState(productState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=20");
        if (!res.ok) {
          setIsLoading(false);
          setError("Something went wrong.");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleProduct = (item) => {
    setProduct(item);
    navigate("/products/productInfo");
  };

  return (
    <>
      <AuthBar />
      <NavigationBar />
      <div className="product-container">
        {isLoading && <div>Loading...</div>}
        {products &&
          products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              rating={product.rating.rate}
              onClick={() => handleProduct(product)}
            />
          ))}
      </div>
    </>
  );
}

export default Products;
