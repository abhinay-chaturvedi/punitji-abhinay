import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { use, useState } from "react";

const AddForm = ({ userId, setWorkExperienceList }) => {
    const [add, setAdd] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [workExperience, setWorkExperience] = useState({
        jobTitle: null,
        company: null,
        startDate: null,
        endDate: null,
        country: null
    })
const handleAdd = async () => {
    try { 
        if(!workExperience.jobTitle) {
            setError("Please enter job title");
            return ;
        }
        if(!workExperience.company) {
            setError("Please enter company");
            return ;
        }
        if(!workExperience.startDate) {
            setError("Please  enter start date");
            return ;
        }
        if(!workExperience.endDate) {
            setError("Please enter endDate");
            return ;
        }
        if(!workExperience.country) {
            setError("Please enter country");
            return ;
        }
        setDisabled(true);
        const res = await fetch("/api/client/spouseDetails", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({userId: userId, field: "workExperience", value: workExperience})
        })
        const result = await res.json();
        if(result.status == 200) {
            setWorkExperienceList(result.data.workExperience);
            setAdd(false);
        }
        setDisabled(false);
    } catch(err) {
        console.error(err);
    }
}
  return (
    <Box>
      {add == true ? (
        <Box>
          {error && (
            <Alert
              severity="error"
              sx={{ mt: "6px" }}
              onClose={() => setError(null)}
            >
              {error}
            </Alert>
          )}
          <Box sx={{ display: { md: "flex" }, flexWrap: "wrap" }}>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Job Title</Typography>
              <TextField
                label={"Job title"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="jobTitle"
                onChange={(e) =>
                  setWorkExperience((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Company</Typography>
              <TextField
                label={"company"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="company"
                onChange={(e) =>
                  setWorkExperience((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Start Date</Typography>
              <TextField
                type="date"
                sx={{ width: "100%", minWidth: "200px" }}
                name="startDate"
                onChange={(e) =>
                  setWorkExperience((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>End Date</Typography>
              <TextField
                type="date"
                sx={{ width: "100%", minWidth: "200px" }}
                name="endDate"
                onChange={(e) =>
                  setWorkExperience((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Country</Typography>
              <TextField
                label={"Country"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="country"
                onChange={(e) =>
                  setWorkExperience((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </Box>
          </Box>
          <Box>
            <Box sx={{ m: "auto", width: "max-content" }}>
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
                  ml: "10px",
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
