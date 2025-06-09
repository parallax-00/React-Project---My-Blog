import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  ClassName = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${type} ${bgColor} ${textColor} ${ClassName}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
