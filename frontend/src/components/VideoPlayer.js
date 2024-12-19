import { Visibility, ThumbUp, ThumbDown } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { forwardRef, useState } from "react";
import { BASE_URL } from "../app/contants";

const getDate = (video) => {
  const givenDate = new Date(video.releaseDate).getFullYear();
  const today = new Date().getFullYear();
  const date = today - givenDate;
  return date;
};

const VideoPlayer = forwardRef(({ video }, ref) => {
  const [vote, setVote] = useState({
    upVote: { votes: video.votes.upVotes, change: false },
    downVote: { votes: video.votes.downVotes, change: false },
  });
  const date = getDate(video);

  const handleVote = async (type, changeBoolean) => {
    const change = changeBoolean ? "increase" : "decrease";
    try {
      await axios.patch(`${BASE_URL}/${video._id}/votes`, {
        vote: type,
        change,
      });

      let updateVote = changeBoolean
        ? vote[type].votes + 1
        : vote[type].votes - 1;
      setVote((prev) => ({
        ...prev,
        [type]: { votes: updateVote, change: changeBoolean },
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="col-span-12 sm:row-span-2 xl:row-span-3 !bg-transparent relative group transition-all duration-300 !max-w-full"
      ref={ref}
    >
      <CardActionArea className="!h-full !flex !flex-col">
        <CardMedia
          component="iframe"
          src={`https://www.${video.videoLink}?autoplay=1&mute=1`}
          title={video.title}
          className="flex-1 w-full"
        />
        <CardContent className="bg-[#202020] w-full cursor-default">
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="text-white truncate !font-bold !text-xs"
          >
            {video.title}
          </Typography>
          <Box className="text-[#999999] flex justify-between !text-xs  ">
            <Box>
              <Typography className="!text-xs">{date} years ago</Typography>
              <Typography className="!text-xs flex items-center gap-1">
                {video.viewCount}
                <Visibility className="!text-base" />
              </Typography>
            </Box>
            <Box className="flex gap-2 items-center border-2 border-gray-400 px-2 rounded-[50px] cursor-pointer ">
              <Box
                className="flex gap-2"
                onClick={() => handleVote("upVote", !vote.upVote.change)}
              >
                <ThumbUp fontSize="inherit" />
                <Typography className="text-white !text-xs">
                  {vote.upVote.votes}
                </Typography>
              </Box>
              <Typography className="!font-black">|</Typography>
              <Box
                className="flex gap-2"
                onClick={() => handleVote("downVote", !vote.downVote.change)}
              >
                <ThumbDown fontSize="inherit" />
                <Typography className="text-white !text-xs">
                  {vote.downVote.votes}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

export default VideoPlayer;
