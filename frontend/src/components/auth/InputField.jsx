import React from "react";

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
    />
  );
};

export default InputField;