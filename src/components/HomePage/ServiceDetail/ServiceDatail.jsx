import { Container, Grid } from '@mui/material'
import React from 'react'
import ServiceDetailCard from './ServiceDetailCard'

const ServiceDatail = () => {
  return (
    <Container sx={{}}>
        <Grid container rowGap={5} justifyContent="space-between">
            <Grid item sm={5.6} md={3.7}>
                <ServiceDetailCard title = "Solving Complex Challenges" desc="HHH will help you to solve any complexity or challange for visa processing" imgUrl={"/images/v1.jpeg"}/>
            </Grid>
            <Grid item sm={5.6} md={3.7}>
                <ServiceDetailCard title="Ready-To-Work Immigration Force" desc = "The HHH team will help you to process the visa as soon as possible for your benefit" imgUrl={"/images/v2.jpeg"}/>
            </Grid>
            <Grid item sm={5.6} md={3.7}>
                <ServiceDetailCard title="Reliable Taskings Apply Visa" desc="The Most Trusted Immigration and Visa Consultant. There are locations in the United states of america as well as internationally. The organization was established in 2000 on the basis of a small idea conceived by its promoters! We assist applicants in navigating the immigration process to any country in which they choose to live." imgUrl={"/images/v3.jpeg"}/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ServiceDatail