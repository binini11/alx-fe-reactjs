import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchUserData } from './services/githubService'; // Assuming githubService.js is in the 'services' directory

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const initialUsername = searchParams.get('username');
    const initialLocation = searchParams.get('location');
    const initialMinRepos = searchParams.get('minRepos');

    if (initialUsername || initialLocation || initialMinRepos) {
      setUsername(initialUsername || '');
      setLocation(initialLocation || '');
      setMinRepos(initialMinRepos || '');
      handleSubmit();
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'minRepos':
        setMinRepos(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const userData = await fetchUserData(username, location, minRepos);
      setUserData(userData);
      setSearchParams({ username, location, minRepos });
    } catch (error) {
      setError("Looks like we cant find the user.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:space-x-2">
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Username"
          className="w-full p-2 border rounded mb-2 md:mb-0"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleInputChange}
          placeholder="Location (optional)"
          className="w-full p-2 border rounded mb-2 md:mb-0"
        />
        <input
          type="number"
          name="minRepos"
          value={minRepos}
          onChange={handleInputChange}
          placeholder="Minimum Repositories (optional)"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Search
        </button>
      </form>

      {isLoading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      {userData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {userData.map((user) => (
            <div key={user.id} className="border p-4 rounded">
              <img src={user.avatar_url} alt={user.login} className="w-full h-48 object-cover rounded" />
              <h2 className="text-lg font-bold mt-2">{user.login}</h2>
              <p className="text-gray-600">Location: {user.location || "N/A"}</p>
              <p className="text-gray-600">Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;