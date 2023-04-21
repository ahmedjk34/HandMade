import React from "react";
import logo from "../assets/logo.png";
import { BsSearch, BsPerson } from "react-icons/bs";
type Props = {};

const Nav = (props: Props) => {
  return (
    <nav>
      <div className="nav-header">
        <img src={logo} className="logo" alt="logo"></img>
      </div>
      <div className="nav-buttons-holder">
        <button className="nav-button">Best Sellers</button>
        <button className="nav-button">Jewelry</button>
        <button className="nav-button">Clothing</button>
        <button className="nav-button">Artwork</button>
        <button className="nav-button">Home Décor</button>
        <BsSearch className="nav-icon" />
        <BsPerson className="nav-icon" />
      </div>
    </nav>
  );
};

export default Nav;
