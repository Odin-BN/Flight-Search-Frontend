import React, {useContext} from 'react';
import FlightList from '@/context/FlightList';
import FlightDetails from './ui/FlightDetails';

//Aqui va un ciclo con el componente para mostrar los detalles de los vuelos

//se agarra el valor de flightdeatils y se venia al componente de los detalles de los vuelos


const FlightDetailsPage: React.FC = () => {
    const {flightDetails} = useContext(FlightList);

    //hacer un cliclo que envie el segmento del vuelo que se va analizar

    return (
    <>
        <FlightDetails flight={flightDetails} id={"1"}/> 
    </>
    );

};

export default FlightDetailsPage;