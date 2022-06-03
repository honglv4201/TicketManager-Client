import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDetectFocusInput from "../../hooks/useDetectFocusInput";
import CustomInput from "../../minusComponents/CustomInput";
import { seatSelector } from "../../redux/seatBookingSelector";
import {
  updateInfo,
  updateInfoUserBooking,
} from "../../slices/seatBookingSlice";

const InputInfoComponent = () => {
  const { wagonBooking } = useSelector(seatSelector);

  const [userBookingForm, setUserBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    identify: "",
  });

  const handleOnchange = (e) => {
    setUserBookingForm({ ...userBookingForm, [e.target.name]: e.target.value });
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
          <div className="flex items-center gap-10 mt-2 justify-items-stretch">
            <CustomInput
              name="name"
              value={userBookingForm.name}
              handleOnChange={handleOnchange}
              placeholder="Ho va Ten"
            />
            <CustomInput
              name="identify"
              value={userBookingForm.identify}
              handleOnChange={handleOnchange}
              placeholder="CMND/CCCD/GPLX"
            />
          </div>
          <div className="flex items-center gap-10">
            <CustomInput
              name="phone"
              handleOnChange={handleOnchange}
              value={userBookingForm.phone}
              placeholder="SDT"
            />
            <CustomInput
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

  const { nodeRef: nodeRef1, err, value, setValue } = useDetectFocusInput();
  const { nodeRef: nodeRef2 } = useDetectFocusInput();
  const handleOnchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setValue(e.target.value);
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
  return (
    <div className="mt-4 px-4 py-3 rounded-md border-2 pb-6 border-gray-100">
      <h3>Nguoi lon 1 </h3>
      <div className="w-[200px] h-10 bg-blue-50 rounded-md mt-4 flex items-center px-2 justify-between">
        <div className="flex items-center gap-2">
          <i class="fa-solid fa-chair"></i>Ghe 11 - Toa 1
        </div>
        {err}
        <div className="px-4 -mr-2 py-2  rounded-md hover:bg-blue-100 cursor-pointer">
          <i class="fa-solid fa-arrows-rotate"></i>
        </div>
      </div>
      <div className="flex items-center gap-10 mt-2 justify-items-stretch">
        <CustomInput
          nodeRef={nodeRef1}
          value={form.name}
          handleOnChange={handleOnchange}
          name="name"
          type="text"
          placeholder="Ho va Ten"
        />
        <CustomInput
          nodeRef={nodeRef2}
          value={form.info}
          handleOnChange={handleOnchange}
          name="info"
          type="number"
          placeholder="CMND/CCCD/GPLX"
        />
      </div>
    </div>
  );
};

export default InputInfoComponent;
