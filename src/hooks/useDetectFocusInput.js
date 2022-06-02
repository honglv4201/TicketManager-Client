import { useEffect, useRef, useState } from "react";

const useDetectFocusInput = () => {
  const nodeRef = useRef();
  const focusRef = useRef(false);
  const [err, setErr] = useState("");
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState();

  const checkname = () => {
    console.log(value);
    const nameList = value?.split(" ");
    console.log(nameList);
    if (nameList?.length < 2) {
      return false;
    } else return true;
  };
  useEffect(() => {
    const handleClickOutSite = (e) => {
      if (nodeRef.current && nodeRef.current.contains(e.target)) {
        console.log("hong");
        setErr("");
        focusRef.current = true;
      } else if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        if (focusRef.current) {
          console.log("out");
          if (!checkname(value)) {
            setErr("ten khong dung dinh dang");
          } else {
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
  }, []);
  return {
    nodeRef,
    err,
    value,
    setValue,
  };
};

export default useDetectFocusInput;
