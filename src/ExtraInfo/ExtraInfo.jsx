import { useWeatherInfoContext } from "../WeatherProvider/WeatherProvider";
import { WiHumidity, WiStrongWind, WiSunrise, WiSunset } from "react-icons/wi";

export default function ExtraInfo() {
    const { currentWeather } = useWeatherInfoContext();

    return (
        <div className="extra-info">
            <div className="extra-info-item">
                <WiHumidity style={{ fontSize: "60px", color: "white" }} />
                <p className="extra-info-text" style={{ color: "white" }}>
                    <span className=" text-gray-400 text-3xl">Humidity </span><br /> {
                        currentWeather.ready ?
                            <span className=" text-4xl">{currentWeather.humidity} % </span>: <div className="animate-spin rounded-full h-[3rem] w-[3rem] border-t-2 border-b-2 border-white"></div>
                    }
                </p>
            </div>
            <div className="extra-info-item">
                <WiStrongWind style={{ fontSize: "50px", color: "white" }} />
                <p className="extra-info-text" style={{ color: "white" }}>
                <span className=" text-gray-400 text-3xl">Pressure </span><br /> {
                        currentWeather.ready ?
                            <span className=" text-4xl">{currentWeather.pressure} Pa</span> : <div className="animate-spin rounded-full h-[3rem] w-[3rem] border-t-2 border-b-2 border-white"></div>
                    }
                </p>
            </div>
        </div>
    );
}
