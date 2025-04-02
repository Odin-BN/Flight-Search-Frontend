//contexto para la funcion de ordenar los vuelos por precio o duracion
import {createContext, useState, ReactNode} from 'react';

type FlightsSortType = {
    priceOrder: string;
    setPriceOrder: (priceOrder: string) => void ;
    durationOrder: string;
    setDurationOrder: (durationOrder: string) => void;
    flightsSort: (type: "price" | "duration") => void;
}

const FlightsSort = createContext<FlightsSortType>({
    priceOrder : "desc",
    durationOrder: "desc",
    setPriceOrder: () => {},
    setDurationOrder: () => {},
    flightsSort: () => {},
});

type FlightsSortProps = {
    children: ReactNode;
}


export const FlightsSorting = ({children}: FlightsSortProps) => {
    const [priceOrder, setPriceOrder] = useState<string>("");
    const [durationOrder, setDurationOrder] = useState<string>("");

    const flightsSort = async (type: "price" | "duration") => {
        let newOrder: "asc" | "desc";
    
        if (type === "price") {
            newOrder = priceOrder === "asc" ? "desc" : "asc";
            setPriceOrder(newOrder);
            setDurationOrder("");
        } else {
            newOrder = durationOrder === "asc" ? "desc" : "asc";
            setDurationOrder(newOrder);
            setPriceOrder("");
        }

        let sortUrl = "http://localhost:9090/amadeus/Flights?"

        if (priceOrder != "") {
            sortUrl += `sortBy1=price&order1=${priceOrder}`;
        } else {
            sortUrl += `sortBy2=duration&order2=${durationOrder}`;
        }

        try {
            const response = await fetch(sortUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Error ordenando la lista ordenada por parametros");
            }
        } catch (error) {
            console.error("Error enviando los datos de sorting al backend");
        }
    }

    return (
        <FlightsSort.Provider value = {{priceOrder, setPriceOrder, durationOrder, setDurationOrder, flightsSort}}>

                {children}

        </FlightsSort.Provider>
    );
}

export default FlightsSort;