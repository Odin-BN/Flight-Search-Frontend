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

    <div className='flex justify-between items-center border-2 border-blue-500 rounded-lg p-4 shadow-md transition cursor-pointer bg-white card' /*onClick={handleClick}*/>
    
      <div className='flex flex-col items-start w-1/4'>

        <div className='flex gap-x-1 text-sm text-black w-full'>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureDate || "fecha de salida"}</p>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureTime || "hora de salida"}</p>
            <p>-</p>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.arrivalDate || flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.arrivalDate || "fecha de llegada"}</p>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.arrivalTime || flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.arrivalTime || "hora de llegada"}</p>
        </div>


        <h3 className='text-2xl font-bold'>
            {flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureAirport || "aeropuerto de salida"} ---------- 
            {flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.arrivalAirport || flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.arrivalAirport ||"aeropuerto llegada"}
        </h3>

        <div className='flex gap-x-1 w-full text-sm text-black'>
           <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.operatingAirlineName || "Nombre de aerolinea opetartiva"}</p>
           <p>({flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.operatingAirlineCode || "Codigo Aerolinea opeativa"})</p>
        </div>
       
      </div>

      <div className='flex flex-col items-center w-1/3 text-center text-base text-black'>

        <div className='flex gap-x-1'>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.duration || "Tiempo primer vuelo"}</p>
            <p>:</p>
            <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[1]?.duration || "Tiempo segundo vuelo"}</p>
        </div>

        <p>{flight?.infoPerItinerary?.[0].totalDuration|| "Tiempo de llegada desde que salio"}</p>

        <div className='flex gap-x-1 justify-center w-full items-center text-center'>
          <p>{flight?.infoPerItinerary?.[0]?.waitTime || "Tiempo de escala"}</p>
          <p>in</p>
          <p>{flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureCity || "Ciudad de la escala"}</p>
          <p>({flight?.infoPerItinerary?.[0]?.flightSegments?.[0]?.departureAirport || "Aeropuerto de la escala"})</p>
        </div> 
        
      </div>


        <div className='w-1/4 text-right'>
          <p className='font-bold text-lg'>${flight?.totalPrice || "Precio total"}</p>
          <p className='text-sm'> Total </p>
          <p className='font-bold text-lg'> ${flight?.pricePerTraveler || "Precio por viajero"}</p>
          <p className='text-sm'> Price Per Traveler</p>
        </div>
        
    </div>
  
    );
};

export default DirectFlightCard;