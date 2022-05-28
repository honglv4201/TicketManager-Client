import React from "react";
import CustomInput from "../../minusComponents/CustomInput";

const InputInfoComponent = () => {
  return (
    <div className="mb-10">
      <h1 className="text-lg">NHẬP THÔNG TIN HÀNH KHÁCH: </h1>
      <div className="list w-full">
        <ItemCustomer />
        <ItemCustomer />
        <ItemCustomer />
      </div>

      <h1 className="text-lg uppercase mt-10">NHẬP THÔNG TIN người đặt: </h1>
      <div className="mt-1 opacity-70">
        * Vui lòng nhập đúng thông tin để nhận thông tin vé
      </div>
      <div className="list w-full">
        <div className="mt-8 px-4 py-3 flex flex-col gap-4 rounded-md border-2 pb-8 border-gray-100">
          <div className="flex items-center gap-10 mt-2 justify-items-stretch">
            <CustomInput placeholder="Ho va Ten" />
            <CustomInput placeholder="CMND/CCCD/GPLX" />
          </div>
          <div className="flex items-center gap-10">
            <CustomInput placeholder="SDT" />
            <CustomInput placeholder="Email" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemCustomer = () => {
  return (
    <div className="mt-4 px-4 py-3 rounded-md border-2 pb-6 border-gray-100">
      <h3>Nguoi lon 1 </h3>
      <div className="w-[200px] h-10 bg-blue-50 rounded-md mt-4 flex items-center px-2 justify-between">
        <div className="flex items-center gap-2">
          <i class="fa-solid fa-chair"></i>Ghe 11 - Toa 1
        </div>
        <div className="px-4 -mr-2 py-2  rounded-md hover:bg-blue-100 cursor-pointer">
          <i class="fa-solid fa-arrows-rotate"></i>
        </div>
      </div>
      <div className="flex items-center gap-10 mt-2 justify-items-stretch">
        <CustomInput placeholder="Ho va Ten" />
        <CustomInput placeholder="CMND/CCCD/GPLX" />
      </div>
    </div>
  );
};

export default InputInfoComponent;
