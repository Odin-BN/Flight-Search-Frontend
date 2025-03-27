//import Button1 from "./components/ui/button"
import SearchModal from "./components/ui/SearchModal"
import { FlightProvider } from "./context/FlightSearchAmadeus"



function App() {

  return (
    <>
    <FlightProvider>
      <SearchModal />
    </FlightProvider>
    </>
  )
}

export default App

