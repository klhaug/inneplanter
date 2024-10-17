import { createContext, useState, useContext } from "react";

const DatabaseSearchContext = createContext();

export const useDatabaseSearch = () => useContext(DatabaseSearchContext);

export const DatabaseSearchProvider = ({ children }) => {
  const [databaseSearch, setDatabaseSearch] = useState("");

  return (
    <DatabaseSearchContext.Provider value={{ databaseSearch, setDatabaseSearch }}>
      {children}
    </DatabaseSearchContext.Provider>
  );
};