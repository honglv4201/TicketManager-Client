import React, { useEffect, useState } from "react";

import { Steps } from "antd";
import { checkDark } from "../../utils/darkMode";
import { useDispatch } from "react-redux";

import { setInitWagon } from "../../slices/seatBookingSlice";
import SelectSeat from "./choosingSeat/SelectSeat";
import TickeChoosing from "./choosingSeat/TicketChoosing";
import ChoosingSeatGeneral from "./choosingSeat/ChoosingSeatGeneral";

const PaymentPage = () => {
  const [timeRemain, setTimeRemain] = useState(180);
  const { Step } = Steps;
  const isDark = checkDark();
  useEffect(() => {}, []);

  useEffect(() => {
    setTimeout(() => {
      setTimeRemain(timeRemain - 1);
    }, 1000);
  });

  const [isOpenTab, setIsOpenTab] = useState(false);
  const handleToggleOpenTab = () => {
    setIsOpenTab((prev) => !prev);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitWagon(9));
  }, []);
  return (
    <div className="dark:!bg-dark_primary_bg select-none">
      <div className="flex relative gap-4 mt-4 mx-8 px-0 lg:flex-col">
        {/* left pannel general info */}
        <div className="flex flex-col min-w-[900px]">
          <div className={`${!isOpenTab ? "mr-[150px]" : ""}`}>
            <div className=" min-h-[60px] flex items-center   dark:!bg-dark_primary_pnl rounded-lg bg-white shadow-sm ">
              <div className="flex justify-between h-full w-full items-center px-8 ">
                <span className="text-lg opacity-80 font-bold dark:text-white">
                  Payment Options
                </span>
                <div className="flex gap-1 dark:text-white">
                  <span className="opacity-50">
                    The session will exprire in:
                  </span>
                  <span className="text-blue-500 dark:!text-white ">{`${timeRemain}s`}</span>
                </div>
              </div>
            </div>
            <div
              className={`payment-process  dark:!text-white min-h-[60px] rounded-lg bg-white dark:!bg-dark_primary_pnl mt-2 shadow-sm grid ${
                isDark ? "dark" : ""
              }`}
            >
              <div className="flex justify-between h-full items-center  px-8">
                <Steps size="small" className="dark:!text-white" current={0}>
                  <Step className="dark:text-white" title="Select Set" />
                  <Step title="Information" />
                  <Step title="Payment" />
                </Steps>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white min-h-[400px] dark:!bg-dark_primary_pnl mt-4 px-10 pt-5">
            <SelectSeat />
          </div>
        </div>

        {/* right pannel general info */}
        <ChoosingSeatGeneral
          isOpenTab={isOpenTab}
          setIsOpenTab={setIsOpenTab}
          handleToggleOpenTab={handleToggleOpenTab}
        />
      </div>
    </div>
  );
};

export default PaymentPage;
