//import Button1 from "./components/ui/button"
//import Button2 from "./components/ui/button";
import FlightsListPage from "./components/FlightsListPage";
import SearchModal from "./components/SearchModalPage"
import { FlightProvider } from "./context/FlightSearchAmadeus"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FlightListProvider } from "./context/FlightList";
import FlightDetailsPage from "./components/FlightDetailsPage";
import { FlightsSorting } from "./context/FlightsSort";



function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<FlightListProvider><FlightProvider><SearchModal /></FlightProvider></FlightListProvider>} />
      <Route path="/flightsDisp" element={<FlightListProvider><FlightsSorting><FlightsListPage /></FlightsSorting></FlightListProvider>}/>
      <Route path="/flightsDisp/details" element={<FlightListProvider><FlightDetailsPage/></FlightListProvider>}/>
    </Routes>
    </Router>
  )
}

export default App

