import React, { useState } from "react";
import SellerAuthLayout from "../../components/seller/SellerAuthLayout";
import SellerBranding from "../../components/seller/SellerBranding";
import InputField from "../../components/auth/InputField";
import Button from "../../components/auth/Button";
import { loginSellerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
const SellerLogin = () => {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handelOnchange = (e) => {
    try {
      const { name, value } = e.target;
      setFromData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } catch (error) {
      console.error(erro);
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginSellerUser(formData);

      if (response.status == 200) {
        setFromData({
          email: "",
          password: "",
        });
        navigate("/seller/product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SellerAuthLayout brandingContent={<SellerBranding />}>
      <div className="w-full max-w-xl">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 text-2xl mt-5">
            Login to continue to your account
          </p>
        </div>
      </div>

      <form className="mt-8 space-y-5" onSubmit={handelSubmit}>
        <InputField
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handelOnchange}
        />
        <InputField
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handelOnchange}
        />

        <Button title="Create Account" />
      </form>
    </SellerAuthLayout>
  );
};

export default SellerLogin;
