import { Alert, Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddForm = ({userId, setLanguageList}) => {
    const [add, setAdd] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(null);
    const [language, setLanguage] = useState({
        type: null,
        speaking: null,
        listening: null,
        reading: null,
        writing: null,
        overall: null
    })
    const handleAdd = async () => {
        try {
            if(!language.type) {
                setError("Please select type first");
                return ;
            }
            if(!language.speaking) {
                setError("Please add speaking score");
                return ;
            }
            if(!language.listening) {
                setError("Please add listening score");
                return ;
            }
            if(!language.reading) {
                setError("Please add reading score");
                return ;
            }
            if(!language.writing) {
                setError("Please add writing score");
                return ;
            }
            if(!language.overall) {
                setError("Please add overall score");
                return ;
            }
            setDisabled(true);
            const res = await fetch("/api/client/spouseDetails", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "applicatin/json"
                },
                body: JSON.stringify({userId: userId, field: "language", value: language})
            })
            const result = await res.json();
            if(result.status == 200) {
                setLanguageList(result.data.language);
                setAdd(false);
            }
            setDisabled(false);
        } catch(err) {
            console.log(err);
            setDisabled(false);
        }
    }
  return (
    <Box>
        {add == true ? (
        <Box>
          {error && (<Alert severity="error" sx={{mt: "6px"}} onClose={() => setError(null)}>{error}</Alert>)}
          <Box sx={{ display: { md: "flex" }, flexWrap: "wrap" }}>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Select Type</Typography>
              <TextField
                sx={{ width: "100%", minWidth: "200px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language.type ? language.type : ""}
                label="Type"
                name="type"
                onChange={(e) => {
                  setLanguage((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                  // setError(null);
                }}
                select
              >
                <MenuItem value={"IELTS"}>IELTS</MenuItem>
                <MenuItem value={"CELPIP"}>CELPIP</MenuItem>
                <MenuItem value={"PTE"}>PTE</MenuItem>
                <MenuItem value={"FRENCH"}>FRENCH</MenuItem>
              </TextField>
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Speaking Score</Typography>
              <TextField
                type= "number"
                label={"score"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="speaking"
                onChange={(e) => setLanguage((prev) => ({...prev, [e.target.name]: e.target.value}))}
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Listening score</Typography>
              <TextField
                type= "number"
                label={"score"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="listening"
                onChange={(e) => setLanguage((prev) => ({...prev, [e.target.name]: e.target.value}))}
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Reading score</Typography>
              <TextField
                type= "number"
                label= "score"
                sx={{ width: "100%", minWidth: "200px" }}
                name="reading"
                onChange={(e) => setLanguage((prev) => ({...prev, [e.target.name]: e.target.value}))}
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Writing score</Typography>
              <TextField
                type= "number"
                label="score"
                sx={{ width: "100%", minWidth: "200px" }}
                name="writing"
                onChange={(e) => setLanguage((prev) => ({...prev, [e.target.name]: e.target.value}))}
              />
            </Box>
            <Box sx={{ flex: 1, m: "5px" }}>
              <Typography>Overall score</Typography>
              <TextField
                type= "number"
                label={"score"}
                sx={{ width: "100%", minWidth: "200px" }}
                name="overall"
                onChange={(e) => setLanguage((prev) => ({...prev, [e.target.name]: e.target.value}))}
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
  )
}

export default AddForm