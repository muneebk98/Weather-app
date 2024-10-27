import React from 'react';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi'; 


const getIconForWeather = (description) => {
  switch (description) {
    case 'clear sky':
      return <WiDaySunny className="text-6xl text-yellow-500 animate-pulse" />; 
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
    case 'overcast clouds':
      return <WiCloud className="text-6xl text-gray-400 animate-ping" />;
    case 'rain':
    case 'light rain':
    case 'moderate rain':
      return <WiRain className="text-6xl text-blue-500 animate-pulse" />; 
    case 'snow':
      return <WiSnow className="text-6xl text-blue-200 animate-bounce" />; 
    case 'thunderstorm':
      return <WiThunderstorm className="text-6xl text-yellow-600 animate-flash" />; 
    case 'mist':
    case 'fog':
      return <WiFog className="text-6xl text-gray-300 animate-fade" />; 
    default:
      return <WiCloud className="text-6xl text-gray-400 animate-ping" />; 
  }
};

const WeatherCard = ({ day, temperature, description }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-100 bg-opacity-50 rounded-2xl shadow-md w-32 h-40">
      <div className="text-lg font-semibold text-gray-800">{day}</div>

      <div className="my-2">
        {getIconForWeather(description)}
      </div>

      <div className="text-lg font-medium text-gray-800">{temperature}</div>
    </div>
  );
};

export default WeatherCard;
