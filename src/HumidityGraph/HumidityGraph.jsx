import { Bar, BarChart, XAxis } from "recharts"
import { useWeatherInfoContext } from "../WeatherProvider/WeatherProvider"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const formatXAxis = (data) => {
    const date = new Date(data * 1000 - 86400*1000*6);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
    return `${dayOfWeek}, ${formattedDate}`;
};
const CustomizedLabel = function({x,y,value}){
    return(
        <text x={x+30} y={y-2} fontSize="15" fontWeight={600} textAnchor="middle">
            {value}%
        </text>
    )
}
function BarGraph({num}){
    const {dailyWeather} = useWeatherInfoContext()

    return(
        <BarChart
        width={960}
        height={200}
        data={dailyWeather?.slice(num*7 , (num+1)*7+ 1).map(({dt,humidity})=>({
            dt, main:humidity
        }))}
        margin={{top:30, right:30, left:30, bottom:10}}
        >
          <XAxis dataKey="dt" fontSize={15} fontWeight={600} tickFormatter={formatXAxis}></XAxis>
          <Bar dataKey="main" fill="#2C6CFF" isAnimationActive={true} label={<CustomizedLabel/>}></Bar>
        </BarChart>
    )
}

export default function HumidityGraph(){
    const slides = [];
    for(let i=0; i<1; i++){
        slides.push(
            <SwiperSlide key={i}>
                <BarGraph num={i}></BarGraph>
            </SwiperSlide>
        )
    }
    return(
        <Swiper navigation={true} modules={[Navigation]}>
            {slides}
        </Swiper>
    )
}