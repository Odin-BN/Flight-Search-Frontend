import React, {createContext, useState, ReactNode} from 'react';
import { FlightModel } from '@/components/ui/FlightModel';

type FlightListType = {
    flights: FlightModel[];
    setFlights: React.Dispatch<React.SetStateAction<FlightModel[]>>;
    page: string;
    setPage: (text: string) => void;
    fetchFlights: () => void;
    //agregar la pagina actual
};

const FlightList = createContext<FlightListType>({
    flights: [],
    setFlights: () => {},
    page: "1",
    setPage: () => {},
    fetchFlights: () => {},
});

type FlightProviderProps = {
    children: ReactNode;
};

export const FlightListProvider = ({children}:FlightProviderProps) => {
    const [flights, setFlights] = useState<FlightModel[]>([]);
    const [page, setPage] = useState<string>("1");

    const fetchFlights = async () => {
        let searchUrl = `http://localhost:9090/amadeus/Flights?page=${page}`;

        try {
            const response = await fetch(searchUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Error al obtener los vuelos")
            }

            const data: FlightModel[] = await response.json();
            console.log("Datos obtenidos: ", data);
            setFlights(data);
        }   catch (error) {
            console.error("Error obteniendo los vuelos con paginacion, error: ", error)
        }

        
    };

    return (
        <FlightList.Provider value= {{flights, setFlights, page, setPage, fetchFlights}}>
            {children}
        </FlightList.Provider>
    )
}

export default FlightList;