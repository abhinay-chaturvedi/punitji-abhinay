import { Box, Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ClientSaysCard = () => {
  return (
    <Box sx={{flex: {md: "0 0 31%", sm: "0 0 46%", xs: "0 0 100%"}, mr: {md: "calc(7%/3)", sm: "calc(8%/2)", xs: "10px"}, borderRadius: "10px", bgcolor: "#dbdbdb", p: "20px"}}>
        <Stack gap={2}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography sx={{fontWeight: "bold", textTransform: "uppercase", color: "#8a8a8a", fontSize: "18px"}}>⭐⭐⭐⭐⭐</Typography>
                <Box sx={{bgcolor: "gray",width: "60px", height: "60px", border: "2px solid white", outline: "2px dotted black", borderRadius: "50%"}}></Box>
            </Box>
            <Typography sx={{color: "#1e225"}}>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words.</Typography>
            
            <Box
             sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
            >
                <Box>
                    <Typography component="p" sx={{fontWeight: "bold", fontSize: "18px", color: "", textTransform: "capitalize"}}>Simran</Typography>
                    <Typography component="p" sx={{fontWeight: "bold", color: "gray", textTransform: "capitalize"}}>Founder & CEO</Typography>
                </Box>
                <ArrowRightAltIcon/>
            </Box>
        </Stack>
        
    </Box>
  )
}

export default ClientSaysCard