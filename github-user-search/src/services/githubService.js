import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

const buildAdvancedSearchUrl = (username, location, minRepos) => {
  let url = `${BASE_URL}?q=`;
  url += username ? `${username} ` : '';
  url += location ? `location:${location} ` : '';
  url += minRepos ? `min_repos:${minRepos}` : '';
  return url;
};

const fetchUserData = async (username, location, minRepos) => {
  try {
    const url = buildAdvancedSearchUrl(username, location, minRepos);
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    throw new Error('Failed to fetch user data: ' + error.message);
  }
};

export { buildAdvancedSearchUrl, fetchUserData };