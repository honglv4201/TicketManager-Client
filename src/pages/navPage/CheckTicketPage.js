import React from "react";
const trainImg = require("../../asset/img/train1.jpeg");

const CheckTicketPage = () => {
  return (
    <div>
      <div className="w-full h-screen relative">
        <img src={trainImg} className="w-full h-full object-cover" alt="" />
        <div className="absolute top-1/2 left-1/2 w-[500px] min-h-[300px] rounded-lg bg-white -translate-x-1/2 -translate-y-3/4 p-10 flex flex-col gap-4">
          <CustomInput title="Nhập Họ Tên" />
          <CustomInput title="Nhập mã đặt chỗ" />
          <div className="w-full text-white cursor-pointer py-3 text-center mt-4 bg-primary hover:bg-opacity-80 rounded-lg">
            Kiểm tra
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomInput = ({
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
