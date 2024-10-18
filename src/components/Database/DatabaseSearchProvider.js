import { createContext, useState, useContext } from "react";

const DatabaseSearchContext = createContext();

export const useDatabaseSearch = () => useContext(DatabaseSearchContext);

export const DatabaseSearchProvider = ({ children }) => {
  const [databaseSearch, setDatabaseSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [idSearch, setIdSearch] = useState("");

  return (
    <DatabaseSearchContext.Provider value={{ 
      databaseSearch, 
      setDatabaseSearch,
      isOpen,
      setIsOpen,
      idSearch,
      setIdSearch
      }}>
      {children}
    </DatabaseSearchContext.Provider>
  );
};