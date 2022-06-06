import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { ticketSelector } from "../../../redux/userTicketSelector";
import ItemTicket from "./ItemTicket";

const ticketImg = require("../../../asset/img/ticketvector.png");
const TicketAvailableList = () => {
  const { ticketAvailables, isLoading } = useSelector(ticketSelector);

  return (
    <Fragment>
      {ticketAvailables?.length > 0 &&
        ticketAvailables.map((item, ind) => {
          return <ItemTicket ind={ind} data={item} key={ind} />;
        })}

      {ticketAvailables?.length <= 0 && <NoneTicketAvailable />}
    </Fragment>
  );
};

const NoneTicketAvailable = () => {
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
};

export default TicketAvailableList;
