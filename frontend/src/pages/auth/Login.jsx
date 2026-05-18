import React from "react";

import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/auth/InputField";
import Button from "../../components/auth/Button";
import SocialLogin from "../../components/auth/SocialLogin";
import AuthFooter from "../../components/auth/AuthFooter";

import {
  FiMail,
  FiLock,
} from "react-icons/fi";

const Login = () => {
  return (
    <AuthLayout>

      <div className="w-full max-w-xl">

        {/* Heading */}
        <div>

          <h1 className="text-6xl font-bold text-gray-900">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 text-2xl mt-5">
            Login to continue to your account
          </p>
        </div>

        {/* Form */}
        <form className="mt-14 space-y-8">

          <InputField
            type="email"
            placeholder="Enter your email"
            icon={<FiMail />}
          />

          <InputField
            type="password"
            placeholder="Enter your password"
            icon={<FiLock />}
          />

          {/* Options */}
          <div className="flex items-center justify-between text-lg">

            <div className="flex items-center">
              <input type="checkbox" />

              <span className="ml-3 text-gray-600">
                Remember me
              </span>
            </div>

            <span className="text-orange-500 cursor-pointer">
              Forgot password?
            </span>
          </div>

          <Button title="Login" />
        </form>

        <SocialLogin />

        <AuthFooter
          text="Don't have an account?"
          linkText="Sign up"
        />
      </div>
    </AuthLayout>
  );
};

export default Login;