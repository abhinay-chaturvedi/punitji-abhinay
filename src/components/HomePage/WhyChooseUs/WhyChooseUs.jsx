import React from 'react'
import {Box, Grid, Container, Typography} from '@mui/material' 
import WhyChooseUsDetail from './WhyChooseUsDetail'
const WhyChooseUs = () => {
  return (
    <Box>
        <Container>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <WhyChooseUsDetail/>
                </Grid>
                <Grid item xs={12} md={6} sx={{height: {xs: "400px", md: "auto"}}}>
                    <iframe
                        id="ytplayer"
                        type="text/html"
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${"CwN7TWzsPW4"}?autoplay=0&controls=1&rel=1`}
                        frameborder="0"
                    ></iframe>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default WhyChooseUs