import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Box, Stack, Typography, Button} from '@mui/material'

const WhatWeOfferCard = () => {
  return (
    <Box sx={{bgcolor: "#fff", p: "15px", borderRadius: "10px", boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%);"}}>
        <Stack gap={2}>
            <Box sx={{width: "100%", bgcolor: "#FF0000", height: "170px", borderRadius: "10px", mt: "-30px", mb: "20px", position: "relative"}}>
                <Box
                 sx={{
                    bgcolor: "#FF0000", border: "4px solid white", width: "90px", height: "90px", borderRadius: "10px",
                    transform: "skew(10deg)", position: "absolute", right:"10%", bottom: "-45px"
                }}>

                </Box>
            </Box>
            <Typography component="h3" sx={{fontWeight: "bold", color: "#031F4B", fontSize: "25px"}}>
                Business Visa
            </Typography>
            <Typography component="p" sx={{color: "gray"}}>
                There are many variations of passages available but the majority have suffered to the alteration in some form by injected.
            </Typography>
            <Button component={Link} href="#"
             sx={{
                display: "flex",
                border: "2px solid #FF0000",
                width: "max-content",
                borderRadius: "10px",
                padding: "8px 17px",
                gap: "5px",
                color: "#FF0000",
                textTransform: "capitalize",
                "&:hover": {
                    background: "#FF0000",
                    color: "#fff"
                },
                
             }}
            >
                <Typography component="p" sx={{fontWeight: "bold"}}>Learn More</Typography>
                <ArrowRightAltIcon/>
            </Button>
        </Stack>
    </Box>
  )
}

export default WhatWeOfferCard