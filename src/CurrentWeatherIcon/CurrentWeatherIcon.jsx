import {
    WiDayCloudy,
    WiDayRain,
    WiDaySnow,
    WiDaySprinkle,
    WiDaySunny,
    WiDayThunderstorm,
    WiDust,
    WiNa
  } from "react-icons/wi";
  
  export default function CurrentWeatherIcon({ weatherState, ...props }) {
    // Define a mapping of weather conditions to corresponding colors
    const weatherColors = {
      ThunderStorm: "#4F4F4F",
      Snow: "#87CEEB",
      Clouds: "#B0C4DE",
      Clear: "#FFD700",
      Haze: "#A9A9A9",
      Mist: "#A9A9A9",
      Smoke: "#A9A9A9",
      Dust: "#A9A9A9",
      fog: "#A9A9A9",
      Sand: "#A9A9A9",
      Ash: "#A9A9A9",
      Squall: "#A9A9A9",
      Tornado: "#A9A9A9",
      Rain: "#6495ED",
      Drizzle: "#6495ED"
    };
  
    // Determine the color based on the weather state
    const iconColor = weatherColors[weatherState] || "#000000";
  
    // Render the appropriate weather icon with the determined color
    switch (weatherState) {
      case "ThunderStorm":
        return <WiDayThunderstorm {...props} color={iconColor} />;
      case "Snow":
        return <WiDaySnow {...props} color={iconColor} />;
      case "Clouds":
        return <WiDayCloudy {...props} color={iconColor} />;
      case "Clear":
        return <WiDaySunny {...props} color={iconColor} />;
      case "Haze":
        return <WiDust {...props} color={iconColor} />;
      case "Mist":
        return <WiDust {...props} color={iconColor} />;
      case "Smoke":
        return <WiDust {...props} color={iconColor} />;
      case "Dust":
        return <WiDust {...props} color={iconColor} />;
      case "fog":
        return <WiDust {...props} color={iconColor} />;
      case "Sand":
        return <WiDust {...props} color={iconColor} />;
      case "Ash":
        return <WiDust {...props} color={iconColor} />;
      case "Squall":
        return <WiDust {...props} color={iconColor} />;
      case "Tornado":
        return <WiDust {...props} color={iconColor} />;
      case "Rain":
        return <WiDayRain {...props} color={iconColor} />;
      case "Drizzle":
        return <WiDaySprinkle {...props} color={iconColor} />;
      default:
        return <WiNa {...props} color={iconColor} />;
    }
  }
  