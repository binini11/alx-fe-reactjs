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
    return response.data.items; // Access the list of users from the response
  } catch (error) {
    throw error;
  }
};