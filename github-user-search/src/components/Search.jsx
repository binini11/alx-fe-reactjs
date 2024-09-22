import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
      const response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
      setUserData(response.data.items);
    } catch (error) {
      setError('Looks like we can\'t find the user');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Username"
          className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" disabled={isLoading} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {isLoading && <p className="text-gray-500">Loading...</p>}
      {userData && userData.length > 0 ? (
        <ul className="list-disc space-y-2">
          {userData.map((user) => (
            <li key={user.id}>
              <div className="flex items-center space-x-2">
                <img src={user.avatar_url} alt={user.login} className="w-8 h-8 rounded-full" />
                <div>
                  <h3 className="text-lg font-bold">{user.login}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : userData && userData.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : null}
    </div>
  );
};

export default Search;
