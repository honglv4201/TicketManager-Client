import { useEffect, useRef, useState } from "react";

export default function useClickOutSide() {
  const [show, setShow] = useState(false);
  const nodeRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (nodeRef.current && nodeRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
