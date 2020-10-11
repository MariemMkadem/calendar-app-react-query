import React, {useState} from 'react';
import Calendar from "./components/Calendar";
import OfferList from './screens/OfferList';

function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div>
        <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <OfferList currentDate={currentDate} /> 
    </div>
  );
}

export default Home;
