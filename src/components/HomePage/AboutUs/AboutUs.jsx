import React from 'react'
import AboutUsDetail from './AboutUsDetail'
import {Box, Container, Grid} from '@mui/material'
import Image from 'next/image'
const AboutUs = () => {
    return (
    <Container sx={{}}>
        <Grid container>
            <Grid sx={{width: "100%", minHeight: 300, paddingRight: {xs: 0, md: 3}}} item md={5.5} paddingRight={3}>
                <Box sx={{width: "100%", height: "100%", position: "relative"}}>
                  <Image style={{borderRadius: "10px"}} layout={'fill'} objectFit="cover" src={"/images/1.jpg"}/>
               </Box>
            </Grid>
            <Grid item md={6}>
                <AboutUsDetail/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default AboutUs