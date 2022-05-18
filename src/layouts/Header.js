import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import AuthModal from "../components/HeaderComponents/AuthModal";
import { HeaderLogin } from "../components/HeaderComponents/HeaderLogin";
import useClickOutSide from "../hooks/useClickOutSide";
import DartMode from "../minusComponents/dartMode/DartMode";

const Header = () => {
  const {
    show: showModal,
    setShow: setShowModal,
    nodeRef,
  } = useClickOutSide(".modal-login");

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
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
    <Fragment>
      <div className="min-h-[80px] bg-white shadow-md dark:!bg-black !transition-colors !duration-500 2xl:px-16 md:px-1 w-screen flex items-center">
        <div className=" flex items-center w-screen justify-between">
          <div className="header__logo ssm:hidden  ">
            <div className="img-logo"></div>
            <a
              href="/"
              className="2xl:text-3xl text-[#1d99d3] sm:!text-xl w-fit "
            >
              5Ting Bus
            </a>
          </div>
          <div className="header__nav hidden">
            <ul className="mynavbar">
              <li className="navbar__item navbar__item--actived">Thuê xe</li>
              <li className="navbar__item ">Quản lý đơn hàng</li>
              <li className="navbar__item ">Trở thành đối tác</li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <DartMode onClick={handleDardMode} />

            <HeaderLogin nodeRef={nodeRef} open={openModal}></HeaderLogin>
          </div>
          {/* <HeaderLogined ></HeaderLogined> */}
        </div>
      </div>
      {/* {showModal ? <ModalLogin close={openModal} /> : null} */}
      {showModal ? <AuthModal handleClose={openModal} /> : null}
      <Outlet />
    </Fragment>
  );
};

export default Header;
