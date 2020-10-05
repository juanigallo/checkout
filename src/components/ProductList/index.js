import React, { useContext } from "react";
import ProductContext from "../../contexts/Product";

function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <ul>
      {products.map((product, key) => {
        const { name, price } = product;
        return (
          <li key={key}>
            {name} - ${price}
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
