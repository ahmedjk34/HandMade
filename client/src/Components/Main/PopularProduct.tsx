import React from "react";
import { Product } from "../../Types";

type Props = {
  product: Product;
};

function PopularProduct({ product }: Props) {
  return (
    <div className="popular-product">
      <img src={product.photo} alt="product"></img>
      <div className="product-info">
        <h2>{product.title}</h2>
        <h3>{product.price}$</h3>
      </div>
    </div>
  );
}

export default PopularProduct;
