import React from "react";
import SellerAuthLayout from "../../components/seller/SellerAuthLayout";
import SellerBranding from "../../components/seller/SellerBranding";
import InputField from "../../components/auth/InputField";
import Button from "../../components/auth/Button";

const SellerLogin = () => {
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

      <form className="mt-8 space-y-5">
        <InputField type="email" placeholder="Email Address" name="email" />
        <InputField type="password" placeholder="Password" name="password" />

        <Button title="Create Account" />
      </form>
    </SellerAuthLayout>
  );
};

export default SellerLogin;
