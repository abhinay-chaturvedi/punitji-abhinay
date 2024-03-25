"use client"
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

const VisaBar = () => {
    const router = useRouter();
    
  return (
    <Box sx={{bgcolor: "skyblue",zIndex:1000, position: "sticky", top: "85px"}}>
        <Box sx={{display: "flex", alignItems: "center", minHeight: "55px"}}>
            <Box onClick={() => document.getElementById("uk").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}  component={"a"} sx={{flex: 1,cursor: "pointer", p: "2px"}}>
                <Typography>UK</Typography>
            </Box>
            <Box sx={{width: "5px",height: "40px",m: "3px",borderRadius: "5px", bgcolor: "white"}}></Box>
            <Box onClick={() => document.getElementById("canada").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })} component={"a"} sx={{flex: 1,cursor: "pointer", p: "2px"}}>
                <Typography>CANADA</Typography>
            </Box>
            <Box sx={{width: "5px",height: "40px",m: "3px",borderRadius: "5px", bgcolor: "white"}}></Box>
            <Box onClick={() => document.getElementById("usa").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })} component={"a"} sx={{flex: 1,cursor: "pointer", p: "2px"}}>
                <Typography>USA</Typography>
            </Box>
            <Box sx={{width: "5px",height: "40px",m: "3px",borderRadius: "5px", bgcolor: "white"}}></Box>
            <Box onClick={() => document.getElementById("australia").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })} component={"a"} sx={{flex: 1,cursor: "pointer", p: "2px"}}>
                <Typography>Australia</Typography>
            </Box>
            <Box sx={{width: "5px",height: "40px",m: "3px",borderRadius: "5px", bgcolor: "white"}}></Box>
            <Box onClick={() => document.getElementById("uae").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })} component={"a"} sx={{flex: 1,cursor: "pointer", p: "2px"}}>
                <Typography>UAE</Typography>
            </Box>
            <Box sx={{width: "5px",height: "40px",m: "3px",borderRadius: "5px", bgcolor: "white"}}></Box>
            <Box onClick={() => document.getElementById("germany").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })} component={"a"} sx={{flex: 1,cursor: "pointer", p: "2px"}}>
                <Typography>Germany</Typography>
            </Box>
            {/* <Box sx={{width: "5px",height: "40px",m: "3px",borderRadius: "5px", bgcolor: "white"}}></Box> */}
        </Box>
     </Box>
  )
}

export default VisaBar