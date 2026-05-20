import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SellerRegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

  };

  return (
    <div>

      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900">
          Create Seller Account
        </h2>

        <p className="mt-2 text-gray-500">
          Start selling your products online.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-orange-500">*</span>
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-orange-500">*</span>
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number <span className="text-orange-500">*</span>
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password <span className="text-orange-500">*</span>
          </label>

          <div className="relative">
            <input
              type={
                showPassword ? "text" : "password"
              }
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Confirm Password{" "}
            <span className="text-orange-500">*</span>
          </label>

          <div className="relative">
            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mt-1 accent-orange-500"
            required
          />

          <p className="text-sm text-gray-600">
            I agree to the{" "}
            <span className="text-orange-500 cursor-pointer hover:underline">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-orange-500 cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300"
        >
          Register
        </button>

        {/* Footer */}
        <div className="text-center pt-2">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/seller/login"
              className="text-orange-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

      </form>
    </div>
  );
};

export default SellerRegisterForm;