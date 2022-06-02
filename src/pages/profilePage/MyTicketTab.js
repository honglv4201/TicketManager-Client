import React, { Fragment, useState } from "react";
const ticketImg = require("../../asset/img/ticketvector.png");

const MyTicketTab = () => {
  const [nav, setNav] = useState(0);

  const setNavActive = (ind) => {
    setNav(ind);
  };
  return (
    <div className="">
      <div className="w-full my-4 flex justify-center items-center gap-2">
        <NavItem setNavActive={() => setNavActive(0)} active={nav === 0}>
          Vé của tôi
        </NavItem>
        <NavItem setNavActive={() => setNavActive(1)} active={nav === 1}>
          Vé đã dùng
        </NavItem>
        <NavItem setNavActive={() => setNavActive(2)} active={nav === 2}>
          Vé đã huỷ
        </NavItem>
      </div>

      <div className="w-full flex flex-col gap-4 mt-10 min-h-[400px] rounded-lg">
        <NavRender nav={nav} />
      </div>
    </div>
  );
};

const NavRender = ({ nav }) => {
  if (nav === 0) {
    return (
      <div className="w-full min-h-[300px] flex flex-col  mt-4 items-center ">
        <div className="w-[140px] h-fit ">
          <img className="opacity-50" src={ticketImg} alt="" />
        </div>
        <div className=" font-bold opacity-90 mt-2 text-lg">
          Hiện tại bạn chưa có vé nào cả
        </div>
        <div className="mt-4 text-md w-[420px] opacity-60 text-center">
          Nếu có ý định di chuyển bằng tàu lửa, hãy mau chóng đặt vé trên 5Ting
          ticket, vừa đơn giản vừa tiết kiệm
        </div>
      </div>
    );
  }
  if (nav === 1) {
    return (
      <Fragment>
        <ItemTicket />
        <ItemTicket />
        <ItemTicket />
      </Fragment>
    );
  }
  if (nav === 2) {
    return (
      <div className="w-full min-h-[300px] flex flex-col  mt-4 items-center ">
        <div className="w-[140px] h-fit ">
          <img className="opacity-10" src={ticketImg} alt="" />
        </div>
        <div className=" font-bold opacity-30 mt-2 text-lg">
          Không có vé huỷ
        </div>
      </div>
    );
  }
};
const NavItem = ({ children, active, setNavActive }) => {
  return (
    <div
      onClick={setNavActive}
      className={`nav cursor-pointer  text-base px-4 py-1 rounded-md hover:bg-gray-200 ${
        active ? " text-primary bg-gray-100" : ""
      }`}
    >
      {children}
    </div>
  );
};

const ItemTicket = () => {
  return (
    <div className="flex w-full px-6 py-4 mx-4 my-2 border rounded-md items-center justify-start gap-2">
      <div className="flex items-center gap-4 ">
        <div className="border rounded-md w-20 h-20 overflow-hidden grid place-content-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/%C4%90svn.png"
            alt=""
          />
        </div>
        <div className="flex flex-col ml-1 gap-[2px]">
          <div className="px-2  w-fit text-center grid place-content-center text-[10px] rounded-lg bg-gray-100">
            Một chiều
          </div>
          <div className="font-bold text-base">
            <span>Ga Sài Gòn</span>
            <span> - </span>
            <span>Ga Đà Nẵng</span>
          </div>
          <div className="opacity-80 text-[14px]">
            Tàu SE2 - Thứ 5, 26/5/2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTicketTab;
