import React, { useState } from "react";
import ContentSection from "../components/ContentSection";
import FilterSection from "../components/FilterSection";

export default function LandingPage() {
  const [sortOption, setSortOption] = useState("releaseDate");
  const [filter, setFilter] = useState({
    genre: "All Genre",
    ageGroup: "Any age group",
  });

  return (
    <div className="bg-[#181818] min-h-screen font-['Archivo']">
      <FilterSection
        filter={filter}
        setFilter={setFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <ContentSection filter={filter} sortOption={sortOption} />
    </div>
  );
}
