//import Button1 from "./components/ui/button"
//import Button2 from "./components/ui/button";
import FlightsListPage from "./components/FlightsListPage";
import SearchModal from "./components/SearchModalPage"
import { FlightProvider } from "./context/FlightSearchAmadeus"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FlightListProvider } from "./context/FlightList";



function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<FlightListProvider><FlightProvider><SearchModal /></FlightProvider></FlightListProvider>} />
      <Route path="/flightsDisp" element={<FlightListProvider><FlightsListPage /></FlightListProvider>} />
    </Routes>
    </Router>
  )
}

export default App

