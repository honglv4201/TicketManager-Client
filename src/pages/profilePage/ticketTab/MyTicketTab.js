import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../redux/authSelector";
import { ticketSelector } from "../../../redux/userTicketSelector";
import { fetchAllUserTicket } from "../../../slices/userTicketSlice";
import ItemTicket from "./ItemTicket";
import TicketAvailableList from "./TicketAvailableList";
const ticketImg = require("../../../asset/img/ticketvector.png");

const MyTicketTab = () => {
  const [nav, setNav] = useState(0);

  const setNavActive = (ind) => {
    setNav(ind);
  };

  const { user } = useSelector(userSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUserTicket({ userID: user.user._id }));
  }, []);

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
    return <TicketAvailableList />;
  }
  if (nav === 1) {
    return <NoneTicket>Không có vé đã dùng</NoneTicket>;
  }
  if (nav === 2) {
    return <NoneTicket>Không có vé huỷ</NoneTicket>;
  }
};

const NoneTicket = ({ children }) => {
  return (
    <Fragment>
      <div className="w-full min-h-[300px] flex flex-col  mt-4 items-center ">
        <div className="w-[140px] h-fit ">
          <img className="opacity-10" src={ticketImg} alt="" />
        </div>
        <div className=" font-bold opacity-30 mt-2 text-lg">{children}</div>
      </div>
    </Fragment>
  );
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

export default MyTicketTab;
