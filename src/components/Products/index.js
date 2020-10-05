import React from "react";
import BigBox from "../BigBox";
import SmallBox from "../SmallBox";
import productData from "../../data/products.json";

function Products() {
  const [first, second, third] = productData;
  return (
    <>
      <BigBox data={first} />
      <SmallBox data={second} />
      <SmallBox data={third} />
    </>
  );
}

export default Products;
