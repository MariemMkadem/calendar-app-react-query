import styled from "styled-components";

const DaysWrapper = styled.div`
  .row {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .days {
    text-transform: uppercase;
    font-weight: 400;
    color: gray;
    font-size: 70%;
    padding: 0.75em 0;
    border-bottom: 1px solid lightgray;
  }
  .column {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }


`;

export default DaysWrapper;
