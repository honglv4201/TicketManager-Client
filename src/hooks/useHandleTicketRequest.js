import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateFiter } from "../slices/filterTicketSlice";

const useHandleTicketRequest = () => {
  const [startLocation, setStartLocation] = useState();
  const [endLocation, setEndLocation] = useState();
  const [dateStart, setDateStart] = useState();

  const handleChangeDate = (e) => {
    setDateStart(e._d.toISOString().substring(0, 10));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateFiter({
        start: startLocation,
        end: endLocation,
        date: dateStart,
        filter: {},
      })
    );
  }, [startLocation, endLocation, dateStart, dispatch]);

  return {
    startLocation,
    endLocation,
    dateStart,
    setStartLocation,
    setEndLocation,
    setDateStart,
    handleChangeDate,
  };
};
export default useHandleTicketRequest;
