import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../../Types";
import PopularProduct from "./PopularProduct";

type Props = {};

function PopularSection({}: Props) {
  const [items, setItems] = useState<Product[] | null>(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/product/popular")
      .then((products) => {
        setItems(products.data);
      })
      //!Error handel properly
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="popular-section">
      <h1>See What's Popular</h1>
      <div>
        {items?.map((product) => (
          <PopularProduct product={product} />
        ))}
      </div>
    </div>
  );
}

export default PopularSection;
