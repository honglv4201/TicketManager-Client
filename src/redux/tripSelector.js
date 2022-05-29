import { createSelector } from "@reduxjs/toolkit";
import { everywhere } from "../utils/constValue";

export const tripSelector = (state) => state.trip.trip;
export const filterSelector = (state) => state.filter;

export const tripFilterSelector = createSelector(
  tripSelector,
  filterSelector,
  (trip, filter) => {
    return trip.filter((trip) => {
      return (
        (trip.route.startLocation === filter.start ||
          filter.start === everywhere) &&
        (trip.route.endLocation === filter.end || filter.end === everywhere)
      );
    });
  }
);
