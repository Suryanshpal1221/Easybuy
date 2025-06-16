import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Products from "./Pages/Products/Products.jsx";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart.jsx";
import ProductInfo from "./Pages/ProductInfo/ProductInfo.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/productInfo" element={<ProductInfo />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
