import React from "react";
import "./AboutUs.css";
import NavigationBar from "../../Components/NavigationBar/NavigationBar.jsx";
import AuthBar from "../../Components/AuthBar/AuthBar.jsx";

function AboutUs() {
  return (
    <>
      <AuthBar />
      <NavigationBar />
      <div className="about">
        <h1>
          We love <span>EasyBuy</span>
        </h1>
        <p>
          Easy Buy is a user-friendly e-commerce platform designed to make
          online shopping simple and convenient. It offers a wide range of
          products, competitive pricing, and a seamless shopping experience.
          With easy navigation, secure transactions, and fast delivery, Easy Buy
          aims to provide customers with an effortless way to shop for their
          favorite items from the comfort of their homes.
        </p>
      </div>
    </>
  );
}

export default AboutUs;
