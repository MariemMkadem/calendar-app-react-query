import React, { useState } from "react";
import { addWeeks,subWeeks ,startOfWeek, endOfWeek } from "date-fns";
import { faChevronLeft , faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarWrapper from "./CalendarWrapper";
import Cells from "../Cells";
import Days from "../Days";
import formatDateHeader from '../../utils/formatDateHeader';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

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
        <Days currentDate={currentDate} />
        <Cells selectedDate={selectedDate} setSelectedDate={setSelectedDate} currentDate={currentDate} />
      </div>
    </CalendarWrapper>
  );
};

export default Calendar;
