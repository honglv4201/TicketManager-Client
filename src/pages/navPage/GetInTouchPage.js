import React from "react";
const trainImg = require("../../asset/img/train3.jpeg");

const GetInTouchPage = () => {
  return (
    <div>
      <div className="w-full h-screen relative">
        <img src={trainImg} className="w-full h-full object-cover" alt="" />
        <div className="absolute shadow-lg top-20 right-20 w-[500px] min-h-[300px] rounded-lg bg-white  p-10 flex flex-col gap-4">
          Thoong tin lieen heej
        </div>
      </div>
    </div>
  );
};

export default GetInTouchPage;
