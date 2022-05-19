import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./Categories/Categories";
import { Carousell } from "./Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Carousell />
      <Categories />
    </div>
  );
};

export default Home;
