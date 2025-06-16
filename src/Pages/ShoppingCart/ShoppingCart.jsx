import React, { useState } from "react";
import styles from "./ShoppingCart.module.css";
import Cart from "../../Components/Cart/Cart";
import NavigationBar from "../../Components/NavigationBar/NavigationBar.jsx";
import AuthBar from "../../Components/AuthBar/AuthBar.jsx";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../../Atoms/cart.js";
import { totalPrice } from "../../Selector/cartSelector.js";

function ShoppingCart() {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const totalAmount = useRecoilValue(totalPrice);

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const handleRemove = (index) => {
    const newItems = cartItems.filter((item, ind) => {
      return index !== item.id;
    });
    setCartItems(newItems);
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  return (
    <>
      <AuthBar />
      <NavigationBar />
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>Shopping Cart</span>
          <span className={styles.remove} onClick={handleRemoveAll}>
            Remove All
          </span>
        </div>
        <hr />
        <div className={styles.shoppingCart}>
          <div className={styles.section1}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                return (
                  <Cart
                    imageUrl={item.image}
                    name={item.title}
                    category={item.category}
                    price={item.price}
                    onDecrement={() => handleDecrement(item.id)}
                    onIncrement={() => handleIncrement(item.id)}
                    count={item.count}
                    onRemove={() => handleRemove(item.id)}
                  />
                );
              })
            ) : (
              <h3 className={styles.empty}>Currently your cart is empty!</h3>
            )}
          </div>
          {cartItems.length > 0 && (
            <>
              <div className={styles.section2}>
                <div className={styles.charge}>
                  <h5>Subtotal</h5>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className={styles.charge}>
                  <h5>Shipping</h5>
                  <span>$5</span>
                </div>
                <div className={styles.charge}>
                  <h5>Tax</h5>
                  <span>${(0.18 * totalAmount).toFixed(2)}</span>
                </div>
                <div className={styles.Total}>
                  <h5>Order Total</h5>
                  <span>
                    ${(totalAmount + 5 + 0.18 * totalAmount).toFixed(2)}
                  </span>
                </div>
                <div>
                  <button className={styles.payment}>Proceed to Payment</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
