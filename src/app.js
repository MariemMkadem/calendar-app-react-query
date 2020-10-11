import React from 'react';
import Calendar from "./components/Calendar";
import Events from './components/Events';

function Home() {
  return (
    <div>
        <Calendar />
        <Events /> 
    </div>
  );
}

export default Home;
