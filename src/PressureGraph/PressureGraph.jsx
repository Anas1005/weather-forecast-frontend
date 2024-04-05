// import {WiDirectionDownLeft, WiDirectionDownRight, WiDirectionLeft, WiDirectionRight, WiDirectionUp, WiDirectionUpLeft, WiDirectionUpRight, WiDirectionDown} from "react-icons/wi"
import { Bar, BarChart, LabelList, XAxis } from "recharts";
import { useWeatherInfoContext } from "../WeatherProvider/WeatherProvider";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const formatXAxisPast = (data) => {
  const date = new Date(data * 1000 - 86400 * 1000 * 6);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
  return `${dayOfWeek}, ${formattedDate}`;
};
const formatXAxisFuture = (data) => {
  const date = new Date(data * 1000);
  const hour = date.getHours();
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
  return ` ${hour}:00`;
};

const CustomizedLabel = function ({ x, y, value }) {
  return (
    <text
      x={x + 30}
      y={y - 2}
      dy={0}
      fontSize="20"
      fontWeight={500}
      textAnchor="middle"
      fill="white"
    >
      {value} Pa
    </text>
  );
};

function BarGraph({ num, type }) {
  const { dailyWeather, hourlyWeather } = useWeatherInfoContext();

  if (type === "Future") {
    return (
      <BarChart
        width={960}
        height={200}
        data={hourlyWeather
          ?.slice(num * 12, (num + 1) * 12)
          .map(({ dt, main }) => ({
            dt,
            pressure: main.pressure,
          }))}
        margin={{ top: 50, right: 30, left: 30, bottom: 5 }}
      >
        <XAxis
          dataKey="dt"
          fontSize={20}
          fontWeight={500}
          tickFormatter={formatXAxisFuture}
          tick={{ fill: "white" }}
        ></XAxis>
        <Bar
          dataKey="pressure"
          fill="#2C6CFF"
          isAnimationActive={false}
          label={<CustomizedLabel />}
        >
          {/* <LabelList dataKey="deg" content={<CustomizedContent></CustomizedContent>}></LabelList> */}
        </Bar>
      </BarChart>
    );
  } else {
    return (
        <BarChart
          width={960}
          height={200}
          data={dailyWeather
            ?.slice(num * 8, (num + 1) * 8)
            .map(({ dt, pressure }) => ({
              dt,
              pressure
            }))}
          margin={{ top: 50, right: 30, left: 30, bottom: 5 }}
        >
          <XAxis
            dataKey="dt"
            fontSize={20}
            fontWeight={500}
            tickFormatter={formatXAxisPast}
            tick={{ fill: "white" }}
          ></XAxis>
          <Bar
            dataKey="pressure"
            fill="#2C6CFF"
            isAnimationActive={false}
            label={<CustomizedLabel />}
          >
            {/* <LabelList dataKey="deg" content={<CustomizedContent></CustomizedContent>}></LabelList> */}
          </Bar>
        </BarChart>
      );
  }
}

export default function PressureGraph({ type }) {
  return <BarGraph num={0} type={type}></BarGraph>;
}
