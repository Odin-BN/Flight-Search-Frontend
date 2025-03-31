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
    OperatingAirlineCode: string;
    OperatingAirlineName: string;
    Duration: string;
    FlightNumber: string;
    AircraftCode: string;
    AircraftName: string;
}

export interface FlightPrices{
    CabinType: string;
    ClassType: string;
    CheckedBagsWeight: string;
    CheckedBagsUnit: string;
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
