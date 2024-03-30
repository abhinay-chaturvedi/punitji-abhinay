"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import dayjs from "dayjs";
const Card = ({ title, label, value, userId }) => {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [text, setText] = useState(value);
  const [disabled, setDisabled] = useState(false);
  const handleSave = async () => {

    try {
        setDisabled(true);
        const res = await fetch("/api/client/spouseDetails", {
            method: "PUT",
            "Content-Type": "application/json",
            "Accept": "application/json",
            body: JSON.stringify({value: inputValue, field: title, userId: userId})
        })
        const result = await res.json();
        
        if(result.status == 200) {
            setText(result.data[title]);
        }
        setEdit(false);
        setDisabled(false);
    } catch(err) {
        console.log(err);
        setDisabled(false);
    }
  }
  return (
    <Box
      sx={{
        bgcolor: "whitesmoke",
        flex: "1",
        minWidth: {md: "300px"},
        p: "10px",
        borderRadius: "5px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, .24)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>{label}</Typography>
        <Box>
          {edit == false ? (
            <Button onClick={() => setEdit(true)} sx={{ bgcolor: "gray", color: "black", p: "4px 6px" }}>
              <ModeEditOutlineIcon />
              <Typography>edit</Typography>
            </Button>
          ) : (
            <Button onClick={() => setEdit(false)} 
            sx={{ bgcolor: "gray", color: "black", p: "4px 6px" }}>cancel</Button>
          )}
        </Box>
      </Box>
      <Box sx={{ width: "100%", mt: "5px" }}>
        {edit == true ? (
          <Box>
            <TextField
              sx={{ p: "0px", width: "100%" }}
              inputProps={{ style: { padding: "10px" } }}
              value={inputValue?inputValue: ""}
              onChange={(e) => setInputValue(e.target.value)}
              type={title=="dob"? "date": (title=="email"? "email": "text")}
            />
            <Button
              onClick={handleSave}
              sx={{
                display: "block",
                m: "auto",
                mt: "4px",
                bgcolor: "gray",
                color: "black",
              }}
              disabled={disabled}
            >
              save
            </Button>
          </Box>
        ) : (
          <Typography>{text? (title=="dob"? dayjs(text).format("YYYY-MM-DD"): text): "NA"}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Card;
