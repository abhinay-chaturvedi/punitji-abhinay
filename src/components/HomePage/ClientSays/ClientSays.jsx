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
                    <ClientSaysCard clientName={"Amit kumar"} imgUrl={"/images/amit.jpg"} message={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words."}/>
                    <ClientSaysCard clientName={"Anjali"} imgUrl={"/images/anjali.jpg"} message={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words."}/>
                    {/* <ClientSaysCard clientName={"Devendra singg"} imgUrl={"/images/client1.png"} message={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words."}/> */}
                    <ClientSaysCard clientName={"Sarnesh"} imgUrl={"/images/sarnesh.jpg"} message={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words."}/>
                    {/* <ClientSaysCard clientName={"Ram kumar"} imgUrl={"/images/client1.png"} message={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words."}/> */}
                    <ClientSaysCard clientName={"Anuj kumar"} imgUrl={"/images/anuj.jpg"} message={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words."}/>
                </Carousel>
            </Box>
        </Container>
    </Box>
  )
}

export default ClientSays