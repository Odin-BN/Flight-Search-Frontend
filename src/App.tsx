//import Button1 from "./components/ui/button"
import Button1 from "./components/ui/button";
import SearchModal from "./components/ui/SearchModal"
import { FlightProvider } from "./context/FlightSearchAmadeus"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<FlightProvider><SearchModal /></FlightProvider>} />
      <Route path="/flights" element={<Button1 />} />
    </Routes>
    </Router>
  )
}

export default App

