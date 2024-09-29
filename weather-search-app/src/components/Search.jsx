import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faBed } from "@fortawesome/free-solid-svg-icons";

const Search = ({ onSearch, onReset }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  const handleReset = () => {
    setCity("");
    onReset();
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mb-4 flex flex-col sm:flex-row items-center max-w-sm mx-auto"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="border p-2 mb-2 sm:mb-0 sm:mr-2 flex-grow"
      />
      <button
        type="submit"
        className="bg-transparent
        hover:bg-blue-500 text-blue-700
        font-semibold hover:text-white
        py-2 px-4  border border-blue-500
        hover:border-transparent rounded-2xl mr-2 "
      >
        Search
      </button>
      <button
        type="button"
        onClick={handleReset}
        className="bg-transparent hover:bg-red-500 text-red-700
      font-semibold hover:text-white py-2 px-4 border border-red-500 
      hover:border-transparent rounded-2xl"
      >
        Clear
      </button>
    </form>
  );
};

export default Search;
