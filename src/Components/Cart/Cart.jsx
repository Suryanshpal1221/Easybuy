import React from "react";
import "./Cart.css";
import Counter from "../Counter/Counter";

function Cart({
  imageUrl,
  name,
  category,
  price,
  onDecrement,
  onIncrement,
  count,
  onRemove,
}) {
  return (
    <div className="con">
      <div className="img">
        <img src={imageUrl} alt="image" className="src" />
      </div>
      <div className="details">
        <div className="name">{name}</div>
        <div className="category">{category}</div>
        <div className="price">${price}</div>
        <Counter
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          count={count}
        />
        <div className="remove" onClick={onRemove}>
          Remove
        </div>
      </div>
    </div>
  );
}

export default Cart;
