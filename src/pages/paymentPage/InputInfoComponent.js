import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDetectFocusInput from "../../hooks/useDetectFocusInput";
import CustomInput from "../../minusComponents/CustomInput";
import { seatSelector } from "../../redux/seatBookingSelector";

import { Select } from "antd";
import {
  updateInfo,
  updateInfoUserBooking,
} from "../../slices/seatBookingSlice";
import useClickOutSide from "../../hooks/useClickOutSide";

const { Option } = Select;
const InputInfoComponent = () => {
  const { wagonBooking } = useSelector(seatSelector);

  const [userBookingForm, setUserBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    identify: "",
  });
  const { nodeRef, err, setValue } = useDetectFocusInput("name");
  const {
    nodeRef: nodeRefIdentify,
    err: errIdentify,
    setValue: setValueIdentify,
  } = useDetectFocusInput("identify");

  const {
    nodeRef: nodeRefEmail,
    err: errEmail,
    setValue: setValueEmail,
  } = useDetectFocusInput("email");

  const {
    nodeRef: nodeRefPhoneNumber,
    err: errPhoneNumber,
    setValue: setValuePhoneNumber,
  } = useDetectFocusInput("phoneNumber");

  const handleOnchange = (e) => {
    setUserBookingForm({ ...userBookingForm, [e.target.name]: e.target.value });
    if (e.target.name === "name") {
      setValue(e.target.value);
    }
    if (e.target.name === "email") {
      setValueEmail(e.target.value);
    }
    if (e.target.name === "phone") {
      setValuePhoneNumber(e.target.value);
    }
    if (e.target.name === "identify") {
      setValueIdentify(e.target.value);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateInfoUserBooking({
        name: userBookingForm.name,
        email: userBookingForm.email,
        phone: userBookingForm.phone,
        identify: userBookingForm.identify,
        idUser:
          JSON.parse(localStorage.getItem("ticket-user"))?.user?._id || null,
      })
    );
  }, [
    userBookingForm.name,
    userBookingForm.email,
    userBookingForm.phone,
    userBookingForm.identify,
    dispatch,
  ]);

  return (
    <div className="mb-10">
      <h1 className="text-lg">NHẬP THÔNG TIN HÀNH KHÁCH: </h1>
      <div className="list w-full">
        {wagonBooking &&
          wagonBooking?.listUserTicket.map((item, ind) => (
            <ItemCustomer key={ind} ind={ind} />
          ))}
      </div>

      <h1 className="text-lg uppercase mt-10">NHẬP THÔNG TIN người đặt: </h1>
      <div className="mt-1 opacity-70">
        * Vui lòng nhập đúng thông tin để nhận thông tin vé
      </div>
      <div className="list w-full">
        <div className="mt-8 px-4 py-3 flex flex-col gap-4 rounded-md border-2 pb-8 border-gray-100">
          <div
            className={`flex items-center gap-10 mt-2 justify-items-stretch ${
              (err || errIdentify) && "pb-8"
            }`}
          >
            <CustomInput
              nodeRef={nodeRef}
              name="name"
              err={err}
              value={userBookingForm.name}
              handleOnChange={handleOnchange}
              placeholder="Ho va Ten"
            />
            <CustomInput
              type="number"
              nodeRef={nodeRefIdentify}
              err={errIdentify}
              name="identify"
              value={userBookingForm.identify}
              handleOnChange={handleOnchange}
              placeholder="CMND/CCCD/GPLX"
            />
          </div>
          <div
            className={`flex items-center gap-10 ${
              (errPhoneNumber || errEmail) && "pb-8"
            }`}
          >
            <CustomInput
              nodeRef={nodeRefPhoneNumber}
              err={errPhoneNumber}
              name="phone"
              handleOnChange={handleOnchange}
              value={userBookingForm.phone}
              placeholder="SDT"
              type="number"
            />
            <CustomInput
              nodeRef={nodeRefEmail}
              err={errEmail}
              name="email"
              handleOnChange={handleOnchange}
              value={userBookingForm.email}
              placeholder="Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemCustomer = ({ ind }) => {
  const [form, setForm] = useState({
    name: "",
    info: "",
  });
  const { show, setShow, nodeRef } = useClickOutSide(".modal");
  const [typeTicket, setTypeTicket] = useState("Người lớn");

  const { nodeRef: nodeRef1, err, value, setValue } = useDetectFocusInput();
  const {
    nodeRef: nodeRef2,
    err: err2,
    value: value2,
    setValue: setValue2,
  } = useDetectFocusInput("identify");
  const handleOnchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setValue(e.target.value);

    if (e.target.name === "info") {
      setValue2(e.target.value);
    }
  };
  const handleOnChangeName = (e) => {
    setForm({ ...form, name: e.target.value });
  };
  const handleOnChangeInfo = (e) => {
    setForm({ ...form, info: e.target.value });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateInfo({
        name: form.name,
        info: form.info,
        index: ind,
      })
    );
  }, [form.name, form.info, ind, dispatch]);

  // err
  const [isErr, setIsErr] = useState(false);
  useEffect(() => {
    setIsErr(true && err);
  }, [err]);
  return (
    <div className="mt-4 px-4 py-3 rounded-md border-2 pb-6 border-gray-100">
      <h3
        ref={nodeRef}
        className="flex border-gray-100 border-1  hover:bg-gray-100 w-fit px-4 py-1 rounded-sm cursor-pointer items-center gap-2 relative"
      >
        <span onClick={() => setShow(true)}> {typeTicket}</span>
        <i onClick={() => setShow(true)} class="fa-solid fa-angle-down"></i>
        {show && (
          <PickerTypeTicket
            onClose={() => setShow(false)}
            setType={setTypeTicket}
          />
        )}
      </h3>

      {/* <Select
        defaultValue="Người lớn"
        style={{
          width: 120,
          border: 4,
        }}
      >
        <Option value="Người lớn">Người lớn</Option>
        <Option value="Học Sinh">Học Sinh</Option>

        <Option value="Trẻ em">Trẻ em</Option>
      </Select> */}
      <div className="w-[200px] h-10 bg-blue-50 rounded-md mt-4 flex items-center px-2 justify-between">
        <div className="flex items-center gap-2">
          <i class="fa-solid fa-chair"></i>Ghe 11 - Toa 1
        </div>

        <div className="px-4 -mr-2 py-2  rounded-md hover:bg-blue-100 cursor-pointer">
          <i class="fa-solid fa-arrows-rotate"></i>
        </div>
      </div>
      <div
        className={`flex items-center gap-10 mt-2 justify-items-stretch ${
          (err || err2) && "pb-6"
        }`}
      >
        <span className="absolute">{value}</span>
        <CustomInput
          nodeRef={nodeRef1}
          value={value}
          handleOnChange={handleOnchange}
          name="name"
          type="text"
          placeholder="Ho va Ten"
          err={err}
        />
        <CustomInput
          nodeRef={nodeRef2}
          value={form.info}
          handleOnChange={handleOnchange}
          name="info"
          type="number"
          err={err2}
          placeholder="CMND/CCCD/GPLX"
        />
      </div>
    </div>
  );
};

const PickerTypeTicket = ({ setType, onClose }) => {
  const handlePick = (type) => {
    onClose();
    setType(type);
  };
  return (
    <div className="absolute modal mt-2 z-30 border-2 border-gray-50 top-full left-0 min-w-[160px] h-fit rounded-md bg-white shadow-lg">
      <div
        onClick={() => handlePick("Người lớn")}
        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
      >
        Người lớn
      </div>
      <div
        onClick={() => handlePick("Học Sinh / Sinh Viên")}
        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
      >
        Học sinh / Sinh viên
      </div>
      <div
        onClick={() => handlePick("Trẻ em")}
        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
      >
        Trẻ em
      </div>
    </div>
  );
};

export default InputInfoComponent;
