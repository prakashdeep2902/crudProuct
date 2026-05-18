import React from "react";

const Button = ({ title }) => {
  return (
    <button
      type="submit"
      className="w-full h-[50px] bg-orange-500 hover:bg-orange-600 transition-all rounded-2xl text-white text-2xl font-semibold"
    >
      {title}
    </button>
  );
};

export default Button;