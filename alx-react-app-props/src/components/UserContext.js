import React, { createContext, useContext } from 'react';

// Initialize a Context
const UserContext = React.createContext();

// Custom hook for consuming context
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children, value }) => {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
