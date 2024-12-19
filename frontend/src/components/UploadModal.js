import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import InputComponent from "./InputComponent";
import axios from "axios";
import { FilteredDataContext } from "../contexts/FilteredDataProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#323232",
  boxShadow: 24,
  p: 4,
};

export default function UploadModal({ open, handleClose, handleNotification }) {
  const { setFilteredData } = useContext(FilteredDataContext);
  const [video, setVideo] = useState({
    "Video Link": "",
    "Thumbnail Image Link": "",
    Title: "",
    Genre: "",
    "Suitable age group for the video": "",
    "Release Date": "",
  });

  const helperTexts = [
    "This link will be used to derive the video",
    "This link will be used to preview the thumbnail image",
    "The title will be representative text for the video",
    "Genre will help in categorizing your videos",
    "This will be used to filter videos on age group suitability",
    "The will be used to sort videos",
  ];

  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      videoLink: video["Video Link"] || "https://www.youtube.com/watch?v=hGrRg8aoBMU",
      title: video["Title"] || "Upskill with Crio",
      genre: video["Genre"] || "Education",
      releaseDate: video["Release Date"] || "12 Jan 2021",
      contentRating: video["Suitable age group for the video"] || "7+",
      previewImage:
        video["Thumbnail Image Link"] ||
        "https://i.ytimg.com/vi_webp/hGrRg8aoBMU/sddefault.webp",
    };
    try {
      let newVideo = await axios.post("http://localhost:8082/v1/videos", post);

      setFilteredData((prev) => {
        return { videos: [...prev.videos, newVideo.data] };
      });
      handleNotification("Uploaded Successfully", "success");
      setVideo({
        "Video Link": "",
        "Thumbnail Image Link": "",
        Title: "",
        Genre: "",
        "Suitable age group for the video": "",
        "Release Date": "",
      });
      handleClose(newVideo.data._id);
    } catch (error) {
      console.error(error.response.data.message);
      if (error.response) handleNotification("Error", "error");
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form
          onSubmit={handleSubmit}
          className="text-white flex flex-col gap-6"
        >
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            className="text-white"
          >
            Upload Video
          </Typography>
          <Box className="flex flex-col gap-6 h-[50vh] overflow-y-scroll py-2 px-4 ">
            {Object.entries(video).map(([inputKey, inputValue], index) => (
              <InputComponent
                key={index}
                inputKey={inputKey}
                inputValue={inputValue}
                helperText={helperTexts[index]}
                handleChange={handleChange}
              />
            ))}
          </Box>

          <Box className="flex justify-between">
            <Button type="submit" variant="contained" className="!bg-red-600 ">
              Upload
            </Button>
            <Button
              variant="text"
              className="bg-transparent !text-white"
              onClick={() => handleClose(null)}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
