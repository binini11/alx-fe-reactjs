import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchTerm}`
      );
      setUserData(response.data);
    } catch (error) {
      setError("Looks like we can't find the user.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Reset state when the component unmounts to avoid memory leaks
    return () => {
      setUserData(null);
      setIsLoading(false);
      setError(null);
    };
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search GitHub User"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
