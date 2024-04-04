import Button from "./ButtonPro/Button";
import WeatherApp from "./WeatherApp";
import WeatherProvider from "./WeatherProvider/WeatherProvider";

function App() {
  return (
    <div className="">
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
    </div>
  );
}

export default App;
