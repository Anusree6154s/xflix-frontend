import { Visibility } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../app/contants";
import { FilteredDataContext } from "../contexts/FilteredDataProvider";

const getDate = (video) => {
  const givenDate = new Date(video.releaseDate).getFullYear();
  const today = new Date().getFullYear();
  const date = today - givenDate;
  return date;
};

const updateViewCount = async (video) => {
  try {
    await axios.patch(BASE_URL + `/${video._id}/views`);
  } catch (error) {
    console.error(error);
  }
};

const updateLocalViewCount = (video, fiteredDataObject) => {
  const { filteredData, setFilteredData } = fiteredDataObject;
  const videosCopy = [...filteredData.videos];
  const index = videosCopy.findIndex((item) => item._id === video._id);
  videosCopy.splice(index, 1);
  setFilteredData({
    videos: [...videosCopy, { ...video, viewCount: video.viewCount + 1 }],
  });
};

export default function CardComponent({ video }) {
  const fiteredDataObject = useContext(FilteredDataContext);
  const navigate = useNavigate();
  const { id: videoId } = useParams();
  const date = getDate(video);

  const handleVideoClick = async (video) => {
    await updateViewCount(video);
    updateLocalViewCount(video, fiteredDataObject);
    navigate(`/video/${video._id}`);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className={
        videoId === video._id
          ? "hidden"
          : "col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 !bg-transparent relative group cursor-pointer transition-all duration-300 !max-w-full"
      }
      onClick={() => handleVideoClick(video)}
    >
      <Box className="inset-0 z-10 absolute bg-white opacity-5 w-full h-full hidden group-hover:block"></Box>
      <CardActionArea className="!h-full !flex !flex-col">
        <CardMedia
          component="img"
          height="140"
          image={video.previewImage}
          alt={video.title}
          className="flex-1"
        />
        <CardContent className="bg-[#202020] w-full">
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="text-white truncate !font-bold !text-xs"
          >
            {video.title}
          </Typography>
          <Box className="text-[#999999] flex justify-between !text-xs">
            <Typography className="!text-xs">
              {date} years ago | {video.genre} | {video.contentRating}
            </Typography>
            <Typography className="!text-xs flex items-center gap-1">
              {video.viewCount}
              <Visibility className="!text-base" />
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
