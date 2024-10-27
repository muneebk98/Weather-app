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

const Today = ({ weatherData, cityName }) => {
  let city = "City Name";  
  let temperature = "Temperature";  
  let desc = "Weather description";

  if (cityName) {
    city = cityName;
  }

  if (weatherData && weatherData.main && weatherData.weather && weatherData.weather[0]) {
    if (weatherData.main.temp !== undefined) {
      temperature = `${weatherData.main.temp}°C`;
    }

    if (weatherData.weather[0].description) {
      desc = weatherData.weather[0].description;
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center bg-blue-100 bg-opacity-50 rounded-lg shadow-md p-4"> 
        <div className="mr-4">
          {getIconForWeather(desc)}
        </div>

        <div className="text-left">
          <div className="text-lg font-medium text-gray-700">Today</div>
          <div className="text-4xl font-bold text-gray-800">{city}</div>
          <div className="text-lg text-gray-600">{temperature}</div>
          <div className="text-lg text-gray-600 capitalize">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Today;
