import React from "react";
import { format } from "date-fns";

import EventsWrapper from "./EventsWrapper";
import { get } from "lodash";
import { useQuery } from "react-query";

const Offer = async () => {
  const res = await fetch(
    "https://api.staging.bsport.io/api/v1/offer?compa&ompany=6"
  );
  return res.json();
};

const Activity = async () => {
  const res = await fetch(
    "https://api.staging.bsport.io/api/v1/meta-activity?compa&ompany=6"
  );
  return res.json();
};

const Coach = async () => {
  const res = await fetch(
    "https://api.staging.bsport.io/api/v1/coach?company=6"
  );
  return res.json() || [];
};

const Events = () => {
  const { data: OfferData } = useQuery("offer", Offer);
  const { data: coachData } = useQuery("coach", Coach);
  const { data: activityData } = useQuery("activity", Activity);
  console.log("Events -> coachData", coachData);

  const offers = get(OfferData, "results", []);
  const coachs = get(coachData, "results", []);
  const activities = get(activityData, "results", []);

  return (
    <EventsWrapper>
      <div className="events">
        {offers.map((of) => (
          <>
            <h6>{of.date_start} </h6>
            {coachs.map(
              (coach) =>
                console.log("coach", coach) || (
                  <div className="events__content">
                    <div className="events__content-image">
                      <img src={coach.user.photo} alt="hello"></img>
                    </div>
                    <div className="events__content-data">
                       <div className="events__content-data-course"> hello</div>
                   
                      <div className="events__content-data-level">
                        Tous niveaux by {coach.user.name} .
                      </div>
                      <div className="events__content-data-local">Paris 17</div>
                    </div> 
                    
                  </div>
                )
            )}{" "}
          </>
        ))}
      </div>
    </EventsWrapper>
  );
};

export default Events;