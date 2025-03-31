import React from 'react';
import { FlightModel } from './FlightModel';
import { useNavigate } from 'react-router-dom';

//import { Card } from 'antd';

interface Props {
    flight: FlightModel;
}

const DirectFlightCard: React.FC<Props> = ({flight}) => {
    const navigate = useNavigate();
    

    const handleClick = () => {
        navigate(`/flightsDisp/${flight.flight_id}`)
    }

    return (

    <div className='card' /*onClick={handleClick}*/>
        <p className= "text-sm text-gray-600"> Hora de salida: {flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureTime || "no disponible"}</p>
    </div>
  
    );
};

export default DirectFlightCard;