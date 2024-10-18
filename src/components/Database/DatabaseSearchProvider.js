import { createContext, useState, useContext } from "react";

const DatabaseSearchContext = createContext();

export const useDatabaseSearch = () => useContext(DatabaseSearchContext);

export const DatabaseSearchProvider = ({ children }) => {
  const [databaseSearch, setDatabaseSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DatabaseSearchContext.Provider value={{ 
      databaseSearch, 
      setDatabaseSearch,
      isOpen,
      setIsOpen
      }}>
      {children}
    </DatabaseSearchContext.Provider>
  );
};