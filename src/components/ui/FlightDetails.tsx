import React from 'react';
import { FlightSegments } from './FlightModel';

//import { Card } from 'antd';
//Detalles de los vuelos, este componente para ha estar dentor de la pagina de detalles

interface Props {
    flight: FlightSegments | null;
}

const FlightDetails: React.FC<Props> = ({flight}) => {

    return (
        
    <div className='flex justify-between items-center border-2 border-blue-500 rounded-lg p-4 shadow-md transition cursor-pointer bg-white card'>
        
    
      <div className='flex flex-col items-start w-3/8'>

        <p>Segment {flight?.id || "X"}</p>

        <div className='flex gap-x-1 text-sm text-black w-full'>
            <p>{flight?.departureDate || "fecha de salida"}</p>
            <p>{flight?.departureTime || "hora de salida"}</p>
            <p>-</p>
            <p>{flight?.arrivalDate || flight?.arrivalDate || "fecha de llegada"}</p>
            <p>{flight?.arrivalTime || flight?.arrivalTime || "hora de llegada"}</p>
        </div>


        <h3 className='text-2xl font-bold'>
            {flight?.departureAirport || "aeropuerto de salida"} ---------- 
            {flight?.arrivalAirport || flight?.arrivalAirport ||"aeropuerto llegada"}
        </h3>

        <div className='flex gap-x-1 w-full text-sm text-black'>
           <p>{flight?.operatingAirlineName || "Nombre de aerolinea opetartiva"}</p>
           <p>({flight?.operatingAirlineCode || "Codigo Aerolinea opeativa"})</p>
           <p>{flight?.flightNumber || "Flight number" }</p>
           <p>Condicion que compare codigos de aerolinea</p>
        </div>
       
      </div>

      <div className='flex flex-col items-center w-1/3 text-center text-base text-black'>

        <div className='flex gap-x-1'>
            <p>Duration:</p>
            <p>{flight?.duration || "Tiempo primer vuelo"}</p>
            
        </div>

        <div className='flex gap-x-1'>
            <p>{flight?.aircraftName}</p>
        </div>

        
      </div>


        <div className='w-1/4 text-right'>
        <p>Travelers fare details</p>
        <p>{flight?.flightPrices?.[0]?.cabinType} remapearlo</p>
        <p>{flight?.flightPrices?.[0]?.classType} remapearlo</p>
        <p>remapear cabina y clase que deben guarda la cabina y la clase en su respectivo segmento</p>
          <p className='font-bold text-lg'>${flight?.flightAmenities?.[0]?.description || "Descripcion amenity"}</p>
          <p className='text-sm'> isChargeable? </p>
          <p className='font-bold text-lg'> ${String(flight?.flightAmenities?.[0]?.isChargeable) || "Precio por viajero"}</p>
          <p className='text-sm'> Price Per Traveler</p>
        </div>
        
    </div>
  
    );
};

export default FlightDetails;