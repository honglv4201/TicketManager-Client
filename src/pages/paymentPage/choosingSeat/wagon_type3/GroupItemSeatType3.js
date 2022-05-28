import ItemSeatType2 from "./ItemSeatType2";

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

export default GroupItemSeatType3;
