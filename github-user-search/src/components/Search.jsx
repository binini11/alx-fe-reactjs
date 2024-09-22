import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleMinReposChange = (event) => {
    setMinRepos(parseInt(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      let queryString = `q=${searchTerm}`;
      if (location) {
        queryString += `+location:${location}`;
      }
      if (minRepos) {
        queryString += `+repos:>=${minRepos}`;
      }

      const response = await axios.get(`https://api.github.com/search/users?${queryString}`);
      setUserData(response.data.items);
    } catch (error) {
      setError('Looks like we can\'t find the user.');
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Username"
          className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Location (optional)"
          className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={minRepos}
          onChange={handleMinReposChange}
          placeholder="Min Repositories (optional)"
          className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" disabled={isLoading} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {userData && userData.length > 0 ? (
        <ul className="list-disc space-y-2">
          {userData.map((user) => (
            <li key={user.id}>
              <div className="flex items-center space-x-2">
                <img src={user.avatar_url} alt={user.login} className="w-8 h-8 rounded-full" />
                <div>
                  <h3 className="text-lg font-bold">{user.login}</h3>
                  <p className="text-gray-500">{user.location}</p>
                  <p className="text-gray-500">Repositories: {user.public_repos}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : userData && userData.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default Search;