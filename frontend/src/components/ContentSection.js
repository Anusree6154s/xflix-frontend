import React, { useContext, useEffect, useState, useRef } from "react";
import CardComponent from "./CardComponent";
import { DataContext } from "../contexts/DataProvider";
import { FilteredDataContext } from "../contexts/FilteredDataProvider";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

export default function ContentSection({ filter, sortOption }) {
  const { data } = useContext(DataContext);
  const { filteredData, setFilteredData } = useContext(FilteredDataContext);
  const { id: videoId } = useParams();
  const selectedVideoRef = useRef(null);

  useEffect(() => {
    if (data && !videoId) {
      const newFilteredData = data.videos.filter((video) => {
        const genreMatch =
          filter.genre === "All Genre" || video.genre === filter.genre;
        const ageGroupMatch =
          filter.ageGroup === "Any age group" ||
          video.contentRating === filter.ageGroup;
        return genreMatch && ageGroupMatch;
      });

      setFilteredData({
        videos: newFilteredData.sort((a, b) => {
          let date1 = new Date(a[sortOption]);
          let date2 = new Date(b[sortOption]);
          return sortOption === "releaseDate" ? date1 - date2 : date2 - date1;
        }),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filter, setFilteredData, sortOption]);

  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    if (filteredData && videoId) {
      const video = filteredData.videos.find((video) => video._id === videoId);
      setSelectedVideo(video);
    }
  }, [filteredData, videoId]);

  useEffect(() => {
    if (selectedVideo && selectedVideoRef.current) {
      selectedVideoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedVideo]);

  return (
    <section
      id="content-section"
      className="m-auto grid grid-cols-12 gap-6 w-[70%] py-[2%] grid-rows-4"
    >
      {selectedVideo && (
        <VideoPlayer video={selectedVideo} ref={selectedVideoRef} />
      )}
      {filteredData &&
        filteredData.videos.map((video, index) => (
          <CardComponent
            video={video}
            key={video._id}
            count={index}
            id="card-component"
          />
        ))}
    </section>
  );
}
