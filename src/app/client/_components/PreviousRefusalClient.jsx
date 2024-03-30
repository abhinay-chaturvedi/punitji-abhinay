"use client"
import PreviousRefusals from '@/components/client/PreviousRefusals'
import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const PreviousRefusalClient = ({userId, refusals, updateProfile, session}) => {
  const [arrow, setArrow] = useState(false);
  return (
    // <PreviousRefusals  userId={userId} refusals={refusals} updateProfile={updateProfile}/>
    <Box sx={{ p: "10px", boxShadow: "2px 2px 5px 5px whitesmoke" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Previous Refusals</Typography>
          <Button onClick={() => setArrow((prev) => !prev)}>
            {arrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </Box>
        
        {arrow && (
          <PreviousRefusals session={session}  userId={userId} refusals={refusals} updateProfile={updateProfile}/>
        )
        }
      </Box>
  )
}

export default PreviousRefusalClient