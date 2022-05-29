import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateFiter } from "../slices/filterTicketSlice";

const useHandleTicketRequest = (type = 0) => {
  const [startLocation, setStartLocation] = useState();
  const [endLocation, setEndLocation] = useState();
  const [dateStart, setDateStart] = useState();

  const [input, setInput] = useState();

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const [fixbug, setFixBug] = useState(0);

  const handleChangeDate = (e) => {
    // if (type === 1) {
    //   alert("hong");
    //   if (fixbug === 0) {
    //     setFixBug((prev) => prev + 1);
    //     return;
    //   }
    // }
    setDateStart(e._d.toISOString().substring(0, 10));
  };

  const dispatch = useDispatch();

  const handleSaveFilter = () => {
    dispatch(
      updateFiter({
        start: startLocation,
        input: input,
        end: endLocation,
        date: dateStart,
        filter: {},
      })
    );
  };

  useEffect(() => {}, [startLocation, input, endLocation, dateStart, dispatch]);

  return {
    startLocation,
    endLocation,
    dateStart,
    setStartLocation,
    setEndLocation,
    setDateStart,
    handleChangeDate,
    handleOnChange,
    input,
    setInput,
    handleSaveFilter,
  };
};
export default useHandleTicketRequest;
