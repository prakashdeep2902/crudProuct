import React from "react";

const Toast = ({ message, type }) => {
  return (
    <div
      className={`fixed top-5 right-5 px-6 py-4 rounded-xl text-white shadow-lg z-50 transition-all
      ${
        type === "success"? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-orange-500"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;