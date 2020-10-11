import React from 'react';
import { startOfWeek, addDays} from "date-fns";
import DaysWrapper from './DaysWrapper';
import formatDays from '../../utils/formatDays';

const Days = ({currentDate}) => {
    const days = [];
    let startDate = startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="column" key={i}>
          {formatDays(addDays(startDate, i))}
        </div>
      );
    }
    return <DaysWrapper><div className="days row">{days}</div></DaysWrapper> ;
  };

export default Days;