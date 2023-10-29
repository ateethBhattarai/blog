import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UsersContext.Provider value={{ user, setUser }}>
      {children}
    </UsersContext.Provider>
  );
};
