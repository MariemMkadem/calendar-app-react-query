import React from "react";
import useCoach from "../../utils/api/useCoach";
import useEstablishment from "../../utils/api/useEstablishment";
import useActivity from "../../utils/api/useActivity"
import OfferWrapper from "./OfferWrapper";

function Offer({ ...offer }) {
  const { coach } = useCoach(offer.coach, { skip: !offer.coach });
  const { establishment } = useEstablishment(offer.establishment, {
    skip: !offer.establishment,
  });
  const { activity } = useActivity(offer.activity, {
    skip: !offer.activity,
  });


  return (
    <OfferWrapper>
      <div className="events">
        <>
          <h6>{offer.date_start}</h6>
          <div className="events__content">
            <div className="events__content-image">
              <img src={coach&& coach.user.photo} alt="hello"></img>
            </div>
            <div className="events__content-data">
              <div className="events__content-data-course"> {activity && activity.name}  </div>
              <div className="events__content-data-level">
                <p> Tous niveaux by &nbsp; </p>
                <p> {coach&& coach.user.name}</p> .
              </div>
              <div className="events__content-data-local">{establishment && establishment.title}</div>
            </div>
          </div>
        </>
      </div>
    </OfferWrapper>
  );
}

export default Offer;
