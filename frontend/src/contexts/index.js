import React from "react";
import DataProvider from "./DataProvider";
import FilteredDataProvider from "./FilteredDataProvider";

export default function ContextProvider({ children }) {
  return (
    <DataProvider>
      <FilteredDataProvider>{children}</FilteredDataProvider>
    </DataProvider>
  );
}
