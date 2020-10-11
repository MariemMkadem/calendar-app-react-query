import React from "react";

import EventsWrapper from "./EventsWrapper";
import { get } from "lodash";
import { useQuery } from "react-query";
import Offer from "../../ApiData/Offer";
import Coach from "../../ApiData/Coach";
import Activity from "../../ApiData/Activity";

const Events = () => {
  const { data: OfferData } = useQuery("offer", Offer);
  const { data: coachData } = useQuery("coach", Coach);
  const { data: activityData } = useQuery("activity", Activity);

  const offers = get(OfferData, "results", []);
  const coachs = get(coachData, "results", []);
  const activities = get(activityData, "results", []);

  return (
    <EventsWrapper>
      <div className="events">
        {offers.map((of) => (
          <>
            <h6>{of.date_start} </h6>
            {coachs.map((coach) => (
              <div className="events__content">
                <div className="events__content-image">
                  <img src={coach.user.photo} alt="hello"></img>
                </div>

                <div className="events__content-data">
                  <div className="events__content-data-course"> YOGA</div>
                  <div className="events__content-data-level">
                    <p> Tous niveaux by &nbsp; </p>
                    <p> {coach.user.name}</p> .
                  </div>
                  <div className="events__content-data-local">Paris 17</div>
                </div>
              </div>
            ))}
          </>
        ))}
      </div>
    </EventsWrapper>
  );
};

export default Events;
