import React from 'react';
import useOffers from "../../utils/api/useOffers";
import Offer from "../../components/Offer";
import { format} from "date-fns";

function OfferList({currentDate}) {


    const { loading, offers } = useOffers({ filters: {min_date:format(currentDate, 'yyyy-MM-dd') } });
    return(
        <div>
            {loading
                ? <p>Loading</p>
                :offers.map(offer => <Offer {...offer} />)
            }
        </div>
    )
}

export default OfferList;
