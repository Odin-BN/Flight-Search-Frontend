import React, {useContext} from 'react';
import Button2 from './ui/Button2';
import DirectFlightCard from './ui/DirectFlightCard';
import FlightList from '@/context/FlightList';


const FlightsListPage: React.FC = () => {
    const {flights} = useContext(FlightList);

    return (
    <>
        <Button2 />

        <DirectFlightCard flight={flights[0] || null}/>
        <DirectFlightCard flight={flights[1] || null}/>
        <DirectFlightCard flight={flights[2] || null}/>
        <DirectFlightCard flight={flights[3] || null}/>
    </>
    );

};

export default FlightsListPage;