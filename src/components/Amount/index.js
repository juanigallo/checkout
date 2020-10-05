import React, { useContext } from "react";
import ProductContext from "../../contexts/Product";

function Amount() {
  const { products, totalPrice } = useContext(ProductContext);

  return (
    <ul>
      <li>Cantidad: {products.length}</li>
      <li>Precio total: {totalPrice}</li>
    </ul>
  );
}

export default Amount;
