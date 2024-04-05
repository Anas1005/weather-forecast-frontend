import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import HumidityGraph from "../HumidityGraph/HumidityGraph";
import WeatherGraph from "../WeatherGraph/WeatherGraph";
import "swiper/css";
import "swiper/css/navigation";
import PressureGraph from "../PressureGraph/PressureGraph";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function WeatherTab({ type }) {
  const label = type === "Past" ? "Past 7 days analysis" : "24-hour forecast";

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className=" shadow-2xl my-4 border border-r-4 rounded-md">
      <div className=" text-2xl py-2 font-bold flex justify-center items-center">
        {label}
      </div>
      <Box sx={{  borderColor: "divider" }} className=" border-b border-r-4 rounded-md">
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="weather"></Tab>
          <Tab label="humidity"></Tab>
          <Tab label="pressure"></Tab>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <WeatherGraph type={type}></WeatherGraph>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HumidityGraph type={type}></HumidityGraph>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PressureGraph type={type}></PressureGraph>
      </TabPanel>
    </Box>
  );
}
