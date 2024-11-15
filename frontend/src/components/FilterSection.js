import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import React, { useEffect, useState } from "react";
import SortDropdown from "./SortDropdown";

export default function FilterSection({
  data,
  filter,
  setFilter,
  sortOption,
  setSortOption,
}) {
  const [filterOptions, setFilterOptions] = useState({
    genres: [],
    ageGroups: [],
  });

  useEffect(() => {
    if (data) {
      const newGenres = Array.from(
        new Set(data.videos.map((video) => video.genre))
      );
      const newAgeGroups = Array.from(
        new Set(
          data.videos
            .filter((video) => video.contentRating !== "Anyone")
            .map((video) => video.contentRating)
        )
      );
      setFilterOptions((prev) => ({
        genres: ["All Genre", ...newGenres],
        ageGroups: ["Any age group", ...newAgeGroups],
      }));
    }
  }, [data]);

  return (
    <section id="filter-section" className="bg-[#222222] py-[2%]">
      <Box className="m-auto w-[70%] lg:w-[50%]">
        <Box id="genre" className="flex justify-between items-center  mb-[2%]">
          {filterOptions.genres.length !== 0 &&
            filterOptions.genres.map((genre, index) => (
              <Chip
                key={index}
                label={genre}
                className={`${
                  genre === filter.genre
                    ? "!bg-white !text-black"
                    : "!bg-none !text-white"
                } !cursor-pointer`}
                variant={genre === filter.genre ? "filled" : "outlined"}
                onClick={() => setFilter((prev) => ({ ...prev, genre }))}
                clickable={false}
              />
            ))}
          <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        </Box>

        <Box
          id="age-group"
          className="w-[80%] m-auto flex justify-between items-center"
        >
          {filterOptions.ageGroups.length !== 0 &&
            filterOptions.ageGroups.map((ageGroup, index) => (
              <Chip
                key={index}
                label={ageGroup}
                className={`${
                  ageGroup === filter.ageGroup
                    ? "!bg-white !text-black"
                    : "!bg-none !text-white"
                } !cursor-pointer ${ageGroup === "Any age group" ? "w-fit" : "w-16"}`}
                variant={ageGroup === filter.ageGroup ? "filled" : "outlined"}
                onClick={() => setFilter((prev) => ({ ...prev, ageGroup }))}
                clickable={false}
              />
            ))}
        </Box>
      </Box>
    </section>
  );
}
