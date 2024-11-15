import React, { createContext, useContext, useState } from "react";
import { DataContext } from "./DataProvider";

export const FilteredDataContext = createContext();

export default function FilteredDataProvider({ children }) {
  const { data } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState(data);

  return (
    <FilteredDataContext.Provider value={{ filteredData, setFilteredData }}>
      {children}
    </FilteredDataContext.Provider>
  );
}
