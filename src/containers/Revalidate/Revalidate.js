import { createContext, useContext } from 'react';

// Create context for revalidation
export const RevalidationContext = createContext(null);

// Custom hook to use the revalidation context
export const useRevalidation = () => useContext(RevalidationContext);
