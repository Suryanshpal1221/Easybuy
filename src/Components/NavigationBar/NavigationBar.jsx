import React, { useState } from "react";
import "./NavigationBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import CartCounter from "../CartCounter/CartCounter";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { totalCartItems } from "../../Selector/cartSelector";
import { useRecoilValue } from "recoil";

function NavigationBar() {
  const navigate = useNavigate();

  const [darkTheme, setDarkTheme] = useState(false);

  const total = useRecoilValue(totalCartItems);

  const handleLogo = () => {
    navigate("/");
  };

  const handleCartIcon = () => {
    navigate("/shoppingcart");
  };

  return (
    <>
      <div className="navbar">
        <button className="sidelist">X</button>
        <div className="nav">
          <button className="logo" onClick={handleLogo}>
            EasyBuy
          </button>
        </div>
        <div className="pages">
          <ul>
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/aboutus"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/products"}>
              <li>Products</li>
            </NavLink>
            <NavLink to={"/shoppingcart"}>
              <li>Cart</li>
            </NavLink>
          </ul>
        </div>
        <div className="TnC">
          <div className="cartIcon" onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? <MdModeNight size={26} /> : <MdLightMode size={28} />}
          </div>
          <div className="cartIcon" onClick={handleCartIcon}>
            <CartCounter count={total} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
