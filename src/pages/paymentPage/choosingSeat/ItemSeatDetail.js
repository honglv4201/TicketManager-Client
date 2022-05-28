import { useDispatch } from "react-redux";
import { removeSeat } from "../../../slices/seatBookingSlice";

const ItemSeatDetail = ({ data: { seat, wagon }, type }) => {
  const dispatch = useDispatch();

  console.log("hogtest ", type);
  const handleRemoveItem = () => {
    dispatch(removeSeat({ seat, wagon }));
  };
  return (
    <div className="w-full px-3 py-3 flex justify-between items-center rounded-md border my-4">
      <div className="flex flex-col gap-1 items-start">
        <div className="text-[10px]">Ngồi mềm điều hòa</div>
        <div className="font-bold">
          Ghế {seat} - Toa {wagon + 1}
        </div>
      </div>

      <div className="flex items-center gap-1 text-[12px] flex-col">
        <div className={`opacity-60 ${type !== "edit" ? "" : "hidden "}`}>
          Chưa nhập thông tin
        </div>
        <span className="font-bold ">713.000 vnd</span>
        <div
          onClick={handleRemoveItem}
          className={`${
            type === "edit" ? "" : "hidden "
          } btn px-2 py-1 rounded-md border hover:bg-gray-200 cursor-pointer`}
        >
          Bỏ chọn
        </div>
      </div>
    </div>
  );
};
export default ItemSeatDetail;
