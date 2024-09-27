import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faBed } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onSearch, onReset }) => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

  const handleReset = () => {
    setCity('');
    onReset();
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 flex flex-col sm:flex-row items-center max-w-sm mx-auto">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border p-2 mb-2 sm:mb-0 sm:mr-2 flex-grow"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-2xl p-2 mb-2 sm:mb-0 sm:mr-1 transition hover:transition-shadow">
        Search
      </button>
      <button type="button" onClick={handleReset} className="p-2 bg-red-700 text-white rounded-2xl">
        Clear
      </button>
    </form>
  );
};

export default Search;
