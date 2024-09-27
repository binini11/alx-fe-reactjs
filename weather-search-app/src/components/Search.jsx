import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faBed} from '@fortawesome/free-solid-svg-icons';

const Search = ({ onSearch, onReset }) => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  const handleReset = () => {
    setCity('');
    onReset();
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 flex items-center max-w-sm mx-auto">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border p-2 mr-2 flex-grow"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mr-2">
        Search
      </button>
      <button type="button" onClick={handleReset} className=" p-2 rounded ">
        <FontAwesomeIcon icon={faBed} />
      </button>
    </form>
  );
};

export default Search;
