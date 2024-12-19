import React, { useState } from "react";
import ContentSection from "../components/ContentSection";
import FilterSection from "../components/FilterSection";
import { Box } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

export default function LandingPage() {
  const [sortOption, setSortOption] = useState("releaseDate");
  const [filter, setFilter] = useState({
    genre: "All Genre",
    ageGroup: "Any age group",
  });

  return (
    <Box className="bg-[#181818] min-h-screen font-['Archivo']">
      <FilterSection
        filter={filter}
        setFilter={setFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <ContentSection filter={filter} sortOption={sortOption} />
      <Box
        sx={{
          textAlign: "right",
          color: "white",
          width: "100%",
          padding: "2%",
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpward style={{ display: "inline" }} />
        TOP
      </Box>
    </Box>
  );
}
