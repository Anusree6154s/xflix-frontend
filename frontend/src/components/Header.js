import UploadIcon from "@mui/icons-material/Upload";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React from "react";
import SearchBar from "./SearchBar";
import UploadModal from "./UploadModal";

export default function Header({ data, setFilteredData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNotification = (message, variant) => {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  return (
    <header className="bg-[#222222] flex flex-col sm:flex-row gap-4 justify-between items-center p-[5%] md:px-[2%] md:py-[1%]">
      <Box id="logo" className=" font-['Hind_Siliguri'] text-[150%]">
        <span className="text-red-500 ">X</span>
        <span className="text-white">Flix</span>
      </Box>
      <SearchBar data={data} setFilteredData={setFilteredData} />
      <Button
        variant="contained"
        id="upload-button"
        className="!bg-red-600 !text-white"
        onClick={handleOpen}
        size="small"
      >
        <UploadIcon sx={{ color: "white" }} />
        <span>Upload</span>
      </Button>
      <UploadModal
        open={open}
        handleClose={handleClose}
        handleNotification={handleNotification}
        setFilteredData={setFilteredData}
      />
      <SnackbarProvider />
    </header>
  );
}
