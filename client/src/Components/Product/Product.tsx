import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../Types";
import ErrorPage from "../ErrorPage";
import PopularSection from "../Main/PopularSection";
import RecommendedProducts from "./RecommendedProducts";

type Props = {
  product: Product;
};

function ProductPage({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product-page">
      <div className="main-section">
        <img src={product.photo} alt={product.title}></img>
        <h1>{product.title}</h1>
        <div className="categories">
          {product.catagories.map((category) => (
            <button type="button" className="category">
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="product-info">
        <div className="description">
          <h2>Description</h2>
          <p>{product.body}</p>
        </div>
        <div className="purchase-section">
          <h1>{product.price}$</h1>
          <h4>
            {product.in_stock > 99 ? "99+" : product.in_stock} Left in Stock
          </h4>
          <div className="quantity-controller">
            <button
              onClick={() => {
                if (quantity < 99) setQuantity((prev) => prev + 1);
              }}
            >
              {" "}
              +{" "}
            </button>
            <h2>{quantity}</h2>
            <button
              onClick={() => {
                if (quantity > 0) {
                  setQuantity((prev) => prev - 1);
                }
              }}
            >
              {" "}
              -{" "}
            </button>
          </div>
          <button type="button">Buy Now</button>
        </div>
      </div>
      <h1 className="made-by">Made By : </h1>
      <div className="product-maker">
        <img
          src={product.maker.profile_picture}
          alt="maker profile picture"
        ></img>
        <h3>{product.maker.username}</h3>
      </div>
      {/*! add reviews section*/}
      <RecommendedProducts
        catagories={product.catagories}
        id={product._id}
      ></RecommendedProducts>
    </div>
  );
}

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((product) => {
        setProduct(product.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return <>{product ? <ProductPage product={product} /> : <ErrorPage />}</>;
}

export default Product;
