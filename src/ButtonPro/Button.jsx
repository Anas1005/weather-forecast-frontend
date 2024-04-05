import React, { useState } from "react";
import axios from "axios";
import { useWeatherInfoContext } from "../WeatherProvider/WeatherProvider";
import uuid from "react-uuid";
import CurrentWeatherIcon from "../CurrentWeatherIcon/CurrentWeatherIcon";

const Button = () => {
  const { prediction, loading, error, currentWeather, handleSubmit, dailyWeather } = useWeatherInfoContext();

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
        <div className="">
        <button
          onClick={handleSubmit}
          className={`bg-blue-500 text-white font-semibold py-2 px-4 h-[4rem] w-[12rem] rounded hover:bg-blue-600 transition duration-300 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? (
            <div className="inline-block animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
          ) : (
            <span className="text-xl">Predict</span>
          )}
        </button>
        <div>
        {error && <p className="text-red-500">{error}</p>}
        {prediction && (
          <div className=" flex justify-center items-center space-x-5">
          <p className=" text-4xl font-semibold text-orange-500 my-4">
            {/* Predicted Temperature: */}
             {prediction.toFixed(2)} °C
          </p>
          <CurrentWeatherIcon key={uuid()} weatherState={dailyWeather[1].weather[0].main} fontSize={40}></CurrentWeatherIcon>
          </div>
          

        )}
      </div>
      </div>


        
        
      )}
    </div>
  );
};

export default Button;
