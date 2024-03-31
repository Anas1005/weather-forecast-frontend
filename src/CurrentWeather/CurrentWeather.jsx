import CurrentWeatherIcon from "../CurrentWeatherIcon/CurrentWeatherIcon";
import { useWeatherInfoContext } from "../WeatherProvider/WeatherProvider";
import { motion } from 'framer-motion';

export default function CurrentWeather() {
  const { currentWeather } = useWeatherInfoContext();

 
    return (
      <div className="weather">
        {"Rourkela"} &nbsp;/
        {/* {<CurrentWeatherIcon weatherState={weatherState}></CurrentWeatherIcon>} */}
        <span>{currentWeather.ready ? `${currentWeather.temp}`:"Loading....." } &deg;</span>
      </div>
    );
  }

