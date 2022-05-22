import { useState } from "react";
const useHandleOnChange = (initState) => {
  const [formValue, setFormValue] = useState({});

  const handleOnChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formValue,
    setFormValue,
    handleOnChange,
  };
};

export default useHandleOnChange;
