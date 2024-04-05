import CurrentWeather from "./CurrentWeather/CurrentWeather";
import "../src/style.css";
// import TempInfo from "./Tempinfo/TempInfo";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import { useWeatherInfoContext } from "./WeatherProvider/WeatherProvider";
import WeatherTab from "./WeatherTab/WeatherTab";
import Button from "./ButtonPro/Button";
import HourlyButton from "./ButtonPro/HourlyButton";
// import CountrySelection from "./CountrySelect/CountrySelection";

export default function WeatherApp() {
  const { showWeatherTab } = useWeatherInfoContext();
  return (
    <>
      {/* <CountrySelection></CountrySelection> */}
      <div className="containerBox ">
        <CurrentWeather></CurrentWeather>
        {/* <TempInfo></TempInfo> */}
        <ExtraInfo></ExtraInfo>
        {
          showWeatherTab && 
          <WeatherTab></WeatherTab>
        }

        <div className=" flex flex-col justify-center items-center mx-auto space-y-6">

        {!showWeatherTab && <HourlyButton/>}
       
        <Button />
        </div>
      </div>
    </>
  );
}

// bg-opacity-80 backdrop-blur-lg p-4 rounded-lg border border-gray-300 border-opacity-30 w-[40vw]
