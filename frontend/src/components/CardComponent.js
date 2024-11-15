import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box } from "@mui/material";

export default function CardComponent({ video }) {
  const givenDate = new Date(video.releaseDate).getFullYear();
  const today = new Date().getFullYear();
  const date = today - givenDate;

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="!bg-transparent relative group cursor-pointer"
    >
      <Box className="inset-0 z-10 absolute bg-white opacity-5 w-full h-full hidden group-hover:block"></Box>
      <CardActionArea className="!h-full !flex !flex-col">
        <CardMedia
          component="img"
          height="140"
          image={video.previewImage}
          alt="green iguana"
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
          <Typography className="text-[#999999] flex justify-between !text-xs">
            <Typography className="!text-xs">{date} years ago</Typography>
            <Typography className="!text-xs flex items-center gap-1">
              {video.viewCount}
              <VisibilityIcon className="!text-base" />
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
