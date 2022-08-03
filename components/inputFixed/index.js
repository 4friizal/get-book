import React from "react";

export default function InputFixed({
  id,
  type,
  placeholder,
  onChange,
  disabled,
}) {
  return (
    <input
      id={id}
      className="mx-auto bg-white rounded-[5px] text-[#d9d9d9] font-Poppins p-2 shadow-[2px_2px_4px_2px_rgba(0,0,0,0.25)] w-[90%] md:w-[400px]"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
