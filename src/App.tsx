//import Button1 from "./components/ui/button"
//import Button2 from "./components/ui/button";
import FlightsSearchRes from "./components/FlightsSearchRes";
import SearchModal from "./components/SearchModal"
import { FlightProvider } from "./context/FlightSearchAmadeus"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FlightListProvider } from "./context/FlightList";



function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<FlightListProvider><FlightProvider><SearchModal /></FlightProvider></FlightListProvider>} />
      <Route path="/flightsDisp" element={<FlightsSearchRes />} />
    </Routes>
    </Router>
  )
}

export default App

