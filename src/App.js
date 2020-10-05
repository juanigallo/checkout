import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Checkout from "./components/Checkout";

import { ToggleCartProvider } from "./contexts/ToggleCart";
import { ProductProvider } from "./contexts/Product";

function App() {
  const [toggle, setToggle] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleToggle() {
    setToggle((prevState) => !prevState);
  }

  function addProduct(data) {
    setTotalPrice((prevState) => prevState + data.price);
    setProducts((prevState) => [...prevState, data]);
  }

  const toggleCartContext = {
    toggle: true,
    handleToggle: handleToggle
  };

  const productContext = {
    products: products,
    totalPrice: totalPrice,
    addProduct: addProduct
  };

  return (
    <ToggleCartProvider value={toggleCartContext}>
      <Navbar />

      <ProductProvider value={productContext}>
        <Products />
        {toggle && <Checkout />}
      </ProductProvider>
    </ToggleCartProvider>
  );
}

export default App;
