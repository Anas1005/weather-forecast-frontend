// import { Box, Tab, Tabs } from "@mui/material";
// import { useState } from "react";
// import HumidityGraph from "../HumidityGraph/HumidityGraph";
// import WeatherGraph from "../WeatherGraph/WeatherGraph";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./tab.css";
// import PressureGraph from "../PressureGraph/PressureGraph";

// function TabPanel({ children, value, index }) {
//   return (
//     <div hidden={value !== index}>
//       {value === index && <Box>{children}</Box>}
//     </div>
//   );
// }

// export default function WeatherTab({ type }) {
//   const label = type === "Past" ? "Past 7 days analysis" : "24-hour forecast";

//   const [value, setValue] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }} className=" weatherTab shadow-2xl my-4 rounded-md">
//       <div className=" text-2xl py-2 font-bold flex justify-center items-center text-white opacity-70">
//         {label}
//       </div>
//       <Box sx={{  borderColor: "divider" }} className=" border-b rounded-md">
//         <Tabs value={value} onChange={handleChange} variant="fullWidth">
//           <Tab label="weather"></Tab>
//           <Tab label="humidity"></Tab>
//           <Tab label="pressure"></Tab>
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         <WeatherGraph type={type}></WeatherGraph>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <HumidityGraph type={type}></HumidityGraph>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <PressureGraph type={type}></PressureGraph>
//       </TabPanel>
//     </Box>
//   );
// }

import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import HumidityGraph from "../HumidityGraph/HumidityGraph";
import WeatherGraph from "../WeatherGraph/WeatherGraph";
import "swiper/css";
import "swiper/css/navigation";
import "./tab.css";
import PressureGraph from "../PressureGraph/PressureGraph";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function WeatherTab({ type }) {
  const label =
    type === "Past" ? "Past 7 days analysis" : "24-hour forecast";

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        // marginY:"12px",
        "& .MuiTabs-indicator": {
          backgroundColor: "#0080ff",
          fontWeight:"600" // Change the color of the tab indicator
        },
      }}
      className="weatherTab shadow-2xl my-[2rem] rounded-md"
    >
      <div className="text-2xl py-2 font-bold flex justify-center items-center text-white opacity-70">
        {label}
      </div>
      <Box
        sx={{
          borderColor: "divider",
          "& .MuiTab-root": {
            color: "white", // Change the color of the unselected tab labels
            "&.Mui-selected": {
              color: "#0080ff", // Change the color of the selected tab label
              fontWeight:"600" 
            },
          },
        }}
        className="border-b rounded-md"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
        >
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
