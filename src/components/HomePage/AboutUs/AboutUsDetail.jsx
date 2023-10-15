'use client'
import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import Link from 'next/link';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// font-weight: 700;
//     text-transform: capitalize;
//     font-size: 48px;
//     color: #031F4B;
const AboutUsDetail = () => {
  return (
    <Box>
        <Stack gap={2}>
            <Typography component="h4" sx={{textTransform: "uppercase", fontWeight: "600", fontSize: "18px", color: "#FF0000"}}>About Us</Typography>
            <Typography component="h2" sx={(theme) => ({fontWeight: 700, fontSize: "35px",[theme.breakpoints.up('md')]: {fontSize: "48px"}, color: "#031F4B", textTransform: "capitalize"})}>We Provide Immigration And Visa Services</Typography>
            <Typography component="span" sx={{color: "gray"}}>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isn't anything embarrassing hidden in the middle of text.We Provide Immigration And Visa Services</Typography>
            <Box sx={{m: "10px 0px"}}>
                <Box sx={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center"}}>
                    <DoneIcon sx={{backgroundColor: "#FF0000", borderRadius: "50%", color: "white", fontWeight: "900", fontSize: "20px"}}/>
                    <Typography component="p" sx={{color: 'gray'}}>Take a look at our round up of the best shows</Typography>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center", margin: "10px 0px"}}>
                    <DoneIcon sx={{backgroundColor: "#FF0000", borderRadius: "50%", color: "white", fontWeight: "900", fontSize: "20px"}}/>
                    <Typography component="p" sx={{color: 'gray'}}>Take a look at our round up of the best shows</Typography>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row", gap: "15px", alignItems: "center"}}>
                    <DoneIcon sx={{backgroundColor: "#FF0000", borderRadius: "50%", color: "white", fontWeight: "900", fontSize: "20px"}}/>
                    <Typography component="p" sx={{color: 'gray'}}>Take a look at our round up of the best shows</Typography>
                </Box>
            </Box>
            <Link
             href="#" 
             style={{
                color: "#ffffff", 
                padding: "7px 8px 7px 18px", 
                cursor: "pointer", 
                background: "#FF0000",
                borderRadius: "10px",
                boxShadow: "0 3px 24px rgb(0 0 0 / 10%)",
                zIndex: 1,
                display: "flex",
                width: "max-content",
                gap: "8px",
                alignItems: "center"
            }}>
                <Typography sx={{fontWeight: "600", textTransform: "uppercase", fontSize: "16px", }}>Discover More</Typography>
                <ArrowCircleRightIcon sx={{height: "36px", width: "36px"}}/>
            </Link>
        </Stack>
    </Box>
  )
}

export default AboutUsDetail