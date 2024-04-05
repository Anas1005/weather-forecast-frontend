import { useWeatherInfoContext } from "../WeatherProvider/WeatherProvider"
import { LabelList, Line, LineChart, XAxis } from 'recharts'
import CurrentWeatherIcon from "../CurrentWeatherIcon/CurrentWeatherIcon"
import uuid from 'react-uuid'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// const formatXAxis = (data) => {
//     const date = new Date(data * 1000 - 86400*1000*6);
//     const dayOfWeek = daysOfWeek[date.getDay()];
//     const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
//     return `${dayOfWeek}, ${formattedDate}`;
// };
const formatXAxis = (data) => {
    const date = new Date(data * 1000);
    const hour = date.getHours();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
    return ` ${hour}:00`;
};


const CustomizedDot = ({ payload, cx, cy }) => (
    <CurrentWeatherIcon key={uuid()} weatherState={payload.weather} x={cx - 13} y={cy - 5} fontSize={30}></CurrentWeatherIcon>
);

const CustomizedLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-4} fontSize={17.5} fontWeight={600} textAnchor="middle">{value}°</text>
);

function Linegraph({ num }) {
    const { dailyWeather, hourlyWeather } = useWeatherInfoContext();
    return (
        <LineChart
            width={960}
            height={200}
            data={hourlyWeather?.slice(num * 12, (num + 1) * 12 ).map(({ dt, main, weather }) => ({
                dt,
                main: main.temp,
                weather: weather[0].main
            }))}
            margin={{
                top: 30,
                right: 30,
                left: 30,
                bottom: 10
            }}
        >
            <XAxis dataKey="dt" fontSize={17.5} fontWeight={600} tickFormatter={formatXAxis}></XAxis>
            <Line dataKey="main" stroke="#3cb371" strokeWidth={2} dot={<CustomizedDot />} isAnimationActive={true}>
                <LabelList content={<CustomizedLabel />} />
            </Line>
        </LineChart>
    );
}

export default function WeatherGraph() {
    const slides = [];
    for (let i = 0; i < 3; i++) {
        slides.push(
            <SwiperSlide key={i}>
                <Linegraph num={i}></Linegraph>
            </SwiperSlide>
        );
    }
    return (
        <Swiper navigation={true} modules={[Navigation]}>
            {slides}
        </Swiper>
    );
}
