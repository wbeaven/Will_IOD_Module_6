import { useState } from "react";
import Temperature from "./Temperature";
import CheckWeather from "./CheckWeather";

function Weather() {
    const [weather, setWeather] = useState("Sunny");
    const [tempCelcius, setTempCelcius] = useState(27);
    const handleWeatherChange = (newWeather, newTemp) => {
        setWeather(newWeather);
        setTempCelcius(newTemp);
    };
    const [unit, setUnit] = useState("C");
    const handleUnit = () => {
        if (unit === "F") setUnit("C");
        else setUnit("F");
    };
    return (
        <div className='Weather componentBox'>
            <h2>Today's Weather</h2>
            <div>
                <strong>{weather}</strong> with a temp of
                <Temperature temp={tempCelcius} units={unit} />
            </div>
            <CheckWeather onWeatherChange={handleWeatherChange} />
            <button onClick={handleUnit}>Convert Temp</button>
        </div>
    );
}

export default Weather;
