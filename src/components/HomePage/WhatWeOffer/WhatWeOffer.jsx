"use client"
import React from 'react'
import {Container, Box, Grid, Typography} from "@mui/material"
import WhatWeOfferCard from './WhatWeOfferCard'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const WhatWeOffer = () => {
    // const matches = useMediaQuery()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{bgcolor: "#EFF2F5", width: "100%"}}>
        <Container >
            <Box sx={{mb:"30px", textAlign: "center"}}>
                <Typography component="span" sx={{color: "#FF0000", fontWeight: "bold", fontSize: "18px", textTransform: "uppercase"}}>Visa Type</Typography>
                <Typography component="h2" sx={{color: "#031F4B", fontWeight: "bold", textTransform: "capitalize",fontSize: matches? "45px": "35px"}}>What We Offers</Typography>
            </Box>
            <Grid container rowGap={5} justifyContent="space-between">
                <Grid item sm={5.7}  md={3.7}>
                    <WhatWeOfferCard imgUrl={"/images/2.jpg"} iconUrl={"/images/3.jpeg"}/>
                </Grid>
                <Grid item sm={5.7} md={3.7}>
                    <WhatWeOfferCard imgUrl={"/images/4 pic.jpg"} iconUrl={"/images/icon1.jpeg"}/>
                </Grid>
                <Grid item  sm={5.7} md={3.7}>
                    <WhatWeOfferCard imgUrl={"/images/3pic.jpg"} iconUrl={"/images/icon2.jpeg"}/>
                </Grid>
                <Grid item sm={5.7}  md={3.7}>
                    <WhatWeOfferCard imgUrl={"/images/6pic.jpg"} iconUrl={"/images/3.jpeg"}/>
                </Grid>
                <Grid item sm={5.7}  md={3.7}>
                    <WhatWeOfferCard imgUrl={"/images/4.jpg"} iconUrl={"/images/icon1.jpeg"}/>
                </Grid>
                <Grid item sm={5.7}  md={3.7}>
                    <WhatWeOfferCard imgUrl={"/images/canada-business-visa.jpg"} iconUrl={"/images/icon2.jpeg"}/>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default WhatWeOffer