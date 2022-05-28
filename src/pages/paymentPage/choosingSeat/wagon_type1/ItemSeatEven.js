import ItemSeat from "./ItemSeat";
import React from "react";

const ItemSeatEven = ({ index }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <ItemSeat value={index + 4} />
        <ItemSeat value={index + 3} />
      </div>
      <div className="flex flex-col gap-3">
        <ItemSeat value={index + 2} />
        <ItemSeat value={index + 1} />
      </div>
    </>
  );
};

export default ItemSeatEven;
