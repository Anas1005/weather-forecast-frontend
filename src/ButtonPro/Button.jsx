import React, { useState } from "react";
import axios from "axios";
import { useWeatherInfoContext } from "../WeatherProvider/WeatherProvider";

const Button = () => {
  const { prediction, loading, error, currentWeather, handleSubmit } = useWeatherInfoContext();

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
          <p className=" text-4xl font-semibold text-orange-500 my-4">
            {/* Predicted Temperature: */}
             {prediction.toFixed(2)} °C
          </p>
        )}
      </div>
      </div>


        
        
      )}
    </div>
  );
};

export default Button;
