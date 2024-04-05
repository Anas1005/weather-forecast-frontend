import React, { useState } from "react";
import axios from "axios";
import { useWeatherInfoContext } from "../WeatherProvider/WeatherProvider";
import uuid from "react-uuid";
import CurrentWeatherIcon from "../CurrentWeatherIcon/CurrentWeatherIcon";

const HourlyButton = () => {
  const {
    prediction,
    loading,
    error,
    currentWeather,
    handleSubmit,
    dailyWeather,
    handleHourlyData,
  } = useWeatherInfoContext();

  // const [prediction, setPrediction] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const handleSubmit = async () => {
  //   setLoading(true); // Set loading to true while predicting
  //   try {
  //     const response = await axios.post(
  //       "https://weather-prediction-xfpl.onrender.com/predict",
  //       features
  //     );
  //     setPrediction(response.data.prediction);
  //     setError(null);
  //   } catch (error) {
  //     setError(error.response?.data?.error || "Error making prediction");
  //   } finally {
  //     setLoading(false); // Set loading to false after prediction
  //   }
  // };

  return (
    <div className="mx-auto text-center">
      {currentWeather.ready && (
        <div>
          <button
            onClick={handleHourlyData}
            className={`bg-blue-500 text-white font-semibold py-2 px-4 h-[4rem] w-[12rem] rounded hover:bg-blue-600 transition duration-300 
 }`}
            // disabled={loading}
          >
            <span className="text-xl">Predict Hourly Data</span>
          </button>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default HourlyButton;
