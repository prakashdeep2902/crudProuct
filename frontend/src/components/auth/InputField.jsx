import React from "react";

const InputField = ({
  type,
  placeholder,
  icon,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="border border-gray-300 rounded-2xl flex items-center px-5 h-15">

      <span className="text-2xl text-gray-400">
        {icon}
      </span>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full ml-4 outline-none text-lg bg-transparent"
      />
    </div>
  );
};

export default InputField;