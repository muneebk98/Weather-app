import React, { useState } from 'react';
import background from "../assets/bckg.jpg";
import Searchbar from '../components/Searchbar';
import Today from '../components/Today';
import WeatherCard from '../components/WeatherCard';

const Weather = () => {
  const [todayData, setTodayData] = useState(null); 
  const [forecastData, setForecastData] = useState([]); 
  const [cityName, setCityName] = useState(''); 

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "200") {
        setTodayData(data.list[0]);
        setCityName(data.city.name);
        
        const dailyForecast = data.list.filter((entry) => entry.dt_txt.includes("12:00:00"));
        setForecastData(dailyForecast.slice(1, 5)); 
      } else {
        console.error("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
    
      <div className="flex justify-center pt-5">
        <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl">
          <Searchbar onSearch={search} />
        </div>
      </div>

    
      <div className="relative flex justify-center mt-10 px-4">
        <div className="relative bg-white bg-opacity-40 backdrop-blur-lg rounded-xl shadow-lg p-6 w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-96 flex justify-center">
          <Today weatherData={todayData} cityName={cityName} />
        </div>
      </div>

  
      <div className="grid grid-cols-2 gap-4 md:flex md:flex-row justify-center mt-6 md:mt-[-80px] z-100 relative px-4">
      {forecastData.map((day, index) => {
  const description = day.weather[0]?.description;
  const temperature = `${day.main.temp}°C`;

  return (
    <div key={index} className="w-full md:w-auto flex justify-center">
      <WeatherCard
        day={new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}
        temperature={temperature}
        description={description} 
      />
    </div>
  );
})}

      </div>
    </div>
  );
};

export default Weather;
