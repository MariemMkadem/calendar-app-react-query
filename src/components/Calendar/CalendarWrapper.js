import styled from "styled-components";

const CalendarWrapper = styled.div`

padding: 24px;

  /* GENERAL */
  * {
    box-sizing: border-box;
  }
  /* GRID */
  .row {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
  }

  /* Calendar */
  .calendar {
    display: block;
    position: relative;
    width: 66%;
    background: white;
    height: auto;
    margin: 0 auto; 
   .header {
    font-weight: 700;
    font-size: 115%;
    padding: 1.5em 0;
    .column {
    flex-grow: 1;
    max-width: 100%;
    span{
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    }
  }
    .icon {
    cursor: pointer;
    transition: 0.15s ease-out;
    font-style: normal;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
  }
    .icon:hover {
    transform: scale(1.75);
    transition: 0.25s ease-out;
  }
    .icon:first-of-type {
    margin-left: 1em;
  }
     .icon:last-of-type {
    margin-right: 1em;
  }
  }

  }

  .cell {
    margin-top: 5px;
    position: relative;
    height: 6em;
    cursor: pointer;
    background: white;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center

  }
  .cell:hover {
    background: whitesmoke;
    transition: 0.5s ease-out;
  }
   .selected {
    border: 1px solid gray;
    border-radius: 8px;
  }

  .calendar .body .row:last-child {
    border-bottom: none;
  }

  .calendar .body .cell .number {
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: 0.00938em;
  }

  .calendar .body .disabled {
    color: lightgray;
    pointer-events: none;
  }
  .calendar .body .cell .bg {
    font-weight: 700;
    line-height: 1;
    opacity: 0;
    font-size: 5em;
    position: absolute;
    top: -0.2em;
    right: -0.05em;
    transition: 0.25s ease-out;
    letter-spacing: -0.07em;
  }
  .calendar .body .cell:hover .bg,
  .calendar .body .selected .bg {
    opacity: 0.2;
    transition: 0.5s ease-in;
  }
  .calendar .body .column {
    flex-grow: 0;
    flex-basis: calc(100% / 7);
    width: calc(100% / 7);
  }
`;

export default CalendarWrapper;
