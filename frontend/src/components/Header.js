import UploadIcon from "@mui/icons-material/Upload";
import { Box, Link } from "@mui/material";
import Button from "@mui/material/Button";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import UploadModal from "./UploadModal";
import { DataContext } from "../contexts/DataProvider";
import { FilteredDataContext } from "../contexts/FilteredDataProvider";
import { useParams } from "react-router-dom";

export default function Header() {
  const { id } = useParams();
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

  const { data } = useContext(DataContext);
  const { setFilteredData } = useContext(FilteredDataContext);
  // const navigate=useNavigat

  return (
    <header className="bg-[#222222] flex flex-col sm:flex-row gap-4 justify-between items-center p-[5%] md:px-[2%] md:py-[1%]">
      <Link href="/" underline="none">
        <Box id="logo" className=" font-['Hind_Siliguri'] text-[150%]">
          <span className="text-red-500 ">X</span>
          <span className="text-white">Flix</span>
        </Box>
      </Link>
      {!id && <SearchBar data={data} setFilteredData={setFilteredData} />}
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
