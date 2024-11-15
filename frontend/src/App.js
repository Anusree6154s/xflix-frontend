import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ContentSection from "./components/ContentSection";
import FilterSection from "./components/FilterSection";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [sortOption, setSortOption] = useState("releaseDate");
  const [filter, setFilter] = useState({
    genre: "All Genre",
    ageGroup: "Any age group",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get('https://xflix-backend-vmhx.onrender.com/v1/videos')
        const res = await axios.get('http://localhost:8082/v1/videos')
        // const res = await axios.get(
        //   "https://24cfea2d-b57e-422b-99d4-390ad149e450.mock.pstmn.io/v1/videos"
        // );
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);
  
  console.log(data);
  return (
    <div className="App bg-[#181818] min-h-screen font-['Archivo']">
      <Header data={data} setFilteredData={setFilteredData} />
      <FilterSection
        data={data}
        filter={filter}
        setFilter={setFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <ContentSection
        data={data}
        filter={filter}
        sortOption={sortOption}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </div>
  );
}

export default App;
