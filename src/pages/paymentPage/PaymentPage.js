import React, { Fragment, useEffect, useState } from "react";

import { Steps } from "antd";
import { Link } from "react-router-dom";
import { checkDark } from "../../utils/darkMode";
import { useDispatch, useSelector } from "react-redux";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  checkSeat,
  addSeat,
  setCurrentWagon,
  setInitWagon,
  removeSeat,
} from "../../slices/seatBookingSlice";
import { seatSelector } from "../../redux/seatBookingSelector";

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
    <div className="dark:!bg-dark_primary_bg">
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

const ChoosingSeatGeneral = ({ isOpenTab, handleToggleOpenTab }) => {
  return (
    <div
      className={`${
        isOpenTab ? "w-[500px] " : "w-[130px] absolute right-0 top-0"
      } min-h-[130px] bg-white rounded-lg overflow-hidden transition-all duration-75`}
    >
      <div
        className="w-full h-6 bg-gray-200 bg-opacity-80 text-center py-6 flex items-center gap-2 justify-center cursor-pointer"
        onClick={handleToggleOpenTab}
      >
        <i
          class={`fa-solid fa-angle-left transition-all duration-100 ${
            isOpenTab ? "rotate-180" : ""
          }`}
        ></i>
        {isOpenTab ? (
          " Chi tiết vé"
        ) : (
          <div>
            <span className="opacity-60 text-sm">Đã chọn :</span>{" "}
            <span className="ml-1">1/2</span>
          </div>
        )}
      </div>

      {isOpenTab && <TickeChoosing />}
      {!isOpenTab && <TotalMoney />}
    </div>
  );
};

const TotalMoney = () => {
  return (
    <div className="grid place-content-center w-full h-full flex-1 mt-4 pt-1">
      <div className="flex flex-col">
        <span className="opacity-80">Tổng tiền:</span>
        <span className="text-primary font-bold">974.000 vnd</span>
      </div>
    </div>
  );
};

const TickeChoosing = () => {
  const { wagon, currentWagon } = useSelector(seatSelector);

  const checkTotalTicket = () => {
    let totalTicket = 0;

    for (let i = 0; i < wagon.length; i++) {
      totalTicket += wagon[i].seat.length;
    }
    return totalTicket;
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
          {wagon.map((item, index) => {
            return (
              wagon[index].seat &&
              wagon[index].seat.map((item, ind) => (
                <ItemSeatDetail data={{ seat: item, wagon: index }} key={ind} />
              ))
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
          >
            Thanh Toán
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemSeatDetail = ({ data: { seat, wagon } }) => {
  const dispatch = useDispatch();
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
        <span className="font-bold ">713.000 vnd</span>
        <div
          onClick={handleRemoveItem}
          className="btn px-2 py-1 rounded-md border hover:bg-gray-200 cursor-pointer"
        >
          Bỏ chọn
        </div>
      </div>
    </div>
  );
};

const SumaryResultTicket = () => {
  return (
    <div className="flex-1 min-w-[300px] min-h-[400px] rounded-lg dark:!opacity-90 dark:!text-white  bg-white dark:!bg-dark_primary_pnl flex-col ">
      <div className="flex justify-center mt-4 text-center">
        <div className="flex items-center gap-1 w-fit ">
          <div className="flex flex-col gap-1 text-sm">
            <span className="time-start">12:00 AM</span>
            <span className="font-bold opacity-90">Ga Da Nang</span>
          </div>
          <div className="flex flex-col gap-1 items-center text-sm">
            <div className="w-[100px] border-dotted border-b-2"></div>
            <span>13 gio</span>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <span className="time-start">04:30 PM</span>
            <span className="font-bold opacity-90">Ga Sai Gon</span>
          </div>
        </div>
      </div>

      <div className="flex mt-4 justify-center dark:!text-white ">
        <div className="px-4 transport-image max-w-[280px] max-h-[280px] overflow-hidden ">
          <img
            className="w-full h-full rounded-lg dark:opacity-75"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Tile_Hill_train_727.jpg/640px-Tile_Hill_train_727.jpg"
            alt="tau_image"
          />
        </div>
      </div>

      <div className="flex gap-1 mt-2 items-center ml-10 dark:!text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#FFCC00"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>

        <span className="opacity-80 text-sm">4.8</span>
        <span className="opacity-50 text-sm">(23 rates)</span>
      </div>

      <div className="flex flex-col ml-10 mt-2 dark:!text-white ">
        <div className="flex gap-4">
          <div className="block border-r-2 border-r-gray-200  mt-2 pr-4">
            <div className="text-sm opacity-50">Ngay Di</div>
            <div className="text-sm opacity-90">30/4/2022</div>
          </div>
          <div className="block">
            <div className="text-sm opacity-50 mt-2">So luong</div>
            <div className="text-sm  opacity-90">2 nguoi</div>
          </div>
        </div>
      </div>

      <div className="text-lg font-bold opacity-80 mt-4 px-10">Summary</div>
      <div className="mt-2 flex flex-col gap-3 px-7 text-sm dark:!text-white ">
        <div className="item flex justify-between px-3">
          <div className="opacity-60">3x passenger</div>
          <div className="font-bold">480.000 vnd</div>
        </div>
        <div className="item flex justify-between px-3">
          <div className="opacity-60">Tax and fee</div>
          <div className="font-bold">1.240.000 vnd</div>
        </div>
        <div className="item flex justify-between px-3">
          <div className="opacity-60">Services</div>
          <div className="font-bold">100.000 vnd</div>
        </div>
        <div className="item flex justify-between bg-gray-100 dark:!bg-opacity-10 dark:!text-white rounded-lg py-2 px-3 ">
          <div className="opacity-60">Total</div>
          <div className="font-bold">1.590.000 vnd</div>
        </div>

        <Link
          to="/"
          className="px-4 py-[12px] rounded-lg bg-primary text-white text-center mt-3 mb-10"
        >
          Pay
        </Link>
      </div>
    </div>
  );
};

const CreditCard = () => {
  return (
    <div className="creadit-card">
      <h3 className="mb-3 dark:text-white">Credit Cards</h3>
      {/* method paying */}
      <div className="flex gap-4 ">
        <div className="item cursor-pointer bg-white dark:!bg-dark_secondary_pnl shadow-md  rounded-lg min-w-[140px] min-h-[50px]">
          <label className="method-item w-full h-full cursor-pointer ">
            <input type="radio" className="" name="credit-method" />
            <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute bg-white  rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                viewBox="0 0 20 20"
                fill="#00CC17"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="w-12 h-12">
                {" "}
                <img
                  className="w-full h-full object-contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png"
                  alt=""
                />
              </div>
            </div>
          </label>
        </div>

        <div className="item bg-white dark:!bg-dark_secondary_pnl shadow-md  rounded-lg min-w-[130px] min-h-[54px]">
          <label className="method-item w-full h-full cursor-pointer ">
            <input type="radio" className="" name="credit-method" />
            <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute bg-white rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                viewBox="0 0 20 20"
                fill="#00CC17"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="w-12 h-12">
                {" "}
                <img
                  className="w-full h-full object-contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
                  alt=""
                />
              </div>
            </div>
          </label>
        </div>

        <div className="item bg-white shadow-md dark:!bg-dark_secondary_pnl rounded-lg min-w-[130px] min-h-[54px]">
          <label className="method-item w-full h-full  cursor-pointer">
            <input type="radio" className="" name="credit-method" />
            <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute bg-white rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                viewBox="0 0 20 20"
                fill="#00CC17"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="w-10 h-10">
                {" "}
                <img
                  className="w-full h-full object-contain"
                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1458245625/pwegh6kadcb37kuz0woj.png"
                  alt=""
                />
              </div>
            </div>
          </label>
        </div>

        <div className="item bg-white shadow-md  dark:!bg-dark_secondary_pnl rounded-lg min-w-[130px] min-h-[54px]">
          <label className="method-item w-full h-full  cursor-pointer">
            <input type="radio" className="" name="credit-method" />
            <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute bg-white rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                viewBox="0 0 20 20"
                fill="#00CC17"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="w-12 h-12">
                {" "}
                <img
                  className="w-full h-full object-contain"
                  src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png"
                  alt=""
                />
              </div>
            </div>
          </label>
        </div>
      </div>

      <div className="mt-10 w-full bg-white dark:!bg-dark_primary_pnl rounded-lg">
        <div className="opacity-80 mb-2 dark:text-white">Name Card</div>
        <input
          type="text"
          className="w-full outline-none px-3 py-[10px] rounded-md bg-gray-100 border border-gray-200  dark:!bg-dark_input  dark:!border-gray-800 dark:text-white "
        />
        <div className="flex gap-4 mt-4">
          <div className="item flex-[3]">
            <div className="opacity-80 mb-2 dark:text-white">Card Number</div>
            <input
              type="text"
              className="w-full outline-none px-3 py-[10px]  rounded-md bg-gray-100 dark:!bg-dark_input border dark:!border-gray-800 dark:text-white  border-gray-200 "
            />
          </div>
          <div className="item">
            <div className="opacity-80 mb-2 dark:text-white">CCV</div>
            <input
              type="text"
              className="w-full outline-none px-3 py-[10px] rounded-md bg-gray-100 border border-gray-200 dark:!bg-dark_input  dark:!border-gray-800 dark:text-white  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

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
          Toa 1: Ngồi mềm điều hòa
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
        <div className="flex justify-between h-full items-stretch">
          <div className="px-4 mt-10 flex-1 mb-10 grid grid-rows-2  grid-flow-col gap-y-8 select-none  justify-between ">
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
          <div className="w-2 mx-1 my-14 rounded-sm overflow-hidden bg-white flex flex-col items-center justify-between">
            <div className="w-full h-20 bg-gray-300"></div>{" "}
            <div className="w-full h-20 bg-gray-300"></div>
          </div>
          <div className="px-4 mt-10 flex-1 mb-10 grid grid-rows-2  grid-flow-col gap-y-8 select-none  justify-between">
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
    </div>
  );
};

const ItemSeat = ({ value, status = "" }) => {
  const [className, setClassName] = useState();
  const [classNamesub, setClassNamesub] = useState();
  // if (status === "choosen") {
  //   classNamesub = "bg-gray-200";
  //   className = "bg-gray-200 border-2";
  // }
  // if (status === "active") {
  //   classNamesub = "bg-primary bg-opacity-20 border-primary";
  //   className = "bg-primary bg-opacity-20 border-primary border-2";
  // }

  const dispatch = useDispatch();
  const handleAddSeat = (ind) => {
    dispatch(addSeat(ind));
  };
  const handleCheckChoosing = (ind) => {
    dispatch(checkSeat(ind));
  };

  const { wagon, currentWagon } = useSelector(seatSelector);

  useEffect(() => {
    setClassName("bg-white  border-2 ");
    setClassNamesub("bg-white");
    // if (handleCheckChoosing(value)) {
    //   setClassName("bg-gray-200 border-2");
    //   setClassNamesub("bg-gray-200");
    // }
  }, []);

  const handleCheckSeat = () => {
    if (wagon[currentWagon].seat.includes(value)) {
      setClassNamesub("bg-primary bg-opacity-20 border-primary");
      setClassName(
        "bg-primary bg-opacity-20 border-primary border-2 hover:bg-white"
      );
    } else {
      setClassName("bg-white  border-2 ");
      setClassNamesub("bg-white");
    }
  };
  useEffect(() => {
    handleCheckSeat();
  }, [wagon[currentWagon].seat]);
  return (
    <div
      className="flex flex-col items-start gap-[3px] "
      onClick={() => handleAddSeat(value)}
    >
      <div className={`w-6 h-2 rounded-md border ${classNamesub}`}></div>
      <div
        className={`w-10 h-10 rounded-md text-center flex items-center justify-center cursor-pointer hover:bg-gray-300 ${className}`}
      >
        {value}
      </div>
      <div className={`w-6 h-2 rounded-md border ${classNamesub}`}></div>
    </div>
  );
};
const ItemSeatOdd = ({ index }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <ItemSeat value={index + 1} />
        <ItemSeat value={index + 2} />
      </div>
      <div className="flex flex-col gap-3">
        <ItemSeat value={index + 3} />
        <ItemSeat value={index + 4} />
      </div>
    </>
  );
};

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
const ItemWagon = ({ active, ind }) => {
  let className = active ? "border-primary bg-blue-50" : "";
  const dispatch = useDispatch();
  const handleActiveWagon = () => {
    dispatch(setCurrentWagon(ind));
  };

  const { wagon } = useSelector(seatSelector);

  if (wagon[ind]?.seat?.length > 0 && !active) {
    className += " bg-red-50";
  }

  return (
    <div
      onClick={handleActiveWagon}
      className={`min-w-[160px] h-14 rounded-md border-2 border-t-8 text-[11px] opacity-90 grid content-center cursor-pointer hover:scale-105 duration-75 transition-transform ${className}`}
    >
      <span className="px-2"> Toa {ind + 1}: Ngồi mềm điều hòa</span>
    </div>
  );
};
