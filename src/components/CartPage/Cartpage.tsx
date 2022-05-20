import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SingleProduct } from "../../features/productSlice";
import { clearCart, removeProductFromCart } from "../../features/cartSlice";
import { RootState } from "../../redux/store";
import styles from "./CartPage.module.css";

export const Cartpage = () => {
  const cartData = useSelector((state: RootState) => state.cartReducer.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const cartCount=cartData.length;

  const handleRemoveProduct = (e: SingleProduct) => {
    dispatch(removeProductFromCart(e));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={styles.cartPageContainer}>
      <button className={styles.clearCart} onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      <p className={styles.shopMore} onClick={() => navigate("/products")}>
        Shop More-{">>"}
      </p>
      {cartData?.map((e, id) => (
        <div key={e.id} className={styles.productdiv}>
          <img src={e.image} alt="" />
          <div>
            <h5>{e.model}</h5>
            <p>{e.variant}</p>
            <h6>₹ {e.price}</h6>
          </div>
          <button onClick={() => handleRemoveProduct(e)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
