import { useState } from "react";
import cities from "../../data/cities.json";
import SearchBar from "../SearchBar/SearchBar";
import TripList from "../TripList/TripList";
import PortalModal from "../PortalModal/PortalModal";
import WeatherForTripDays from "../ForecastList/ForecastList";
import WeatherForToday from "../WeatherForToday/WeatherForToday";
// import { fetchCityWeatherForToday, fetchCityWeatherForDays } from "./api";

//raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Monochrome/snow.png - шлях до іконди прогнозу погоди

function App() {
  const [query, setQuery] = useState("");
  const [tripList, 
    // setTripList
  ] = useState([...cities]);
  // fetchCityWeatherForToday();
  // fetchCityWeatherForDays();

  return (
    <>
      <SearchBar
        query={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <main>
        <TripList cities={tripList} />
        <PortalModal />
        <WeatherForTripDays />
        <WeatherForToday />
      </main>
    </>
  );
}

export default App;
