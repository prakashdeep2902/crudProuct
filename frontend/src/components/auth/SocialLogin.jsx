import React from "react";
import {
  FaGoogle,
  FaFacebookF,
  FaApple,
} from "react-icons/fa";

const SocialLogin = () => {
  return (
    <>
      {/* Divider */}
      <div className="flex items-center gap-5 my-10">

        <div className="flex-1 h-[1px] bg-gray-300"></div>

        <p className="text-gray-400 text-lg">
          OR
        </p>

        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 gap-5">

        <button className="border rounded-2xl h-[70px] flex items-center justify-center gap-3 text-xl font-medium hover:bg-gray-50">
          <FaGoogle />
          Continue with Google
        </button>

        <button className="border rounded-2xl h-[70px] flex items-center justify-center gap-3 text-xl font-medium hover:bg-gray-50">
          <FaFacebookF />
          Continue with Facebook
        </button>

        <button className="border rounded-2xl h-[70px] flex items-center justify-center gap-3 text-xl font-medium hover:bg-gray-50">
          <FaApple />
          Continue with Apple
        </button>
      </div>
    </>
  );
};

export default SocialLogin;