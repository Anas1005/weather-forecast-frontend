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

///fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10