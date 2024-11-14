import React from "react";
import SearchBar from "./SearchBar";
import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";
import { Box } from "@mui/material";

export default function Header({data, setFilteredData}) {
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
        sx={{ backgroundColor: "red", color: "white" }}
      >
        <UploadIcon sx={{ color: "white" }} />
        <span>Upload</span>
      </Button>
    </header>
  );
}
