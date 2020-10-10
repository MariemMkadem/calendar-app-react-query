import React from "react";

import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfWeek,
  parse,
  isSameMonth,
  isSameDay,
} from "date-fns";

const Cells = ({selectedDate,setSelectedDate, currentDate}) => {
  const monthStart = startOfMonth(currentDate);
  const startDate = startOfWeek(currentDate);
  const endDate = endOfWeek(currentDate);
  const dateFormatDays = "d";
  const dateFormatDaysCell = "eeeee";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  let formattedDateCells = "";
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormatDays);
      formattedDateCells= format(day,dateFormatDaysCell);
      const cloneDay = day;
      const onDateClick = (day) => {
        setSelectedDate(day);
      };
      days.push(
        <div
          className={`column cell ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isSameDay(day, selectedDate)
              ? "selected"
              : ""
          }`}
          key={day}
          onClick={() => onDateClick(parse(cloneDay))}
        >
           <span className="letter">{formattedDateCells}</span>
          <span className="number">{formattedDate}</span>
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
