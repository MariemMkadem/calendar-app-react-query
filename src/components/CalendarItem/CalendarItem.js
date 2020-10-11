/* eslint-disable no-loop-func */
import React from "react";
import {
  startOfWeek,
  addDays,
  startOfMonth,
  endOfWeek,
  parse,
  isSameMonth,
  isSameDay,
} from "date-fns";
import formatDateDays from "../../utils/formatDateDays";
import formatDateDaysCell from "../../utils/formatDateDaysCell";

const Cells = ({ selectedDate, setSelectedDate, currentDate }) => {
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
          onClick={() => setSelectedDate(parse(day))}
        >
          <span className="letter">{formatDateDaysCell(day)}</span>
          <span className="number">{formatDateDays(day)}</span>
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

export default Cells;
