import React, { useCallback } from "react";

const Button = ({ filled = false, data, clsStyle = "py-2", action }) => {
  const handleClick = useCallback(() => {
    action && action;
  }, []);
  return (
    <button
      className={`${
        filled ? "bg-yellow-900 text-black-33" : "text-white"
      } leading-[140%] ${clsStyle} px-8 border border-1 border-yellow-900 rounded-full`}
      onClick={handleClick}
    >
      {data}
    </button>
  );
};

export default Button;