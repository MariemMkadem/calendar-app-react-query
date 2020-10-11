/* eslint-disable no-loop-func */
import React from "react";
import {
  startOfWeek,
  addDays,
  startOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isSameDay,
} from "date-fns";

const CalendarItem = ({ selectedDate, setSelectedDate, currentDate }) => {
  const rows = [];
  let days = [];
  let day = startOfWeek(currentDate);
  while (day <= endOfWeek(currentDate)) {
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          className={`column cell ${
            !isSameMonth(day, startOfMonth(currentDate))
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : ""
          }`}
          key={day}
          onClick={() => setSelectedDate(day)}
        >
          <span className="letter">{format(day, 'eeeee')}</span>
          <span className="number">{format(day,'d')}</span>
        </div>
   
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};

export default CalendarItem;
