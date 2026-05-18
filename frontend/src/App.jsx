import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/user/register" element={<Register />} />
         <Route path="/user/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
  
export default App;
