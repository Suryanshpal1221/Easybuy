import styles from "./CartCounter.module.css";
import { BsCart } from "react-icons/bs";

const CartCounter = ({ count }) => {
  return (
    <div>
      <div className={styles.count}>{count}</div>
      <BsCart size={28} />
    </div>
  );
};

export default CartCounter;
