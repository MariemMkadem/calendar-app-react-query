import React, { useState } from "react";
import { addWeeks,subWeeks ,startOfWeek, endOfWeek , addDays , format} from "date-fns";
import { faChevronLeft , faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarWrapper from "./CalendarWrapper";
import CalendarItem from "../CalendarItem";

const Calendar = ({currentDate, setCurrentDate}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="column" key={i}>
        {format(addDays(startOfWeek(currentDate), i), 'iii')}
      </div>
    );
  }

  return (
    <CalendarWrapper>
      <p style={{"text-align": "center"}}>The <strong>course payment</strong> is made directly <strong>on site at the studio</strong> oronline for video lessons</p>
      <div className="calendar">
        <div className="header row">
          <div className="column">
            <div className="icon" onClick={()=> setCurrentDate(subWeeks(currentDate, 1))}>
            <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </div>
          <div className="column">
             <span> Sun. {format(startOfWeek(currentDate),'dd/M')} - Sat {format(endOfWeek(currentDate),'dd/M')}    </span>
          </div>
          <div className="column">
            <div className="icon" onClick={()=> setCurrentDate(addWeeks(currentDate, 1))}>
            <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
        <div className="days row">{days}</div>
        <CalendarItem selectedDate={selectedDate} setSelectedDate={setSelectedDate} currentDate={currentDate} />
      </div>
    </CalendarWrapper>
  );
};

export default Calendar;
