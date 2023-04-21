import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="hero">
      <img
        src="https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="women sewing"
        className="hero-img"
      ></img>
      <div className="hero-text-holder">
        <h1>Handmade With Love</h1>
        <p>
          No warehouse, No factories , No mass production. <span>From</span> the
          people <span>To</span> {""}
          the people
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Hero;
