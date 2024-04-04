import CurrentWeather from "./CurrentWeather/CurrentWeather";
import "../src/style.css";
// import TempInfo from "./Tempinfo/TempInfo";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import WeatherTab from "./WeatherTab/WeatherTab";
import Button from "./ButtonPro/Button";
// import CountrySelection from "./CountrySelect/CountrySelection";

export default function WeatherApp() {
  return (
    <>
      {/* <CountrySelection></CountrySelection> */}
      <div className="containerBox ">
        <CurrentWeather></CurrentWeather>
        {/* <TempInfo></TempInfo> */}
        <ExtraInfo></ExtraInfo>
        <WeatherTab></WeatherTab>
        <Button />
      </div>
    </>
  );
}

// bg-opacity-80 backdrop-blur-lg p-4 rounded-lg border border-gray-300 border-opacity-30 w-[40vw]
