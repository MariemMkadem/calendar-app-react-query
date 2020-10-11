import styled from "styled-components";

const OfferWrapper = styled.div`
  .events {
    display: block;
    position: relative;
    width: 66%;
    background: white;
    height: auto;
    margin: 0 auto;

    h6 {
      margin: 16px;
      font-size: 20px;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 500;
      line-height: 1.6;
      letter-spacing: 0.0075em;
      border-bottom: 1px solid #d9e4dd;
      height: 40px;
    }
    &__content {
      display: flex;

      img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 60px;
      }
      &-data {
        padding: 20px;
        &-level  {
          display : flex;
          font-size: 14px;
          p:first-child {
            color:red;

          }
   
        }
        &-local {
            color: #a6a6a4
        }
      }
    }
  }
`;

export default OfferWrapper;
