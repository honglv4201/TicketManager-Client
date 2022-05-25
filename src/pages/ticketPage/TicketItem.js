import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { handleTimeTicket } from "../../utils/handleValue";
import Details from "./detailsInTicket/Details";

const TicketItem = ({ data }) => {
  const [detailPannel, setDetailPannel] = useState(false);
  const handleDetailPannel = () => {
    setDetailPannel((prev) => !prev);
  };
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
              <span className="text-yellow-500 ">53 seat</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="transport-image relative max-w-[160px] max-h-[220px] overflow-hidden -ml-4">
                <img
                  className="w-full h-full rounded-lg md:hidden"
                  src="https://images.moneycontrol.com/static-mcnews/2021/08/Indian-Railways.jpg?impolicy=website&width=770&height=431"
                  alt="tau_image"
                />
                <div className="absolute right-0 bottom-0 rounded-md px-2 py-[2px] leading-2 bg-blue-50 font-bold text-[11px] text-blue-400">
                  Tàu SE3
                </div>
              </div>

              {/* <span className="p-2 font-bold text-lg ">
                {data.route.startLocation}
              </span> */}
              <div className="flex flex-col gap-1 text-sm ml-10">
                <span className="time-start font-bold">
                  {handleTimeTicket(data.route.startTime)}
                </span>
                <span className=""> {data.route.startLocation}</span>
              </div>
              <div className="flex flex-col gap-1 items-center text-sm">
                <div className="w-[100px] border-dotted border-b-2"></div>
                <span>{data.route.totalTime}h</span>
              </div>
              <div className="flex flex-col gap-1 text-sm mr-10">
                <span className="time-start font-bold">
                  {handleTimeTicket(
                    data.route.startTime + data.route.totalTime
                  )}
                </span>
                <span> {data.route.endLocation}</span>
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
            {data.ticket?.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}{" "}
          </div>
          <Link
            to="/payment"
            className="btn-pay px-4 py-2 text-center rounded-lg bg-gray-200 text-black hover:text-black hover:bg-gray-300 "
          >
            Luu lai
          </Link>

          <Link
            to="/payment"
            className="btn-pay px-4 py-2 rounded-lg bg-primary text-white hover:text-white hover:bg-opacity-80 "
          >
            Dat Ngay
          </Link>
        </div>
      </div>
      <div className={detailPannel ? "block" : "hidden"}>
        {" "}
        <div className="flex gap-4 ml-2 mt-2 cursor-pointer">
          <span className="border-b-2 border-b-gray-200 px-2">Details</span>
          <span>Policy</span>
        </div>
        <div className="bg-white overflow-hidden rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg w-full min-h-[200px]">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default TicketItem;