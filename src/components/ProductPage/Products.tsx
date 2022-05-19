import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Carousell } from "../HomePage/Carousel/Carousel";
import styles from "./Products.module.css";

const Products: React.FC = () => {
  const allProducts = useSelector(
    (state: RootState) => state.productReducer.products
  );
  console.log(allProducts);

  const handleSort: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    let value = e.target.value;
    console.log(value);
  };

  return (
    <>
      <Carousell />
      <div style={{ width: "80%", margin: "auto" }}>
        <div className={styles.selectTag}>
          <label>Filter By:</label>
          {"  "}
          <select name="filter" id="filter">
            <option value="select">select</option>
            <option value="5to10">5% - 10%</option>
            <option value="10to15">10% - 15%</option>
            <option value="15to20">15% - 20%</option>
          </select>
        </div>
        <div className={styles.selectTag}>
          <label>Sort By:</label>
          {"  "}
          <select name="sort" id="sort" onChange={handleSort}>
            <option value="relevance">Relevance</option>
            <option value="lowtohigh">Price - Low to High</option>
            <option value="hightolow">Price - High to Low</option>
          </select>
        </div>
        <div className={styles.productsContainer}>
          {allProducts.map((e, id) => (
            <div key={e.id} className={styles.productDiv}>
              <img src={e.image} alt="" />
              <h5>{e.model}</h5>
              <p>{e.variant}</p>
              <p style={{ color: "red", fontWeight: "bold" }}>
                {e.discount}% off
              </p>
              <h6>₹ {e.price}</h6>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
