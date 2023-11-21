import { Container, Grid } from '@mui/material'
import React from 'react'
import ServiceDetailCard from './ServiceDetailCard'

const ServiceDatail = () => {
  return (
    <Container sx={{}}>
        <Grid container rowGap={5} justifyContent="space-between">
            <Grid item sm={5.6} md={3.7}>
                <ServiceDetailCard imgUrl={"/images/v1.jpeg"}/>
            </Grid>
            <Grid item sm={5.6} md={3.7}>
                <ServiceDetailCard imgUrl={"/images/v2.jpeg"}/>
            </Grid>
            <Grid item sm={5.6} md={3.7}>
                <ServiceDetailCard imgUrl={"/images/v3.jpeg"}/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ServiceDatail