import React from "react";
import {
  Box,
  TextField,
  FormHelperText,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function InputComponent({
  inputKey,
  inputValue,
  handleChange,
  helperText,
}) {
  const dropdownOptions = {
    Genre: ["Education", "Sports", "Comedy", "Lifestyle"],
    "Suitable age group for the video": ["7+", "12+", "16+", "18+"],
  };

  const isDropDown = inputKey in dropdownOptions;

  // Shared styles
  const commonStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "gray" },
      "&:hover fieldset": { borderColor: "gray" },
      "&.Mui-focused fieldset": { borderColor: "gray" },
      color: "gray",
    },
    "& .MuiInputLabel-root": { color: "gray" },
    "& .Mui-focused .MuiInputLabel-root": { color: "gray" },
  };

  return (
    <Box>
      {!isDropDown ? (
        <TextField
          fullWidth
          name={inputKey}
          value={inputValue}
          onChange={handleChange}
          label={inputKey}
          variant="outlined"
          sx={{
            ...commonStyles,
            "& input[type='date']::-webkit-calendar-picker-indicator": {
              opacity: 0.4,
              colorScheme: "dark",
            },
          }}
          InputLabelProps={{
            shrink: inputKey === "Release Date" ? true : undefined,
          }}
          inputProps={{
            style: { color: "white" },
          }}
          type={inputKey === "Release Date" ? "date" : "text"}
        />
      ) : (
        <FormControl fullWidth sx={commonStyles}>
          <InputLabel id={`${inputKey}-label`} sx={{ color: "gray" }}>
            {inputKey}
          </InputLabel>
          <Select
            labelId={`${inputKey}-label`}
            id={`${inputKey}-select`}
            value={inputValue}
            name={inputKey}
            onChange={handleChange}
            label={inputKey}
          >
            {dropdownOptions[inputKey]?.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <FormHelperText sx={{ color: "gray" }}>{helperText}</FormHelperText>
    </Box>
  );
}
