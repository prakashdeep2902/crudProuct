import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import InputField from "../../components/auth/InputField";
import Button from "../../components/auth/Button";
import SocialLogin from "../../components/auth/SocialLogin";
import AuthFooter from "../../components/auth/AuthFooter";
import { FiMail, FiLock } from "react-icons/fi";
import { loginUser } from "../../services/authService";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { showMsg } from "../../redux/msgSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(
        showMsg({
          message: "email and password required",
          type: "error",
        }),
      );
    }

    try {
      setLoading(true);
      const data = await loginUser(formData);
      if (data.status == 200) {
        dispatch(
          loginSuccess({
            token: data.token,
            user: data.user,
          }),
        );
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-xl">
        <div>
          <h1 className="text-6xl font-bold text-gray-900">Welcome Back 👋</h1>
          <p className="text-gray-500 text-2xl mt-5">
            Login to continue to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-14 space-y-8">
          <InputField
            type="email"
            placeholder="Enter your email"
            icon={<FiMail />}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            type="password"
            placeholder="Enter your password"
            icon={<FiLock />}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="flex items-center justify-between text-lg">
            <div className="flex items-center">
              <input type="checkbox" />

              <span className="ml-3 text-gray-600">Remember me</span>
            </div>

            <span className="text-orange-500 cursor-pointer">
              Forgot password?
            </span>
          </div>

          <Button title={loading ? "Loading..." : "Login"} />
        </form>

        <SocialLogin />

        <AuthFooter text="Don't have an account?" linkText="Sign up" />
      </div>
    </AuthLayout>
  );
};

export default Login;
