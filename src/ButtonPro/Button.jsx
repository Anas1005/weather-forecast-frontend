import React from "react";
import { useState } from "react";
import axios from "axios";
import { useWeatherInfoContext } from "../WeatherProvider/WeatherProvider";

const Button = () => {
  const { features, currentWeather } = useWeatherInfoContext();
  console.log(features);

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     setFeatures({ ...features, [name]: parseFloat(value) || "" }); // Ensure numerical values
  //   };

  const handleSubmit = async () => {
    console.log(features);
    try {
      const response = await axios.post(
        "https://weather-prediction-xfpl.onrender.com/predict",
        features
      );
      console.log(response);
      setPrediction(response.data.prediction);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.error || "Error making prediction");
    }
  };
  return (
    <div>
      <div>
        {error && <p className="error">{error}</p>}
        {prediction && <p>Predicted Temperature: {prediction.toFixed(2)}</p>}
      </div>
      {currentWeather.ready && <button onClick={handleSubmit}>submit</button>}
    </div>
  );
};

export default Button;
