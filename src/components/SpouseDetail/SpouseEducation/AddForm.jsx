import {
  Alert,
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";

const AddForm = ({userId, setEducationList}) => {
  const [add, setAdd] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [education, setEducation] = useState({
    type: null,
    college: null,
    stream: null,
    country: null,
    startDate: null,
    endDate: null,
  });
  const handleAdd = async () => {
    try {
    
      if(!education.type) {
        setError("please select education");
        return ;
      }
      if(!education.college) {
        setError("please enter college");
        return ;
      }
      if(!education.stream) {
        setError("please enter stream");
        return ;
      }
      if(!education.startDate) {
        setError("please enter start date");
        return ;
      }
      if(!education.endDate) {
        setError("please enter complete date");
        return ;
      }
      if(!education.country) {
        setError("please enter country");
        return ;
      }
      setDisabled(true);
      const res = await fetch("/api/client/spouseDetails", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({userId: userId, field: "education", value: education})
      })
      const result = await res.json();
      if(result.status == 200) {
        setEducationList(result.data.education);
        setAdd(false);
      }
      setDisabled(false);
    } catch (err) {
      console.error(err);
      setDisabled(false);
    }
  };
  return (
    <Box>
      {add == true ? (
        <Box>
          {error && (<Alert severity="error" sx={{mt: "6px"}} onClose={() => setError(null)}>{error}</Alert>)}
          <Box sx={{ display: { md: "flex" }, flexWrap: "wrap" }}>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Select Education</Typography>
              <TextField
                sx={{ width: "100%", minWidth: "200px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={education.type ? education.type : ""}
                label="Type"
                name="type"
                onChange={(e) => {
                  setEducation((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                  // setError(null);
                }}
                select
              >
                <MenuItem value={"phd"}>Ph.D</MenuItem>
                <MenuItem value={"post-graduation"}>Post-Graduation</MenuItem>
                <MenuItem value={"graduation"}>Graduation</MenuItem>
                <MenuItem value={"diploma"}>Diploma</MenuItem>
                <MenuItem value={"senior-secondary"}>Senior Secondary</MenuItem>
                <MenuItem value={"high-school"}>High School</MenuItem>
              </TextField>
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>College</Typography>
              <TextField
                label={"College"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="college"
                onChange={(e) => setEducation((prev) => ({...prev, [e.target.name]: e.target.value}))}
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Stream</Typography>
              <TextField
                label={"Stream"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="stream"
                onChange={(e) => setEducation((prev) => ({...prev, [e.target.name]: e.target.value}))}
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Start Date</Typography>
              <TextField
                type="date"
                sx={{ width: "100%", minWidth: "200px" }}
                name="startDate"
                onChange={(e) => setEducation((prev) => ({...prev, [e.target.name]: e.target.value}))}
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Complete Date</Typography>
              <TextField
                type="date"
                sx={{ width: "100%", minWidth: "200px" }}
                name="endDate"
                onChange={(e) => setEducation((prev) => ({...prev, [e.target.name]: e.target.value}))}
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>country</Typography>
              <TextField
                label={"Country"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="country"
                onChange={(e) => setEducation((prev) => ({...prev, [e.target.name]: e.target.value}))}
              />
            </Box>
          </Box>
          <Box>
            <Box sx={{m: "auto", width: "max-content"}}>
            <Button
              disabled={disabled}
              onClick={handleAdd}
              sx={{
                bgcolor: "green",
                color: "black",
                mt: "10px",
              }}
            >
              add
            </Button>
            <Button
              onClick={() => setAdd(false)}
              sx={{
                bgcolor: "green",
                color: "black",
                mt: "10px",
                ml: "10px"
              }}
            >
              cancel
            </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Button
          onClick={() => setAdd(true)}
          sx={{
            bgcolor: "green",
            color: "black",
            display: "block",
            m: "auto",
            mt: "10px",
          }}
        >
          Add
        </Button>
      )}
    </Box>
  );
};

export default AddForm;
