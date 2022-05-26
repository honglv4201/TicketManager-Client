import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollContainer from "react-indiana-drag-scroll";
import { seatSelector } from "../../../redux/seatBookingSelector";

import ItemWagon from "./ItemWagon";
import ItemSeatOdd from "./wagon_type1/ItemSeatOdd";
import ItemSeatEven from "./wagon_type1/ItemSeatEven";
import { addSeat } from "../../../slices/seatBookingSlice";
const SelectSeat = () => {
  const { currentWagon } = useSelector(seatSelector);

  return (
    <div className="">
      <div className="flex items-center gap-4 ">
        <ScrollContainer className="scroll-container flex items-center gap-4">
          <div className="!w-14 mr-2 h-14 rounded-tl-full border-8 border-gray-300 border-r-transparent border-b-transparent bg-gray-100">
            <div className="w-14"></div>
          </div>
          {new Array(9).fill(0).map((item, ind) => {
            return <ItemWagon ind={ind} active={ind === currentWagon} />;
          })}
        </ScrollContainer>
      </div>

      <div className="mt-4 w-full min-h-[350px] mb-6 overflow-hidden rounded-md border-4 border-gray-100">
        <div className="h-10 grid content-center bg-gray-100 text-center shrink-0">
          Toa {currentWagon + 1}: Ngồi mềm điều hòa
        </div>
        <div className="mt-6 w-full flex items-center gap-6 justify-center">
          <div className="item flex items-center gap-2">
            <div className="w-6 h-6 rounded-md border-2"></div>
            Ghe Trong
          </div>

          <div className="item flex items-center gap-2">
            <div className="w-6 h-6 rounded-md border-2 bg-blue-50 border-blue-400"></div>
            Ghe Dang Chon
          </div>

          <div className="item flex items-center gap-2">
            <div className="w-6 h-6 rounded-md border-2 bg-gray-200"></div>
            Ghe Da Chon
          </div>
        </div>

        {/* choose seat */}
        {currentWagon % 3 === 0 ? (
          <SeatPlace />
        ) : currentWagon % 3 === 1 ? (
          <SeatPlaceType2 />
        ) : (
          <SeatPlaceType3 />
        )}
      </div>
    </div>
  );
};

const SeatPlace = () => {
  return (
    <div className="flex justify-between h-full items-stretch">
      <div className="px-4 mt-10 mb-10 flex-1 select-none ">
        <div className="grid grid-rows-2 grid-flow-col gap-y-8  justify-between">
          {new Array(8)
            .fill(0)
            .map((item, ind) =>
              ind % 2 === 0 ? (
                <ItemSeatOdd index={ind * 4} />
              ) : (
                <ItemSeatEven index={ind * 4} />
              )
            )}
        </div>
      </div>
      <div className="w-2 mx-1 my-14 rounded-sm overflow-hidden bg-white flex flex-col items-center justify-between">
        <div className="w-full h-20 bg-gray-300"></div>{" "}
        <div className="w-full h-20 bg-gray-300"></div>
      </div>
      <div className="px-4 mt-10 mb-10 flex-1 select-none ">
        <div className="grid grid-rows-2 grid-flow-col gap-y-8  justify-between">
          {new Array(8)
            .fill(0)
            .map((item, ind) =>
              ind % 2 === 0 ? (
                <ItemSeatOdd index={32 + ind * 4} />
              ) : (
                <ItemSeatEven index={32 + ind * 4} />
              )
            )}
        </div>
      </div>
    </div>
  );
};

const SeatPlaceType2 = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-start justify-between w-14  -mr-6 h-full  ml-4 mt-14 ">
        <div className="text-center  h-20 grid place-content-center">
          Tang 1
        </div>
        <div className="text-center  h-20 grid place-content-center">
          Tang 2
        </div>
        <div className="text-center  h-20 grid place-content-center">
          Tang 3
        </div>
      </div>
      <div className="grid  grid-flow-col  w-full h-full mx-1 mt-10 pr-4 gap-0 ">
        {new Array(7).fill(0).map((item, ind) => {
          return <GroupItemSeatType2 ind={ind * 6} />;
        })}
      </div>
    </div>
  );
};

const SeatPlaceType3 = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-start justify-between w-14  -mr-6 h-full  ml-4 mt-14 ">
        <div className="text-center  h-20 grid place-content-center">
          Tang 1
        </div>
        <div className="text-center  h-20 grid place-content-center">
          Tang 2
        </div>
      </div>
      <div className="grid  grid-flow-col  w-full h-full mx-1 mt-10 pr-4 gap-0 ">
        {new Array(7).fill(0).map((item, ind) => {
          return <GroupItemSeatType3 ind={ind * 4} />;
        })}
      </div>
    </div>
  );
};

const GroupItemSeatType2 = ({ ind }) => {
  return (
    <div className="mt-6">
      <div className="flex items-stretch h-full gap-2 mx-2  justify-around">
        <div className="relative">
          <div className="absolute w-full text-center -top-10 opacity-60">
            Khoang {ind / 6 + 1}
          </div>
          <div className="grid grid-cols-2 grid-rows-2 grid-flow-row gap-4">
            <ItemSeatType2 ind={ind + 5} />
            <ItemSeatType2 ind={ind + 6} />
            <ItemSeatType2 ind={ind + 3} />
            <ItemSeatType2 ind={ind + 4} />
            <ItemSeatType2 ind={ind + 1} />
            <ItemSeatType2 ind={ind + 2} />
          </div>
        </div>
        <div className="w-1 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};
const GroupItemSeatType3 = ({ ind }) => {
  return (
    <div className="mt-6">
      <div className="flex items-stretch h-full gap-2 mx-2  justify-around">
        <div className="relative">
          <div className="absolute w-full text-center -top-10 opacity-60">
            Khoang {ind / 4 + 1}
          </div>
          <div className="grid grid-cols-2 grid-rows-2 grid-flow-row gap-4">
            <ItemSeatType2 ind={ind + 3} />
            <ItemSeatType2 ind={ind + 4} />
            <ItemSeatType2 ind={ind + 1} />
            <ItemSeatType2 ind={ind + 2} />
          </div>
        </div>
        <div className="w-1 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};
const ItemSeatType2 = ({ ind }) => {
  const [className, setClassName] = useState();
  const [classNamesub, setClassNamesub] = useState();

  const dispatch = useDispatch();
  const handleAddSeat = () => {
    dispatch(addSeat(ind));
  };
  const { wagon, currentWagon } = useSelector(seatSelector);

  useEffect(() => {
    setClassNamesub("bg-gray-200");
    setClassName("bg-white border-2 hover:bg-gray-100");
  }, []);
  useEffect(() => {
    if (wagon[currentWagon].seat.includes(ind)) {
      setClassName(
        "bg-white border-2 border-primary bg-blue-50 bg-opacity-60 hover:bg-gray-100"
      );
      setClassNamesub("bg-primary bg-opacity-20");
    } else {
      setClassNamesub("bg-gray-200 ");
      setClassName("bg-white border-2 hover:bg-gray-100");
    }
  }, [wagon[currentWagon]]);
  return (
    <div
      onClick={handleAddSeat}
      className={`w-10 h-16 cursor-pointer relative  rounded-md grid place-content-center ${className}`}
    >
      <div
        className={`top-1 w-6 h-3 absolute left-1/2 -translate-x-1/2 rounded-sm bg-gray-200 ${classNamesub}`}
      ></div>
      {ind}
    </div>
  );
};
export default SelectSeat;
