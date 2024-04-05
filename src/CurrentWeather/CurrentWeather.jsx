import CurrentWeatherIcon from "../CurrentWeatherIcon/CurrentWeatherIcon";
import { useWeatherInfoContext } from "../WeatherProvider/WeatherProvider";
import { motion } from 'framer-motion';

export default function CurrentWeather() {
  const { currentWeather } = useWeatherInfoContext();

  return (
    <div className="weather flex flex-col text-white">
      {"Rourkela"} &nbsp;
      {currentWeather.ready ? (
        <>
          {/* <CurrentWeatherIcon weatherState={weatherState} /> */}
          <span className="text-white">{currentWeather.temp} ° C</span>
        </>
      ) : (
        <div className="animate-spin rounded-full h-[3rem] w-[3rem] border-t-2 border-b-2 border-white"></div>
      )}
    </div>
  );
}
