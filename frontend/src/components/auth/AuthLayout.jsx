import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Left Side */}
      <div className="w-1/2 hidden lg:flex flex-col justify-center px-20 bg-white">
        <h1 className="text-6xl font-bold leading-tight text-gray-900">
          Create Account, <br />
          <span className="text-orange-500">Shop Unlimited.</span>
        </h1>

        <p className="mt-6 text-gray-500 text-lg">
          Join thousands of customers and discover amazing products.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
          alt="shopping"
          className="w-[400px] mt-10"
        />
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;