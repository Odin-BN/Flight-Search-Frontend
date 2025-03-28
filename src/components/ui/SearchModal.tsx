import React from 'react';
import DepartureDate_Cal from "./DepartureDate_Cal"
import ReturnDate_Cal from "./ReturnDate_Cal"
import DepartureAirport_Sel from "./DepartureAirport_Sel"
import ArrivalAirport_Sel from "./ArrivalAirport_Sel"
import Currency_Sel from "./Currency_Sel"
import NonStop_Slider from "./NonStop_Slider"
import Adults_Inp from './Adults_Inp';
import Search_Button from './Search_Button';

const SearchModal: React.FC = () => {

    return (
    <>
        <DepartureDate_Cal/>
        <ReturnDate_Cal />
        <DepartureAirport_Sel />
        <ArrivalAirport_Sel />
        <Currency_Sel />
        <NonStop_Slider />
        <Adults_Inp />
        <Search_Button />
    </>
    );

};

export default SearchModal;