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
                    <WhatWeOfferCard/>
                </Grid>
                <Grid item sm={5.7} md={3.7}>
                    <WhatWeOfferCard/>
                </Grid>
                <Grid item  sm={5.7} md={3.7}>
                    <WhatWeOfferCard/>
                </Grid>
                <Grid item sm={5.7}  md={3.7}>
                    <WhatWeOfferCard/>
                </Grid>
                <Grid item sm={5.7}  md={3.7}>
                    <WhatWeOfferCard/>
                </Grid>
                <Grid item sm={5.7}  md={3.7}>
                    <WhatWeOfferCard/>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default WhatWeOffer