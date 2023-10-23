import React from 'react'
import AboutUsDetail from './AboutUsDetail'
import {Container, Grid} from '@mui/material'
const AboutUs = () => {
    return (
    <Container sx={{}}>
        <Grid container>
            <Grid item md={5.5}>
            </Grid>
            <Grid item md={6}>
                <AboutUsDetail/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default AboutUs