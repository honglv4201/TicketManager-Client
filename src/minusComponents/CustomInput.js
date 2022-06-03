import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const CustomInput = ({
  placeholder,
  type,
  className,
  name,
  handleOnChange,
  nodeRef,
}) => {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <p className="ml-1">{placeholder}</p>
      <input
        ref={nodeRef}
        onChange={handleOnChange}
        name={name}
        type={type}
        className={`${className} text-base w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-gray-200 outline-none focus:!border-blue-200`}
      ></input>
    </div>
  );
};

export default CustomInput;
