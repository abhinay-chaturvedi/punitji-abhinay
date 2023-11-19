import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";

const CustomInput = ({setInput, name, label, required = true, type= "text", value}) => {
  return (
    <FormControl required={required} sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor={`outlined-adornment-${label}`}>{label}</InputLabel>
      <OutlinedInput
        id={`outlined-adornment-${label}`}
        onChange={(e) => {
          // setName(e.target.value)
          // setError(null);
          console.log("onchange");
          setInput(e);
        }}
        type={type}
        label={label}
        name={name}
        value={value}
      />
    </FormControl>
  );
};

export default CustomInput;
