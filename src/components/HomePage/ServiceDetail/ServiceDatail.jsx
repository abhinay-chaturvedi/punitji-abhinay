import { Container, Grid } from '@mui/material'
import React from 'react'
import ServiceDetailCard from './ServiceDetailCard'

const ServiceDatail = () => {
  return (
    <Container sx={{}}>
        <Grid container rowGap={5} justifyContent="space-between">
            <Grid item sm={5.6} md={3.7}>
                <ServiceDetailCard/>
            </Grid>
            <Grid item sm={5.6} md={3.7}>
                <ServiceDetailCard/>
            </Grid>
            <Grid item sm={5.6} md={3.7}>
                <ServiceDetailCard/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ServiceDatail