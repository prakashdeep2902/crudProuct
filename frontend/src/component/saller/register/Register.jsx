import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    shopname: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const Api = `http://localhost:4000/api/seller/create`;
      const data = await axios.post(Api, formData);
      if (data?.status == 201) {
        setFormData({
          name: "",
          email: "",
          phonenumber: "",
          shopname: "",
          password: "",
          confirmpassword: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sellerRegister">
      <div className="registerContainer">
        <div className="leftSection">
          <h1>Become a Seller</h1>
          <p>
            Start selling your products online and grow your business with us.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="seller"
          />
        </div>

        <div className="rightSection">
          <h2>Seller Registration</h2>

          <form className="registerForm" onSubmit={handelOnSubmit}>
            <div className="inputGroup">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="inputGroup">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="inputGroup">
              <label>Phone Number</label>

              <input
                type="text"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <div className="inputGroup">
              <label>Shop Name</label>

              <input
                type="text"
                name="shopname"
                value={formData.shopname}
                onChange={handleChange}
                placeholder="Enter shop name"
              />
            </div>

            <div className="inputGroup">
              <label>Password</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </div>

            <div className="inputGroup">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />
            </div>

            <button className="registerBtn">Register Seller</button>

            <p className="loginText">
              Already have an account? <span>Login</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
