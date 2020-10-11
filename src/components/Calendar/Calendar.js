import React, { useState } from "react";
import { addWeeks,subWeeks ,startOfWeek, endOfWeek , addDays } from "date-fns";
import { faChevronLeft , faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarWrapper from "./CalendarWrapper";
import CalendarItem from "../CalendarItem";
import formatDateHeader from '../../utils/formatDateHeader';
import formatDays from "../../utils/formatDays";


const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="column" key={i}>
        {formatDays(addDays(startOfWeek(currentDate), i))}
      </div>
    );
  }

  return (
    <CalendarWrapper>
      <p style={{"text-align": "center"}}>Le <strong>règlement des cours</strong> se fait directement <strong>sur place au studio</strong> ou en ligne pour les cours en visio</p>
      <div className="calendar">
        <div className="header row">
          <div className="column">
            <div className="icon" onClick={()=> setCurrentDate(subWeeks(currentDate, 1))}>
            <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </div>
          <div className="column">
             <span> Sun. {formatDateHeader(startOfWeek(currentDate))} - Sat {formatDateHeader(endOfWeek(currentDate))}    </span>
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
