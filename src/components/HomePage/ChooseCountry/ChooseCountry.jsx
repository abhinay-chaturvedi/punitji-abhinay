import Carousel from '@/components/Carousel'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ChooseCountryCard from './ChooseCountryCard'

const ChooseCountry = () => {
  return (
    <Box sx={{bgcolor: "#EFF2F5", width: "100%"}}>
        <Container>
            <Box sx={{textAlign: "center"}}>
                <Typography sx={{color: "#FF0000", fontSize: "18px", fontWeight: "bold", textTransform: "uppercase"}}>Country</Typography>
                <Typography sx={{fontWeight: "bold", fontSize: {md: "35px",lg: "48px", xs: "25px", color: "#031F4B"}}}>Choose Your Country</Typography>
            </Box>
            <Box>
                <Carousel>
                    <ChooseCountryCard imgUrl={"/images/count1.jpeg"}/>
                    <ChooseCountryCard imgUrl={"/images/count2.jpg"}/>
                    <ChooseCountryCard imgUrl={"/images/count3.jpg"}/>
                    <ChooseCountryCard imgUrl={"/images/count4.jpg"}/>
                    <ChooseCountryCard imgUrl={"/images/count5.jpg"}/>
                    <ChooseCountryCard imgUrl={"/images/count6.jpg"}/>
                </Carousel>
            </Box>
        </Container>
    </Box>
  )
}

export default ChooseCountry