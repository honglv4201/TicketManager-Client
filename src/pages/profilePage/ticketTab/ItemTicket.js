import { useState } from "react";
import ModalTicketDetail from "./ModalTicketDetail";

const ItemTicket = ({ data, ind }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full px-6 py-4 pt-8 relative mx-4 my-2 border rounded-md items-center justify-between gap-2">
      <div className="flex items-center gap-4  ">
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
            <span>Ga {data.route.start}</span>
            <span> - </span>
            <span>Ga {data.route.end}</span>
          </div>
          <div className="opacity-80 text-[14px]">
            Tàu {data.route.trainID} - Thứ {new Date(data.route.date).getDay()},
            Ngày {new Date(data.route.date).toLocaleDateString("vi-VN")}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="px-6 text-center  py-2 rounded-md cursor-pointer bg-red-200 hover:bg-gray-300">
          Thanh toan
        </div>
        <div
          onClick={() => setOpen(true)}
          className="px-6 text-center py-2 rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300"
        >
          Xem chi tiet
        </div>
      </div>

      <div className="absolute top-0 left-0 flex items-center gap-1">
        {new Date(data.route.date).getDate() - new Date().getDate() < 2 && (
          <div className="px-6 py-1 rounded-sm text-center bg-red-50 text-[12px]">
            Sắp đi
          </div>
        )}

        {ind === 0 && (
          <div className="px-6 py-1 rounded-sm text-center bg-blue-50 text-[12px]">
            Vừa đặt
          </div>
        )}

        {data.userBooking.isPay ? (
          <div className="px-6 py-1 rounded-sm text-center bg-green-50 text-green-500 text-[12px]">
            đã thanh toán
          </div>
        ) : (
          <div className="px-6 py-1 rounded-sm text-center bg-red-50 text-red-500 text-[12px]">
            Chưa thanh toán
          </div>
        )}
      </div>

      {open && (
        <ModalTicketDetail data={data} closeModal={() => setOpen(false)} />
      )}
    </div>
  );
};

export default ItemTicket;
