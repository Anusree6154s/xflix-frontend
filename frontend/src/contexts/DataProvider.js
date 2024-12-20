import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../app/contants";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BASE_URL);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>
  );
}
