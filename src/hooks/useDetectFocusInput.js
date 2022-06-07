import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { seatSelector } from "../redux/seatBookingSelector";

const useDetectFocusInput = (type = "name") => {
  const nodeRef = useRef();
  const focusRef = useRef(false);
  const [err, setErr] = useState("");
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState();

  const { wagonBooking } = useSelector(seatSelector);
  useEffect(() => {
    console.log("bookingchange", wagonBooking.continueStatus);
    if (wagonBooking.continueStatus === "missing") checkValue();
  }, [wagonBooking.continueStatus]);
  const checkValue = () => {
    //checkname
    if (!value || value.length < 1) {
      setErr("* Vui Lòng nhập trường này");
    }
    if (type === "name") {
      console.log(value);
      const nameList = value?.split(" ");
      console.log(nameList);
      if (nameList?.length < 2) {
        setErr("Vui lòng nhập đúng họ tên");
        return false;
      }

      if (nameList?.length >= 2 && nameList[1]?.length < 2) {
        setErr("Vui lòng nhập đúng họ tên");
        return false;
      }
      return true;
    } else if (type === "identify") {
      if (value?.length < 9 || value?.length > 11) {
        setErr("Vui lòng nhập đúng CMND/CCCD");
        return false;
      }
      return true;
    } else if (type === "phoneNumber") {
      if (
        value?.length > 12 ||
        value?.length < 8 ||
        (value?.length > 1 && value[0] !== "0")
      ) {
        setErr("Vui lòng nhập đúng Số điện thoại");
        return false;
      }
    } else if (type === "email") {
      if (
        !String(value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        setErr("Vui lòng nhập đúng Email");
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    const handleClickOutSite = (e) => {
      if (nodeRef.current && nodeRef.current.contains(e.target)) {
        console.log("hong");
        setErr("");
        focusRef.current = true;
      } else if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        if (focusRef.current) {
          console.log("out", value);
          if (checkValue(value)) {
            setErr("");
          }
          focusRef.current = false;
        }
      }
    };
    document.addEventListener("click", handleClickOutSite);
    return () => {
      document.removeEventListener("click", handleClickOutSite);
    };
  }, [value]);
  return {
    nodeRef,
    err,
    value,
    setValue,
  };
};

export default useDetectFocusInput;
