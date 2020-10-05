import React, { useContext } from "react";
import ProductContext from "../../contexts/Product";

function SmallBox({ data }) {
  const { addProduct } = useContext(ProductContext);
  const { name } = data;
  return <div onClick={() => addProduct(data)}>{name}</div>;
}

export default SmallBox;
