import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Products from "./components/ProductPage/Products";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/HomePage/Home";
import { Cartpage } from "./components/CartPage/Cartpage";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </div>
  );
}

export default App;
