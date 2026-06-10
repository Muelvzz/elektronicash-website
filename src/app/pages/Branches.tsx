import { LocationPageProvider } from "../context/locationContext"
import Locations from "../sections/locations/Locations"

export default function Branches() {
  return (
    <LocationPageProvider>
      <main>
        <Locations></Locations>
      </main>
    </LocationPageProvider>
  )
}