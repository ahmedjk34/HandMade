import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../Types";

type Props = {
  catagories: string[];
  id: string;
};

function Product({ data }: { data: Product }) {
  const { photo, title } = data;
  return (
    <div
      className="recommended-product popular-product"
      onClick={() =>
        window.open(`${window.location.origin}/#/product/${data._id}`, "_blank")
      }
    >
      <img src={photo}></img>
      <h3 className="product-info">{title}</h3>
    </div>
  );
}
function RecommendedProducts({ catagories, id }: Props) {
  const [recommendedProducts, setRecommendedProducts] = useState<
    [Product] | null
  >(null);

  useEffect(() => {
    axios
      .post("http://localhost:3000/product/recommended", {
        data: {
          id: id,
          catagories: catagories,
        },
      })
      .then((e) => {
        setRecommendedProducts(e.data);
      })
      .catch((error) => {
        //! Handel error properly
        console.log(error);
      });
  }, []);
  return (
    <div className="recommended-section">
      <h1>You May Also Like</h1>
      <div>
        {recommendedProducts?.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedProducts;
