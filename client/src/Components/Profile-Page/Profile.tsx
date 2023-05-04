import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product, User } from "../../Types";
import { Rating } from "react-simple-star-rating";

type Props = {};

function Profile({}: Props) {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${id}`)
      .then((response) => setUser(response.data))
      .catch((e) => console.log(e));
    axios
      .get(`http://localhost:3000/product/user/${id}`)
      .then((response) => setProducts(response.data))
      .catch((e) => console.log(e));
  }, [id]);
  return (
    <div className="profile-page">
      <div className="main-info">
        <img className="banner" src={user?.banner} alt="banner"></img>
        <img
          className="pfp"
          src={user?.profile_picture}
          alt="profile picture"
        ></img>
        <h1>{user?.username}</h1>
        <h4>{user?.bio}</h4>
      </div>
      <div className="collections">
        <h1>Collections</h1>
        <p>/implement/</p>
      </div>
      <div className="shop">
        <h1>Shop</h1>
        {products && products.length != 0 ? (
          <div>
            {products?.map((product) => (
              <div className="product">
                <img src={product.photo} alt={`${product.body}`}></img>
                <h2>{product.title}</h2>
                <Rating
                  initialValue={Number(product.rating)}
                  readonly={true}
                  allowFraction={true}
                  fillColor="orange"
                  className="rating"
                  size={25}
                ></Rating>
                <h3>{product.price}$</h3>
              </div>
            ))}
          </div>
        ) : (
          <h3>This shop doesn't sell anything currently</h3>
        )}
      </div>
    </div>
  );
}

export default Profile;
