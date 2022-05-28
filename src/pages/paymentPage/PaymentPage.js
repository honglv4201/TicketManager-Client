import React, { useEffect, useState } from "react";

import { checkDark } from "../../utils/darkMode";
import { useDispatch } from "react-redux";

import { setInitWagon } from "../../slices/seatBookingSlice";
import ChoosingTicket from "./childPage/ChoosingTicket";
import Payment from "./childPage/Payment";
import InputInfo from "./childPage/InputInfo";

const PaymentPage = () => {
  const isDark = checkDark();
  useEffect(() => {}, []);

  const [process, SetProcess] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitWagon(9));
  }, []);
  return (
    <div className="dark:!bg-dark_primary_bg select-none">
      <ComponentProcess process={process} SetProcess={SetProcess} />
    </div>
  );
};
const ComponentProcess = ({ process, SetProcess }) => {
  if (process === 0) {
    return <ChoosingTicket SetProcess={SetProcess} />;
  }
  if (process === 2) {
    return <Payment SetProcess={SetProcess} />;
  }

  if (process === 1) {
    return <InputInfo SetProcess={SetProcess} />;
  }
};

export default PaymentPage;
