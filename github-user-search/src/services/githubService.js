export const fetchUserData = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${searchTerm}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
