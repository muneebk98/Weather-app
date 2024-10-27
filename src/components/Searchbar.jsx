import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city); 
    }
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city..."
          className="p-2 border rounded-md text-black w-full"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
