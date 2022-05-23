import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTrip } from "../../slices/tripSlice";
import FilterSearch from "./filterSearch";
import ListItemTicket from "./ListItemTicket";
import SearchHeader from "./SearchHeader";

const TicketPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrip());
  }, []);
  return (
    <div>
      <SearchHeader />
      <div className="page-container mt-4">
        <div className="flex gap-10">
          <FilterSearch />
          <ListItemTicket />
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
