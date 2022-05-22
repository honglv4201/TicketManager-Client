import React from "react";
import DartMode from "../../minusComponents/dartMode/DartMode";

const UserGuest = (props) => {
  const handleDardMode = () => {
    if (localStorage.theme !== "dark") {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <div className="flex items-center gap-4">
      <DartMode onClick={handleDardMode} />
      {localStorage.getItem("id") == null ? (
        <div className="flex items-center">
          <div
            className="min-w-[160px] w-fit grid place-items-center  lg:hidden  mr-4 text-base  py-2  rounded-lg text-blue-500 border-2 dark:text-white  dark:border-blue-300 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-none cursor-pointer"
            onClick={props.onClickRegister}
            ref={props.nodeRefSecond}
          >
            Đăng ký
          </div>

          <div
            className="min-w-[160px] w-fit px- mr-6 text-base grid place-items-center py-2 rounded-lg border-transparent border-2 bg-blue-500 text-white hover:bg-blue-400 cursor-pointer"
            onClick={props.onClickLogin}
            ref={props.nodeRef}
          >
            Đăng nhập
          </div>
        </div>
      ) : (
        <div className="header__login  js-btn-login">
          <a className="mybtn" href="/profile">
            <i className="btn-icon bx bx-user"></i>
            <span>
              {localStorage.getItem("firstName")}{" "}
              {localStorage.getItem("lastName")}
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default UserGuest;
