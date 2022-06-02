import React from "react";
import { useSelector } from "react-redux";
const completedGif = require("../../asset/img/completed2.gif");
const { seatSelector } = require("../../redux/seatBookingSelector");

const PaymentCompletePage = () => {
  const { wagonBooking, status } = useSelector(seatSelector);
  return (
    <div className="mx-4 my-2 rouned-lg  flex mt-4 relative justify-center w-full min-h-[580px] ">
      {status === "loading" && (
        <div className="absolute min-w-[900px] min-h-[600px] rounded-lg  flex bg-gray-400 bg-opacity-10 items-center justify-center">
          <div className="w-14 h-14 rounded-full border-4 border-r-transparent border-primary animate-spin duration-75"></div>
        </div>
      )}
      {status === "idle" && (
        <div className="flex flex-col items-center relative gap-4 bg-white min-w-[900px] rounded-lg">
          {/* <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
          <i class="fa-solid fa-check text-green-400 font-bold text-2xl"></i>
        </div> */}

          <img
            className="w-[280px] h-fit object-cover"
            src={completedGif}
            alt=""
          />
          <div className="text-green-500 uppercase text-3xl -mt-14">
            thanh toán thành công
          </div>
          <div className="payment-info">
            <div className="text-lg mt-4">Thông tin thanh toán</div>
            <div className="grid grid-cols-1 text-base mt-4 px-8 py-3 rounded-lg border-2 border-gray-100 w-[480px] gap-x-4 gap-y-2">
              <div className="flex items-center gap-1 justify-between">
                <div className="opacity-70">Payment Type</div>
                <div className="opacity-100 font-bold text-right">
                  <span className="px-1 py-[2px] mr-1 rounded-md bg-blue-100 text-[12px] font-normal text-blue-500">
                    {wagonBooking.isPay ? "đã thanh toán" : "chưa thanh toán"}
                  </span>{" "}
                  Tiền mặt
                </div>
              </div>
              <div className="flex items-center gap-1 justify-between">
                <div className="opacity-70">Khách hàng</div>
                <div className="opacity-100 font-bold text-right">
                  {wagonBooking.user?.name}
                </div>
              </div>
              <div className="flex items-center gap-1 justify-between">
                <div className="opacity-70">Email</div>
                <div className="opacity-100 font-bold text-right">
                  {wagonBooking.user?.email}
                </div>
              </div>
              <div className="flex items-center gap-1 justify-between">
                <div className="opacity-70">SDT</div>
                <div className="opacity-100 font-bold text-right">
                  {wagonBooking.user?.sdt}
                </div>
              </div>
              <div className="flex items-center gap-1 justify-between">
                <div className="opacity-70">Số lượng vé</div>
                <div className="opacity-100 font-bold text-right">3 vé</div>
              </div>
              <div className="flex items-center gap-1 justify-between">
                <div className="opacity-70">Tổng tiền</div>
                <div className="opacity-100 font-bold text-right">
                  1.340.000 vnd
                </div>
              </div>
            </div>
          </div>

          {/* btn */}
          <div className="flex items-center gap-4 mt-4 cursor-pointer">
            {" "}
            <div className="w-[180px] py-3 bg-gray-200 rounded-lg text-center uppercase hover:bg-opacity-80">
              Home
            </div>
            <div className="w-[180px] py-3 bg-primary text-white rounded-lg text-center uppercase hover:bg-opacity-80">
              Kiểm tra vé
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentCompletePage;
