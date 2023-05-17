import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav";
import Product from "./Components/Product/Product";
import Profile from "./Components/Profile-Page/Profile";
import SearchPage from "./Components/Search/SearchPage";
type Props = {};

function App({}: Props) {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="profile/:id" element={<Profile />}></Route>
        <Route path="*"></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
