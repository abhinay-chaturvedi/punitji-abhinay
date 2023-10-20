import { Box, Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ChooseCountryCard = () => {
  return (
    <Box sx={{flex: {md: "0 0 31%", sm: "0 0 46%", xs: "0 0 100%"}, mr: {md: "calc(7%/3)", sm: "calc(8%/2)", xs: "10px"}, borderRadius: "10px", bgcolor: "white", p: "10px"}}>
        <Stack gap={2} alignItems="center">
            <Box sx={{width: "100%", height: "150px", bgcolor: "green", borderRadius: "10px"}}>
            </Box>
            <Typography sx={{fontWeight: "bold", textTransform: "uppercase", color: "#031F4B", fontSize: "18px"}}>India</Typography>
            <Typography sx={{color: "gray"}}>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words.</Typography>
            
            <Button
             component={Link} 
             href='#'
             sx={{width: "max-content", p: "5px", color: "#031F4B"}}
            >
                <Typography sx={{fontWeight: "bold", textTransform: "capitalize"}}>Read More</Typography>
                <ArrowRightAltIcon/>
            </Button>
        </Stack>
    </Box>
  )
}

export default ChooseCountryCard