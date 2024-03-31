"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
const StaticCard = ({ title, name, value, session }) => {
  console.log("hi checking rerendering");
  const [isEdit, setIsEdit] = useState(false);
  // const [text, setText] = useState(value);
  const [editedValue, setEditedValue] = useState(value);
  return (
    <Box
      sx={{
        minWidth: { md: "320px" },
        flex: "1",
        bgcolor: "lightgray",
        borderRadius: "5px",
        p: "5px",
        mb: "5px",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>

      {name == "isVerified" ? (
        session.role == "PARTNER" ? (
          <Typography sx={{ color: value ? "green" : "red" }}>
            {value
              ? "Congratulations! You are verified."
              : "Verification pending..."}
          </Typography>
        ) : (
          <Typography sx={{ color: value ? "green" : "red" }}>
            {value ? "Verified" : "Verification pending..."}
          </Typography>
        )
      ) : (
        <Typography>{value}</Typography>
      )}
    </Box>
  );
};

export default StaticCard;
