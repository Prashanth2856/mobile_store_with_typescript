import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./CartPage.module.css";

export const Cartpage = () => {
  const cartData = useSelector((state: RootState) => state.cartReducer.cart);

  // const cartCount=cartData.length;

  return (
    <div className={styles.cartPageContainer}>
      {cartData?.map((e, id) => (
        <div key={e.id} className={styles.productdiv}>
          <img src={e.image} alt="" />
          <div>
            <h5>{e.model}</h5>
            <p>{e.variant}</p>
            <h6>₹ {e.price}</h6>
          </div>
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
};
