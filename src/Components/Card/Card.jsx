import React from "react";
import styles from "./Card.module.css";

export default function Card({ id, imageUrl, price, title, rating, onClick }) {
  return (
    <>
      <div className={styles.card} id={id} onClick={onClick}>
        <div className={styles.image}>
          <img src={imageUrl} alt="img" />
        </div>
        <div className={styles.details}>
          <h6>{title}</h6>
          <div className={styles.price}>${price}</div>
          <div className={styles.rating}>{rating}</div>
        </div>
      </div>
    </>
  );
}
