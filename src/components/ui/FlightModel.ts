export interface FlightSegments{
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
    departureAirport: string;
    departureCity: string;
    arrivalAirport: string;
    arrivalCity: string;
    airlineCode: string;
    airlineName: string,
    operatingAirlineCode: string;
    operatingAirlineName: string;
    duration: string;
    flightNumber: string;
    aircraftCode: string;
    aircraftName: string;
}

export interface FlightPrices{
    cabinType: string;
    classType: string;
    checkedBagsWeight: string;
    checkedBagsUnit: string;
}
export interface FlightItineraries{
    itinerate_id: string;
    totalDuration: string;
    waitTime: string;
    flightSegments: FlightSegments[];
}

export interface FlightModel{
    flight_id: string,
    flightPrices: FlightPrices[];
    infoPerItinerary: FlightItineraries[];
    totalPrice: number;
    pricePerTraveler: number;
    basePrice: number;
    feesPrice: number;
}
