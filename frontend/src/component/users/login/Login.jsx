import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const HandelSubmit = async (e) => {
    e.preventDefault();
    try {
      const Api = `http://localhost:4000/api/user/login`;
      const data = await axios.post(Api, formData);
      if (data.data.status == 200) {
        setFormData({
          email: "",
          password: "",
        });

        navigate("/");
      }

    } catch (error) {}
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>User Login</h1>

        <form className="login-form" onSubmit={HandelSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handelChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handelChange}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="register-text">
            Don't have an account? <span>Register</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
