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
  const { currentWeather, futureTab } = useWeatherInfoContext();
  return (
    <>
      <div className="containerBox ">
        {/* <span className="Logo">mdks </span> */}
        <CurrentWeather></CurrentWeather>

        <ExtraInfo></ExtraInfo>

        {currentWeather.ready && (
          <>
            <WeatherTab type={"Past"} />

            <div className=" flex justify-center items-center mx-auto space-x-6">
              {!futureTab && <HourlyButton />}

              {/* <Button /> */}
            </div>
            {futureTab && <WeatherTab type={"Future"} />}
          </>
        )}
      </div>
    </>
  );
}

// bg-opacity-80 backdrop-blur-lg p-4 rounded-lg border border-gray-300 border-opacity-30 w-[40vw]
