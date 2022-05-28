import GroupItemSeatType2 from "./GroupItemSeatType2.js";

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
export default SeatPlaceType2;
