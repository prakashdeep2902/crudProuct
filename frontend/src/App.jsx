import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import SellerRegister from "./pages/seller/SellerRegister";
import SellerLogin from "./pages/seller/SellerLogin";
import Product from "./pages/seller/Product";
import Dashboard from "./pages/seller/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/seller/register" element={<SellerRegister />} />
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/product" element={<Product />} />
        <Route path="/seller/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
