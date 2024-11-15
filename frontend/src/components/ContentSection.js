import React, { useContext, useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { DataContext } from "../contexts/DataProvider";
import { FilteredDataContext } from "../contexts/FilteredDataProvider";
import { useParams } from "react-router-dom";
import { CardMedia } from "@mui/material";
import VideoPlayer from "./VideoPlayer";

export default function ContentSection({ filter, sortOption }) {
  const { data } = useContext(DataContext);
  const { filteredData, setFilteredData } = useContext(FilteredDataContext);
  const { id: videoId } = useParams();

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
  }, [data, filter, setFilteredData, sortOption]);

  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    if (filteredData && videoId) {
      const video = filteredData.videos.find((video) => video._id === videoId);
      setSelectedVideo(video);
    }
  }, [filteredData, videoId]);

  return (
    <section
      id="content-section"
      className="m-auto grid grid-cols-12 gap-6 w-[70%] py-[2%] grid-rows-4"
    >
      {selectedVideo && <VideoPlayer video={selectedVideo} />}
      {filteredData &&
        filteredData.videos.map((video, index) => (
          <CardComponent video={video} key={index} />
        ))}
    </section>
  );
}
