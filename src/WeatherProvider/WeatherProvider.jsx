import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { io } from "socket.io-client";
import axios from "axios";

export const WeatherContext = createContext({});

const REACT_APP_WEATHER_API_KEY = "50fa4024e3b1d5eac2f51ab18a47e997";
var newSocket;

export default function WeatherProvider({ children }) {
  // const [weatherInfo, setWeatherInfo] = useState();
  const [currentWeather, setCurrrentWeather] = useState({ ready: false });
  const [features, setFeatures] = useState(null);
  const [dailyWeather, setDailyWeather] = useState([]);
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const[futureTab, setFutureTab] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countryName, setCountryName] = useState("Rourkela");
  useEffect(() => {
    console.log("Inside UE...");
    newSocket = io("https://weather-prediction-xfpl.onrender.com");
    newSocket.on("connect", () => {
      console.log("Socket Connected");
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    newSocket.on("sensorData", (weatherData) => {
      console.log("Sensor...", weatherData);
      setCurrrentWeather({
        ready: true,
        name: "Rourkela",
        temp: weatherData.temperature,
        humidity: weatherData.humidity,
        pressure: weatherData.pressure,
        weatherState: "Clear",
        date: new Date(),
        coordinates: { lat: 22.2309, lon: 84.8679 },
      });

      const data = {
        maxtempC: weatherData.temperature,
        mintempC: weatherData.temperature,
        cloudcover: 41,
        humidity: weatherData?.humidity,
        sunHour: 13.3,
        HeatIndexC: 41,
        precipMM: 0,
        pressure: weatherData.pressure,
        windspeedKmph: 13,
      }
      // handlePredict(data);
      setFeatures({
        maxtempC: weatherData.temperature,
        mintempC: weatherData.temperature,
        cloudcover: 41,
        humidity: weatherData?.humidity,
        sunHour: 13.3,
        HeatIndexC: 41,
        precipMM: 0,
        pressure: weatherData.pressure,
        windspeedKmph: 13,
      });
    });

    return () => {
      newSocket.off("sensorData");
    };
  }, []);

  const getWeatherInfo = useCallback(async () => {
    try {
      // const currentWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/weather?appid=${REACT_APP_WEATHER_API_KEY}&q=${countryName}&units=metric`
      // const currentWeatherInfo = await fetch(currentWeatherInfoAPI)

      // const data = await currentWeatherInfo.json();
      // const {
      //         // name,
      //         coord: {lat, lon},
      //         main: {temp, humidity, pressure, feels_like, temp_min, temp_max},
      //         sys:{sunset, sunrise},
      //         weather : [{main:weatherState}],
      //         wind: {speed, deg}
      //     } = data;

      // console.log("Current", data);

       const hourlyWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${22.2309}&lon=${84.8679}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`;
      const dailyWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${22.2309}&lon=${84.8679}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`;
       const hourlyWeatherInfo = await fetch(hourlyWeatherInfoAPI)
      const dailyWeatherInfo = await fetch(dailyWeatherInfoAPI);
       const dataHourly = await hourlyWeatherInfo.json();
      const dataDaily = await dailyWeatherInfo.json();
      const hourly = dataHourly.list;
      const daily = dataDaily.daily;
      console.log("Hourly",hourly);
      console.log("Daily", daily);

      // setWeatherInfo({
      //     name:"Rourkela", temp, humidity, pressure, weatherState:"Clear", daily,
      // })
      setDailyWeather(daily);
      setHourlyWeather(hourly);
    } catch (error) {
      console.error(error);
    }
  }, [countryName]);

  useEffect(() => {
    getWeatherInfo();
  }, [getWeatherInfo]);


  
  const handlePredict = async (data = features) => {
    // console.log("Data", data)
    setLoading(true); // Set loading to true while predicting
    try {
      const response = await axios.post(
        "https://weather-prediction-xfpl.onrender.com/predict",
        data
      );
      setPrediction(response.data.prediction);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.error || "Error making prediction");
    } finally {
      setLoading(false); // Set loading to false after prediction
    }
  };

  const handleSubmit = async () => {
    handlePredict();
  };

  const handleHourlyData = async() => {
    setFutureTab(true);
  }


  return (
    <WeatherContext.Provider
      value={{ currentWeather, prediction, loading, error, handleSubmit, dailyWeather, hourlyWeather, setCountryName , handleHourlyData, futureTab}}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherInfoContext() {
  return useContext(WeatherContext);
}
