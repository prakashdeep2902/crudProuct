import React from "react";

const AuthFooter = ({
  text,
  linkText,
}) => {
  return (
    <div className="text-center mt-10 text-lg">
      <span className="text-gray-500">
        {text}
      </span>

      <span className="text-orange-500 ml-2 font-medium cursor-pointer">
        {linkText}
      </span>
    </div>
  );
};

export default AuthFooter;