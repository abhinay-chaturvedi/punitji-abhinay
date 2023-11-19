import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BasicDatePicker from "@/components/Date";
import CustomInput from "@/components/CustomInput";

const LanguageTest = () => {
  const [arrow, setArrow] = useState(false);
  const [age, setAge] = useState("");
  return (
    <Box sx={{ mt: "10px" }}>
      <Box sx={{ p: "10px", boxShadow: "2px 2px 5px 5px whitesmoke" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Language Test</Typography>
          <Button onClick={() => setArrow((prev) => !prev)}>
            {arrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </Box>
        {arrow && (
          <Grid container gap={2} justifyContent="center" sx={{ mt: "5px" }}>
            <Grid item xs={12} md={2}>
              <FormControl required sx={{ width: "100%" }} variant="outlined">
                <InputLabel id="demo-simple-select-label">Exam</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Exam"
                  onChange={(e) => setAge(e.target.value)}
                >
                  <MenuItem value={"phd"}>IELTS</MenuItem>
                  <MenuItem value={"graduation"}>PTE</MenuItem>
                  <MenuItem value={"diploma"}>CELPIP</MenuItem>
                  <MenuItem value={"senior-secondary"}>
                    FRENCH
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} item md={1.7}>
              {/* <FormControl required sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-email">
                    University or School
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email"
                    onChange={(e) => {
                      // setName(e.target.value)
                      // setError(null);
                      console.log("onchange");
                    }}
                    type="text"
                    label="university or school"
                  />
                </FormControl> */}
              <CustomInput label="Speaking band" type="number" />
            </Grid>
            <Grid xs={12} item md={1.7}>
              {/* <FormControl required sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-stream">
                    Stream
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-stream"
                    onChange={(e) => {
                      // setName(e.target.value)
                      // setError(null);
                      console.log("onchange");
                    }}
                    type="text"
                    label="stream"
                  />
                </FormControl> */}
              <CustomInput label="Listening band" type="number" />
            </Grid>
            <Grid xs={12} item md={1.7}>
              {/* <FormControl required sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-country">
                    Country
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-country"
                    onChange={(e) => {
                      // setName(e.target.value)
                      // setError(null);
                      console.log("onchange");
                    }}
                    type="text"
                    label="country"
                  />
                </FormControl> */}
              <CustomInput label="Reading band" type="number" />
            </Grid>
            <Grid xs={12} item md={1.7}>
              {/* <FormControl required sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-country">
                    Country
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-country"
                    onChange={(e) => {
                      // setName(e.target.value)
                      // setError(null);
                      console.log("onchange");
                    }}
                    type="text"
                    label="country"
                  />
                </FormControl> */}
              <CustomInput label="Writing band" type="number" />
            </Grid>
            <Grid xs={12} item md={1.7}>
              {/* <FormControl required sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-country">
                    Country
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-country"
                    onChange={(e) => {
                      // setName(e.target.value)
                      // setError(null);
                      console.log("onchange");
                    }}
                    type="text"
                    label="country"
                  />
                </FormControl> */}
              <CustomInput label="Overall band" type="number" />
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default LanguageTest;
