import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card/Card";
import NavigationBar from "../../Components/NavigationBar/NavigationBar.jsx";
import AuthBar from "../../Components/AuthBar/AuthBar.jsx";
import { useSetRecoilState } from "recoil";
import { productState } from "../../Atoms/product.js";

function Home() {
  const navigate = useNavigate();
  const [featPro, setFeatPro] = useState([]);

  const setProduct = useSetRecoilState(productState);

  useEffect(() => {
    setFeatPro(featuredProducts);
  }, [featuredProducts]);

  const handleProduct = (item) => {
    setProduct(item);
    navigate("/products/productInfo");
  };

  const handleOurProductsButton = () => {
    navigate("/products");
  };

  return (
    <>
      <AuthBar />
      <NavigationBar />
      <div className="container">
        <div className="desc">
          <h1>We are changing the way people shop</h1>
          <p>
            Who is a user-friendly e-commerce platform designed to make online
            shopping simple and convenient
          </p>
          <button onClick={handleOurProductsButton}>OUR PRODUCTS</button>
        </div>
        <div className="gallery">
          <div className="item">
            <img
              src="https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://i.pinimg.com/236x/16/e6/8d/16e68d26f8d363c4fb98a4356f132b95.jpg"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://st4.depositphotos.com/1023934/37752/i/450/depositphotos_377527168-stock-photo-interior-design-modern-living-room.jpg"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://media.designcafe.com/wp-content/uploads/2019/12/17054440/living-room-furniture-design-for-your-home.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="featured">
        <div>Featured Products</div>
        <hr />
        <div className="cards">
          {featPro.map((product, index) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                rating={product.rating.rate}
                onClick={() => handleProduct(product)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

const featuredProducts = [
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      " Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
];

export default Home;
