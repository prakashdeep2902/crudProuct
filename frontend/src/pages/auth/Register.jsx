import React, { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/auth/InputField";
import Button from "../../components/auth/Button";
import { registerUser } from "../../services/authService";

import useToast from "../../hooks/useToast";
const Register = () => {
  const { showMessage } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = new Object({
      name: formData.name,
      email: formData.email,
      role: "User",
      password: formData.password,
    });

    try {
      const data = await registerUser(newData);

      if (data.status == 200) {
        setFormData({
          name: "",
          email: "",
          password: "",
        });

          showMessage("Registration Successful", "success");
      }
    
    } catch (error) {
      console.log(error);
      showMessage("Something went wrong", "error");
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900">Create Account</h2>

        <p className="text-gray-500 mt-2">Sign up to continue shopping</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <InputField
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <InputField
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button title="Create Account" />
        </form>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?
          <span className="text-orange-500 cursor-pointer ml-2">Login</span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
