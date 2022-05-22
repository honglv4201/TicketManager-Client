import React from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../slices/authSlice";

const UserOptionModal = ({ coords }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return ReactDom.createPortal(
    <div
      style={{
        top: coords.top + window.scrollY + coords.height,
        left: coords.left,
      }}
      className="modal absolute z-50 top-full left-0 mt-4  min-w-[200px] drop-shadow-lg min-h-[200px] rounded-lg bg-white flex flex-col justify-end "
    >
      <div
        className="px-10 py-4 rounded-lg bg-white flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
        onClick={handleLogOut}
      >
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        <span> Log out</span>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default UserOptionModal;
