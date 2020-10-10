
import React from 'react';
import { format, startOfWeek, addDays} from "date-fns";
import DaysWrapper from './DaysWrapper';

const Days = ({currentDate}) => {
    const dateFormat = "iii";
    console.log(dateFormat);
    const days = [];
    let startDate = startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="column" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <DaysWrapper><div className="days row">{days}</div></DaysWrapper> ;
  };

export default Days;