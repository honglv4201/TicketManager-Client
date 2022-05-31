import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterSelectorFixIndex } from "../../redux/tripSelector";
import { setInitWagon } from "../../slices/seatBookingSlice";
import {
  handleTimeTicket,
  handleTimeTicketMinutes,
} from "../../utils/handleValue";
import Details from "./detailsInTicket/Details";
import Policy from "./detailsInTicket/Policy";

const TicketItem = ({ data }) => {
  const [detailPannel, setDetailPannel] = useState(false);
  const handleDetailPannel = () => {
    setDetailPannel((prev) => !prev);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: dataFilter, success } = useSelector(filterSelectorFixIndex);
  const handleToBooking = () => {
    // dispatch(setInitWagon(9));
    localStorage.setItem("s", dataFilter.startIndex);
    localStorage.setItem("e", dataFilter.endIndex);
    navigate(`/booking/${data.idTrip}`);
  };

  const [tabDetail, setTabDetail] = useState(1);
  if (!data) {
    return <div>Khong co du lieu</div>;
  }
  return (
    <div>
      <div className="flex gap-0 py-10 px-8 bg-white dark:!bg-dark_primary_pnl rounded-lg">
        <div className="flex-1">
          <div className="block ">
            <div className="flex gap-3 mb-2 pb-1 border-b border-b-slate-100">
              <span className="pr-2 border-r-2 border-r-slate-100">Cheap</span>
              <span className="">Rating: </span>
              <span className="text-yellow-500 pr-2 border-r-2 border-r-slate-100">
                4.5
              </span>
              <span className="">Available: </span>
              <span className="text-yellow-500 ">{data.totalSeat} seat</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="transport-image relative max-w-[160px] max-h-[220px] overflow-hidden -ml-4">
                <img
                  className="w-full h-full rounded-lg md:hidden"
                  src="https://images.moneycontrol.com/static-mcnews/2021/08/Indian-Railways.jpg?impolicy=website&width=770&height=431"
                  alt="tau_image"
                />
                <div className="absolute right-0 bottom-0 rounded-md px-2 py-[2px] leading-2 bg-blue-50 font-bold text-[11px] text-blue-400">
                  {data.idTrain}
                </div>
              </div>

              {/* <span className="p-2 font-bold text-lg ">
                {data.route.startLocation}
              </span> */}
              <div className="flex flex-col gap-1 text-sm ml-10">
                <span className="time-start font-bold">
                  {handleTimeTicket(data.s)}
                </span>
                <span className=""> {"start ne"}</span>
              </div>
              <div className="flex flex-col gap-1 items-center text-sm">
                <div className="w-[100px] border-dotted border-b-2"></div>
                <span>{handleTimeTicketMinutes(data.e - data.s)}h</span>
              </div>
              <div className="flex flex-col gap-1 text-sm mr-10">
                <span className="time-start font-bold">
                  {handleTimeTicket(data.e)}
                </span>
                <span> {"end nne"}</span>
              </div>

              {/* <span className="p-2 font-bold text-lg ">
                {" "}
                {data.route.endLocation}
              </span> */}

              <div className="flex flex-col gap-1">
                <div className="opacity-40 text-[13px] max-w-[160px]">
                  * Xem tong quan
                </div>
                <div
                  onClick={handleDetailPannel}
                  className="btn select-none flex gap-1 items-center rounded-md px-4 py-2 text-sm bg-slate-100 dark:!bg-gray-800 dark:text-white w-fit cursor-pointer hover:bg-gray-200 "
                >
                  Chi Tiet
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-3 w-3 font-bold arrow-detail ml-2 ${
                      detailPannel ? "active" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-2 pl-10">
          <div className="money px-2 font-bold">
            {/* {data.ticket?.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}{" "} */}
          </div>
          <Link
            to="/payment"
            className="btn-pay px-4 py-2 text-center rounded-lg bg-gray-200 text-black hover:text-black hover:bg-gray-300 "
          >
            Luu lai
          </Link>

          <div
            onClick={handleToBooking}
            className="btn-pay px-4 py-2 rounded-lg bg-primary text-white hover:text-white hover:bg-opacity-80 "
          >
            Dat Ngay
          </div>
        </div>
      </div>
      <div className={detailPannel ? "block" : "hidden"}>
        {" "}
        <div className="flex gap-4 ml-2 mt-2 cursor-pointer">
          <span
            onClick={() => setTabDetail(1)}
            className={`px-2 ${
              tabDetail === 1 ? "border-b-2 border-b-gray-300" : ""
            }`}
          >
            Details
          </span>
          <span
            onClick={() => setTabDetail(2)}
            className={`${
              tabDetail === 2 ? "border-b-2 border-b-gray-300" : ""
            }`}
          >
            Policy
          </span>
        </div>
        <div className="custom-animate-dropdown bg-white overflow-hidden  rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg w-full min-h-[200px]">
          <ComponentInDetail tab={tabDetail} />
        </div>
      </div>
      ``
    </div>
  );
};

const ComponentInDetail = ({ tab }) => {
  switch (tab) {
    case 1: {
      return <Details />;
    }
    case 2: {
      return <Policy />;
    }
    default: {
      break;
    }
  }
};

export default TicketItem;
