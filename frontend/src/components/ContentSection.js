import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

export default function ContentSection({
  data,
  filter,
  sortOption,
  filteredData,
  setFilteredData,
}) {


  useEffect(() => {
    if (data) {
      const newFilteredData = data.videos.filter((video) => {
        const genreMatch =
          filter.genre === "All Genre" || video.genre === filter.genre;
        const ageGroupMatch =
          filter.ageGroup === "Any age group" ||
          video.contentRating === filter.ageGroup;
        return genreMatch && ageGroupMatch;
      });

      setFilteredData({
        videos: newFilteredData.sort((a, b) =>
          sortOption === "releaseDate"
            ? a[sortOption] - b[sortOption]
            : b[sortOption] - a[sortOption]
        ),
      });
    }
  }, [data, filter, sortOption]);

  return (
    <section
      id="content-section"
      className="m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-[70%] py-[2%] "
    >
      {filteredData &&
        filteredData.videos.map((video, index) => (
          <CardComponent video={video} key={index} />
        ))}
    </section>
  );
}
