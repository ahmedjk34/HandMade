import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav";
type Props = {};

function App({}: Props) {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" />
        <Route path="/search" />
        <Route path="user/:id"></Route>
        <Route path="*"></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
