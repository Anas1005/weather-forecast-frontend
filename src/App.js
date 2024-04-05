import Button from "./ButtonPro/Button";
import WeatherApp from "./WeatherApp";
import WeatherProvider from "./WeatherProvider/WeatherProvider";
import "../src/style.css";

function App() {
  return (
    <div className="parent w-[100vw] h-[100vh] flex justify-center items-center overflow-y-auto">
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
    </div>
  );
}

export default App;

///fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10