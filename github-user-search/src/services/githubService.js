export const fetchUserData = async (searchTerm, location, minRepos) => {
  try {
    let queryString = `q=${searchTerm}`;
    if (location) {
      queryString += `+location:${location}`;
    }
    if (minRepos) {
      queryString += `+repos:>=${minRepos}`;
    }

    const url = `https://api.github.com/search/users?${queryString}`;
    const response = await axios.get(url);
    return response.data.items
  } catch (error) {
    throw error;
  }
};