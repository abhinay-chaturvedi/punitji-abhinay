import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ServiceDetailCard = () => {
  return (
    <Box sx={{borderRadius: "10px", p: "20px", backgroundColor: "#031F4B"}}>
        <Stack gap={2}>
            <Box sx={{bgcolor: "#FF0000", width: "75px", height: "75px", borderRadius: "15px", transform: "skew(8deg)"}}></Box>
            <Typography component="h3" sx={{fontWeight: "bold", color: "white", fontSize: "22px"}}>Online Visa Application</Typography>
            <Typography component="p" sx={{color: "#fff"}}>
                There are many variations of the passages available but the majority have suffered to the alteration in some form injected humour.
            </Typography>
        </Stack>
    </Box>
  )
}

export default ServiceDetailCard