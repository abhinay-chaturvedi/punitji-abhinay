import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
const StaticCard = ({ title, name, value }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(value);
  const [editedValue, setEditedValue] = useState(value);
  return (
    <Box
      sx={{
        minWidth: {md: "320px"},
        flex: "1",
        bgcolor: "lightgray",
        borderRadius: "5px",
        p: "5px",
        mb: "5px",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>

      {name == "isVerified" ? (
        <Typography sx={{color: value? "green": "red"}}>{text?"Congratulations! You are verified.": "Verification pending..."}</Typography>
      ) : (
        <Typography>{text}</Typography>
      )}
    </Box>
  );
};

export default StaticCard;
