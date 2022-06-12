import React, { useEffect, useState } from "react";
import { getDetailTicket } from "../../slices/userSlice";
const trainImg = require("../../asset/img/train1.jpeg");

const CheckTicketPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingCode, setBookingCode] = useState("");
  const [detailView, setDetailView] = useState(true);
  const [data, setData] = useState({});

  const onBack = async () => {
    setDetailView(false);

    setData({});
  };

  const onSubmit = async () => {
    const filter = { phoneNumber, bookingCode };

    setData(await getDetailTicket(filter));

    setDetailView(true);
  };

  return (
    <div>
      <div className="w-full h-screen relative">
        <img src={trainImg} className="w-full h-full object-cover" alt="" />
        {detailView ? (
          <div className="absolute top-1/2 left-1/2  w-[1200px] min-h-[700px] rounded-lg bg-white -translate-x-1/2 -translate-y-1/2 p-10 flex flex-col gap-4">
            <div
              className="w-[100px] text-white cursor-pointer py-3 text-center mt-4 bg-primary hover:bg-opacity-80 rounded-lg"
              onClick={onBack}
            >
              Quay lại
            </div>

            <div className="flex">
              <div className="mt-5 mb-5 w-[200px] font-bold text-base">
                Tên:
              </div>
              <div className="mt-5 mb-5 w-[200px] text-base">
                {data?.userBooking?.fullname}
              </div>
            </div>

            <div className="flex">
              <div className="mt-5 mb-5 w-[200px] font-bold text-base">
                Email:
              </div>
              <div className="mt-5 mb-5 w-[200px] text-base">
                {data?.userBooking?.email}
              </div>
            </div>

            <div className="flex">
              <div className="mt-5 mb-5 w-[200px] font-bold text-base">
                CMND/CCCD:
              </div>
              <div className="mt-5 mb-5 w-[200px] text-base">
                {data?.userBooking?.identifyNumber}
              </div>
            </div>

            <div className="flex">
              <div className="mt-5 mb-5 w-[200px] font-bold text-base">
                Số điện thoại:
              </div>
              <div className="mt-5 mb-5 w-[200px] text-base">
                {data?.userBooking?.phoneNumber}
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 w-[500px] min-h-[300px] rounded-lg bg-white -translate-x-1/2 -translate-y-3/4 p-10 flex flex-col gap-4">
            <CustomInput
              required={true}
              title="Nhập Số Điện Thoại"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              inputType="Number"
              placeHolder=""
            />
            <CustomInput
              required={true}
              title="Nhập Mã Đặt Chỗ"
              value={bookingCode}
              onChange={(event) => setBookingCode(event.target.value)}
              inputType="Text"
              placeHolder=""
            />
            <div
              className="w-full text-white cursor-pointer py-3 text-center mt-4 bg-primary hover:bg-opacity-80 rounded-lg"
              onClick={onSubmit}
            >
              Kiểm tra
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CustomInput = ({
  required,
  title,
  inputType,
  placeHolder,
  name,
  onChange,
  value,
}) => {
  let className = "bg-blue-100 focus:border-blue-300 ";
  return (
    <div>
      <div className="opacity-70 text-base ">{title}</div>
      <input
        required={required}
        name={name}
        value={value}
        onChange={onChange}
        type={inputType}
        placeholder={placeHolder}
        className={`w-full px-6 py-2  text-base rounded-lg mt-2 outline-none  border-2  border-transparent ${className}`}
      />
    </div>
  );
};

export default CheckTicketPage;
