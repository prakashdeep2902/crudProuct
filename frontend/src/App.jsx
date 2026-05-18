import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
         <Route path="/user/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
  
export default App;
