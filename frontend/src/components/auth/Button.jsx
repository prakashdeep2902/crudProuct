import React from "react";

const Button = ({ title }) => {
  return (
    <button className="w-full bg-orange-500 hover:bg-orange-600 transition-all text-white py-3 rounded-xl font-semibold cursor-pointer">
      {title}
    </button>
  );
};

export default Button;