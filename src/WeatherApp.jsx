import SearchBox from "./SearchBox"
import Infobox from "./Infobox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        feelslike : 24.84,
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        weather : "Haze",
    });

    let updateInfo = (newinfo) => {
         setWeatherInfo(newinfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>WeatherWave</h2>
            <SearchBox updateInfo={ updateInfo }/>
            <Infobox info = { weatherInfo }/>
        </div>
    )
}