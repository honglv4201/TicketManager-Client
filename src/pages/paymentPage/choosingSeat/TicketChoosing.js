import { useEffect } from "react";
import { useSelector } from "react-redux";
import { seatSelector } from "../../../redux/seatBookingSelector";
import ItemSeatDetail from "./ItemSeatDetail";

const TickeChoosing = ({ type, handleContinue }) => {
  const { wagon, currentWagon, wagonBooking } = useSelector(seatSelector);

  const checkTotalTicket = () => {
    let totalTicket = 0;

    for (let i = 0; i < wagon.length; i++) {
      totalTicket += wagon[i].seat.length;
    }
    return totalTicket;
  };
  const handleContinueFix = () => {
    if (type === "edit") {
      handleContinue(1);
    } else {
      handleContinue(2);
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="p-2 duration-75 transition-all ">
      <div className="w-full py-4 px-2">
        <div className="flex items-center gap-4 ">
          <div className="border rounded-md w-12 h-12 overflow-hidden grid place-content-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/%C4%90svn.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="px-2  w-fit text-center grid place-content-center text-[10px] rounded-lg bg-gray-100">
              Chiều đi
            </div>
            <div className="font-bold">
              <span>Ga Sài Gòn</span>
              <span> - </span>
              <span>Ga Đà Nẵng</span>
            </div>
            <div className="opacity-80 text-[12px]">
              Tàu SE2 - Thứ 5, 26/5/2022
            </div>
          </div>
        </div>
        <div className="mt-10">
          {/* {wagon.map((item, index) => {
            return (
              wagon[index].seat &&
              wagon[index].seat.map((item, ind) => (
                <ItemSeatDetail
                  type={type}
                  data={{ seat: item, wagon: index }}
                  key={ind}
                />
              ))
            );
          })} */}
          {wagonBooking.listUserTicket.map((item, ind) => {
            return (
              <ItemSeatDetail
                type={type}
                // data={{ seat: item.numOfSeat, wagon: index }}
                data={item}
                wagon={item.numOfWagon}
                key={ind}
              />
            );
          })}
        </div>
        <div className=" w-full ml-auto mt-10 flex flex-col items-start gap-2  px-4 py-3 shadow-md rounded-lg">
          <span className="font-bold text-base opacity-90 mb-2">
            Tổng cộng:
          </span>
          <div className="flex gap-2 items-center">
            <span className="opacity-80">Số vé:</span>
            <span className="font-bold"> {checkTotalTicket()} vé</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="opacity-80"> Số tiền:</span>
            <span className="font-bold"> 1.523.000 vnd</span>
          </div>
          <div
            className={`btn w-full px-4 py-2 rounded-lg duration-100 transition-all bg-primary mt-2 cursor-pointer hover:bg-opacity-80 text-center text-white ${
              checkTotalTicket() === 0
                ? "!opacity-20 hover:bg-opacity-100 bg-gray-500"
                : ""
            }`}
            onClick={handleContinueFix}
          >
            Tiếp tục
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickeChoosing;
