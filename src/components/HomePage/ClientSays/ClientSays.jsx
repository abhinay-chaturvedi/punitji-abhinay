import Carousel from '@/components/Carousel'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ClientSaysCard from './ClientSaysCard'


const ClientSays = () => {
  return (
    <Box sx={{bgcolor: "#EFF2F5",paddingY: "30px", width: "100%"}}>
        <Container>
            <Box sx={{textAlign: "center"}}>
                <Typography sx={{color: "#808080", fontSize: "18px", fontWeight: "bold", textTransform: "uppercase"}}>Tesimonials</Typography>
                <Typography sx={{fontWeight: "bold", fontSize: {md: "35px",lg: "48px", xs: "25px", color: ""}}}>What Client say's</Typography>
            </Box>
            <Box>
                <Carousel>
                    <ClientSaysCard/>
                    <ClientSaysCard/>
                    <ClientSaysCard/>
                    <ClientSaysCard/>
                    <ClientSaysCard/>
                    <ClientSaysCard/>
                </Carousel>
            </Box>
        </Container>
    </Box>
  )
}

export default ClientSays