import { Box, Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import EditNoteIcon from '@mui/icons-material/EditNote';
import EditIcon from '@mui/icons-material/Edit';
const CustomInput = ({setInput, name, label, required = true, type= "text", value, readOnly}) => {

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
        readOnly={readOnly}
        // defaultValue={defaultValue}
        endAdornment={readOnly && <Button sx={{p:"5px", minWidth: "0px"}}><EditIcon/></Button>}
      />
      
    </FormControl>
  );
};


export default CustomInput;
