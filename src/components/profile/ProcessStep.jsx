import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const ProcessStep = ({ color, title }) => {
  return (
    <Box>
       <Box
        sx={{
         display: "flex",
         flexDirection: "column",
         alignItems: "center"
        }}
       >
        <Circle color = {color}/>
        <Rectagle color = {color}/>
        <ArrowDropDownIcon sx = {{color: color, fontWeight: "bold", fontSize: "35px"}}/>
        <Typography sx={{fontWeight: "bold", padding: "0 5px"}}>{title}</Typography>
       </Box>
    </Box>
  )
}

export default ProcessStep

const Circle = ({ color }) => {
    return (
        <Box
         sx={{
            width: 60, 
            height: 60,
            marginY: "-4px", 
            border: `8px solid ${color}`,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: 3.5
         }}
        >
            <Typography sx={{fontWeight: "bold", mb: 0}}>Step</Typography>
            <Typography sx={{fontWeight: "bold"}}>1</Typography>
        </Box>
    )
}
const Rectagle = ({ color }) => {
    return (
        <Box sx={{height: 9, width: "100%", bgcolor: color}}></Box>
    )
}