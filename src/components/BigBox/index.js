import React, { useContext } from "react";
import ProductContext from "../../contexts/Product";

function BigBox({ data }) {
  const { name } = data;
  const { addProduct } = useContext(ProductContext);
  return <div onClick={() => addProduct(data)}>{name}</div>;
}

export default BigBox;
