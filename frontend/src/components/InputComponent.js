import {
  Box,
  TextField,
  FormHelperText,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import React from "react";

export default function InputComponent({
  inputKey,
  inputValue,
  handleChange,
  helperText,
}) {
  const genres = ["Education", "Sports", "Comedy", "Lifestyle"];
  const ageGroups = ["7+", "12+", "16+", "18+"];

  return (
    <Box>
      <TextField
        fullWidth
        name={inputKey}
        value={inputValue}
        onChange={handleChange}
        label={inputKey}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "gray" },
            "&:hover fieldset": { borderColor: "gray" },
            "&.Mui-focused fieldset": { borderColor: "gray" },
            color: "gray",
          },
          "& .MuiInputLabel-root": { color: "gray" },
          "& .Mui-focused .MuiInputLabel-root": { color: "gray" },
          "& input[type='date']::-webkit-calendar-picker-indicator": {
            opacity: 0.4,
            colorScheme: "dark",
          },
        }}
        slotProps={{
          input: {
            style: { color: "white" },
          },
          inputLabel: {
            shrink: inputKey === "Release Date" ? true : undefined,
            color: "white",
          },
        }}
        type={inputKey === "Release Date" ? "date" : "text"}
        className={
          inputKey === "Genre" ||
          inputKey === "Suitable age group for the video"
            ? "!hidden"
            : ""
        }
      />
      <FormControl
        fullWidth
        className={
          inputKey === "Genre" ||
          inputKey === "Suitable age group for the video"
            ? "!border-gray-500"
            : "!hidden"
        }
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "gray" },
            "&:hover fieldset": { borderColor: "gray" },
            "&.Mui-focused fieldset": { borderColor: "gray" },
            color: "gray",
          },
          "& .MuiInputLabel-root": { color: "gray" },
          "& .Mui-focused .MuiInputLabel-root": { color: "gray" },
          "& input[type='date']::-webkit-calendar-picker-indicator": {
            opacity: 0.4,
            colorScheme: "dark",
          },
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          slotProps={{
            input: {
              style: { color: "white" },
            },
            inputLabel: {
              shrink: inputKey === "Release Date" ? true : undefined,
              color: "white",
            },
          }}
        >
          {inputKey}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputValue}
          label={inputKey}
          name={inputKey}
          onChange={handleChange}
        >
          {inputKey === "Genre" &&
            genres.map((genre, index) => (
              <MenuItem
                // sx={{ background: "#323232", color: "white" }}
                key={index}
                value={genre}
              >
                {genre}
              </MenuItem>
            ))}
          {inputKey === "Suitable age group for the video" &&
            ageGroups.map((age, index) => (
              <MenuItem key={index} value={age}>
                {age}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormHelperText sx={{ color: "gray" }}>{helperText}</FormHelperText>
    </Box>
  );
}
