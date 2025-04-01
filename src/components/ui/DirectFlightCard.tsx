import React from 'react';
import { FlightModel } from './FlightModel';
import { useNavigate } from 'react-router-dom';

//import { Card } from 'antd';
//Vuelo sencillo, osea sin fecha de vuelta, solo ida

interface Props {
    flight: FlightModel;
}

const DirectFlightCard: React.FC<Props> = ({flight}) => {
    const navigate = useNavigate();
    

    const handleClick = () => {
        navigate(`/flightsDisp/${flight.flight_id}`)
    }

    return (

    <div className='border-2 border-blue-500 rounded-lg p-4 shadow-md transition cursor-pointer bg-white card' /*onClick={handleClick}*/>
        <p className='text-sm text-black'>{flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureTime || "hora de salida"} - 
            {flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.arrivalTime || flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.arrivalTime || "hora de llegada"}</p>
        <h3 className='text-2xl font-bold'>
            {flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureAirport || "aeropuerto de salida"} ---------- 
            {flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.arrivalAirport || flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.arrivalAirport ||"aeropuerto llegada"}
        </h3>
        <p className= "text-sm text-black"> 
            {flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.operatingAirlineName || "Nombre de aerolinea opetartiva"} -
            ({flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.operatingAirlineCode || "Codigo Aerolinea opeativa"})
        </p>
        <p className='text-center text-sm text-black items-center'>
            {flight?.infoPerItinerary?.[0].totalDuration|| "Tiempo de llegada desde que salio"}
        </p>
        <p className='text-center text-sm text-black items-center'>
            {flight?.infoPerItinerary?.[0]?.waitTime || "Tiempo de escala"} in- 
            {flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureCity || "Ciudad de la escala"} 
             - ({flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureAirport || "Aeropuerto de la escala"})
        </p>
        <p className='text-right items-center font-bold text-lg'>
            ${flight?.totalPrice || "Precio total"}
        </p>
        <p className='text-right items-center text-sm'> total </p>
        <p className='text-right items-center font-bold text-lg'> ${flight?.pricePerTraveler || "Precio por viajero"}</p>
        <p className='text-right items-center text-sm'> Price per traveler</p>
    </div>
  
    );
};

export default DirectFlightCard;