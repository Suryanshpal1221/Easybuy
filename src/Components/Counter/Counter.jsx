import React, { useState } from "react";
import styles from "./Counter.module.css";

function Counter({ onDecrement, onIncrement, count }) {
  return (
    <div className={styles.container}>
      <div className={styles.buttons} onClick={onDecrement}>
        -
      </div>
      <div className={styles.count}>{count}</div>
      <div className={styles.buttons} onClick={onIncrement}>
        +
      </div>
    </div>
  );
}

export default Counter;
