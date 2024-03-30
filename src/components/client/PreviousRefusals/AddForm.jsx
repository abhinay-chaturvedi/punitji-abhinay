import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const AddForm = ({userId, setRefusalList, updateProfile}) => {
  const [add, setAdd] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [refusal, setRefusal] = useState({
        country: null,
        year: null,
        fileCategory: null,
        reason: null,
        caipsNotes: null
    })
const handleAdd = async () => {
    try { 
        if(!refusal.country) {
            setError("Please enter the country");
            return ;
        }
        if(!refusal.year) {
            setError("Please enter year");
            return ;
        }
        if(!refusal.fileCategory) {
            setError("Please  enter File category");
            return ;
        }
        if(!refusal.reason) {
            setError("Please enter reason");
            return ;
        }
        if(!refusal.caipsNotes) {
            setError("Please enter CAIPS NOTES");
            return ;
        }
        setDisabled(true);
        // const res = await fetch("/api/client/spouseDetails", {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({userId: userId, field: "workExperience", value: workExperience})
        // })
        // const result = await res.json();
        const result = await updateProfile(userId, "previousRefusal", refusal);
        // console.log("🚀 ~ handleAdd ~ result:", result)
        if(result.status == 200) {
            setRefusalList(result.data.previousRefusal);
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
              <Typography>Country</Typography>
              <TextField
                label={"Country"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="country"
                onChange={(e) =>
                  setRefusal((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Year</Typography>
              <TextField
                label={"Year"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="year"
                onChange={(e) =>
                  setRefusal((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>File Category</Typography>
              <TextField
                // type="date"
                sx={{ width: "100%", minWidth: "200px" }}
                name="fileCategory"
                onChange={(e) =>
                  setRefusal((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Reason</Typography>
              <TextField
                // type="date"
                sx={{ width: "100%", minWidth: "200px" }}
                name="reason"
                onChange={(e) =>
                  setRefusal((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>CAIPS Notes</Typography>
              <TextField
                label={"CAIPS Notes"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="caipsNotes"
                onChange={(e) =>
                  setRefusal((prev) => ({
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
}

export default AddForm