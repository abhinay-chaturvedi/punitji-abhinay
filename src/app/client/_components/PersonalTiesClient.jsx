"use client"
import PersonalTies from "@/components/client/PersonalTies";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const PersonalTiesClient = ({ userId, personalTies, updateProfile }) => {
    const [arrow, setArrow] = useState(false);
  return (
    // <Box>
    //     <PersonalTies userId={userId} personalTies={personalTies} updateProfile={updateProfile}/>
    // </Box>
    <Box sx={{ p: "10px", boxShadow: "2px 2px 5px 5px whitesmoke" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Personal Ties</Typography>
        <Button onClick={() => setArrow((prev) => !prev)}>
          {arrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Button>
      </Box>

      {arrow && (
        <PersonalTies
          userId={userId}
          personalTies={personalTies}
          updateProfile={updateProfile}
        />
      )}
    </Box>
  );
};

export default PersonalTiesClient;
