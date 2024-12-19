import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";

export default function SortDropdown({ sortOption, setSortOption }) {
  const handleChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
      <Select
        value={sortOption}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          height: "80%",
          fontSize: "small",
          color: "white",
          border: "1.5px solid #616161",
          "&:focus": {
            outline: "none",
          },
          "& .MuiSelect-icon": {
            color: "white",
          },
          "& .MuiMenu-paper": {
            backgroundColor: "black",
            color: "white",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "black", 
              "& .MuiMenuItem-root": {
                color: "white", 
                "&:hover": {
                  bgcolor: "#616161", 
                },
              },
              "&.Mui-selected": {
                bgcolor: "#616161", 
                "&:hover": {
                  bgcolor: "#8c8c8c", 
                },
              },
            },
          },
        }}
      >
        <MenuItem value="releaseDate">Release Date</MenuItem>
        <MenuItem value="viewCount">View Count</MenuItem>
      </Select>
    </FormControl>
  );
}
