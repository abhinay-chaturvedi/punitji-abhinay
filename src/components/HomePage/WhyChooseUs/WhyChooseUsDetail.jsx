import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
const WhyChooseUsDetail = () => {
  return (
    <Box sx={{bgcolor: "#ebebe9"}}>
        <Stack sx={{p: "20px"}} gap={2}>
            <Typography component="h3" sx={{color: "", fontSize: "20px", fontWeight: "bold", textTransform: "uppercase"}}>Why Choose Us</Typography>
            <Typography component="h2" sx={{color: "", fontSize: {xs: "25px", md:"40px"}, fontWeight: "bold"}}>We Build The Dream With Passion For You</Typography>
            <Typography component="span" sx={{color: ""}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Typography>
            <Stack gap={2}>
                <Stack flexDirection="row" alignItems={"center"}>
                    {/* <Box sx={{border: "2px solid ", borderRadius: "50%"}}></Box> */}
                    <Box>
                        <Typography component="h4" sx={{color: "", fontWeight: "bold", mb: "3px"}}>Accurate Guidance</Typography>
                        <Typography component="span" sx={{color: ""}}>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected.</Typography>
                    </Box>
                </Stack>
                <Stack flexDirection="row" alignItems={"center"}>
                    {/* <Box sx={{border: "2px solid ", borderRadius: "50%"}}></Box> */}
                    <Box>
                        <Typography component="h4" sx={{color: "", fontWeight: "bold", mb: "3px"}}>Accurate Guidance</Typography>
                        <Typography component="span" sx={{color: ""}}>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected.</Typography>
                    </Box>
                </Stack>
                <Stack flexDirection="row" alignItems={"center"}>
                    {/* <Box sx={{border: "2px solid ", borderRadius: "50%"}}></Box> */}
                    <Box>
                        <Typography component="h4" sx={{color: "", fontWeight: "bold", mb: "3px"}}>Accurate Guidance</Typography>
                        <Typography component="span" sx={{color: ""}}>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected.</Typography>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    </Box>
  )
}

export default WhyChooseUsDetail