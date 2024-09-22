export const fetchUserData = async (searchTerm, location, minRepos) => {
  try {
    let queryString = `q=${searchTerm}`;
    if (location) {
      queryString += `+location:${location}`;
    }
    if (minRepos) {
      queryString += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?${queryString}`);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
