import React from 'react'
import {Box, Divider, Stack, Typography} from '@mui/material'
const WhyChooseUsDetail = () => {
  return (
    <Box sx={{bgcolor: "black", borderRadius: "15px"}}>
        <Stack sx={{p: "20px"}} gap={2}>
            <Typography component="h3" sx={{color: "white", fontSize: "20px", fontWeight: "bold", textTransform: "uppercase"}}>Why Choose Us</Typography>
            <Divider sx={{bgcolor: "white"}}/>
            <Typography component="h2" sx={{color: "white", fontSize: {xs: "25px", md:"40px"}, fontWeight: "bold"}}>We Build The Dream With Passion For You</Typography>
            {/* <Typography component="span" sx={{color: ""}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography> */}
            <Stack gap={2}>
                <Stack flexDirection="row" alignItems={"center"}>
                    {/* <Box sx={{border: "2px solid ", borderRadius: "50%"}}></Box> */}
                    <Box sx={{display: "flex", gap: "3px"}}>
                        <Typography component="h4" sx={{color: "white", fontWeight: "bold", mb: "3px"}}>1)</Typography>
                        <Typography component="span" sx={{color: "white"}}>Accurate guidance, our cornerstone , ensures your journey is mapped with precision, navigating every step with clarity and assurance.</Typography>
                    </Box>
                </Stack>
                <Stack flexDirection="row" alignItems={"center"}>
                    {/* <Box sx={{border: "2px solid ", borderRadius: "50%"}}></Box> */}
                    <Box sx={{display: "flex", gap: "3px"}}>
                        <Typography component="h4" sx={{color: "white", fontWeight: "bold", mb: "3px"}}>2)</Typography>
                        <Typography component="span" sx={{color: "white"}}>Professionalism, our hallmark, ensures your aspirations are met with meticulous attention, delivering services with integrity and expertise.</Typography>
                    </Box>
                </Stack>
                <Stack flexDirection="row" alignItems={"center"}>
                    {/* <Box sx={{border: "2px solid ", borderRadius: "50%"}}></Box> */}
                    <Box sx={{display: "flex", gap: "3px"}}>
                        <Typography component="h4" sx={{color: "white", fontWeight: "bold", mb: "3px"}}>3)</Typography>
                        <Typography component="span" sx={{color: "white"}}>High success, our commitment, propel your dreams forward, achieving milestones with dedication and strategic insight, paving the path to your triumph.</Typography>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    </Box>
  )
}

export default WhyChooseUsDetail