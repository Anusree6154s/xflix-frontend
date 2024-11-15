import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import React, { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import { FilteredDataContext } from "../contexts/FilteredDataProvider";

const Search = styled("div")(({ theme }) => ({
  width: "100%",
  backgroundColor: "black",
  border: "1.5px solid #444d56",
  color: "white",
  fontWeight: "bold",
  [theme.breakpoints.up("sm")]: {
    width: "33.3333%", // Equivalent to md:w-1/3
  },
  borderRadius: theme.shape.borderRadius,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: "10px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
    },
    textAlign: { xs: "center", sm: "left" },
    color: "white",
  },
}));

export default function SearchBar() {
  const { data } = useContext(DataContext);
  const { setFilteredData } = useContext(FilteredDataContext);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const HandleSearch = debounce((e) => {
    const input = e.target.value.toLowerCase();
    search(input);
  }, 1000);

  const search = (input) => {
    const newData = data.videos.filter(
      (video) =>
        video.title.toLowerCase().includes(input) ||
        video.genre.toLowerCase().includes(input)
    );
    setFilteredData({ videos: newData });
  };

  return (
    <Search id="search-bar">
      <StyledInputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        className="w-full"
        onChange={HandleSearch}
      />
    </Search>
  );
}
