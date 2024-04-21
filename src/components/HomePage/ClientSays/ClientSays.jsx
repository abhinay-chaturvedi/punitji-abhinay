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
                    <ClientSaysCard clientName={"Rahul"} imgUrl={"/images/amit.jpg"} message={"I couldn't be more grateful for the exceptional service provided by HHH immigration. From the initial consultation to the successful acquisition of my work visa, every step was smooth and efficient. Special thanks to Harsimran sir for his invaluable guidance throughout the process."}/>
                    <ClientSaysCard clientName={"Chinmay"} imgUrl={"/images/anjali.jpg"} message={"Highly recommend this agency for anyone seeking immigration services. Their team is professional, knowledgeable, and dedicated to achieving the best outcomes for their clients. I'm now happily settled in my new country, all thanks to the efforts of Priya ma'am and the entire team."}/>
                    {/* <ClientSaysCard clientName={"Devendra singg"} imgUrl={"/images/client1.png"} message={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words."}/> */}
                    <ClientSaysCard clientName={"Prerna"} imgUrl={"/images/sarnesh.jpg"} message={"I had a fantastic experience with this immigration consultancy. They made the daunting process of obtaining a family visa surprisingly simple and stress-free. A big shoutout to Harsimran sir for his patience and expertise. I wouldn't hesitate to recommend them to anyone in need of immigration assistance."}/>
                    {/* <ClientSaysCard clientName={"Ram kumar"} imgUrl={"/images/client1.png"} message={"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words."}/> */}
                    <ClientSaysCard clientName={"Ankita"} imgUrl={"/images/anuj.jpg"} message={"Five stars all around for this excellent immigration service! I was impressed by their attention to detail and personalized approach. Thanks to the expert guidance of Simran sir, I was able to secure my skilled worker visa without any hassle. Definitely the go-to agency for all immigration needs."}/>
                    <ClientSaysCard clientName={"Aayush"} imgUrl={"/images/anuj.jpg"} message={"I can't thank this agency enough for their unwavering support throughout my visa application process. From the initial assessment to the final approval, they were with me every step of the way. Special thanks to ma'am for her professionalism and dedication. I wholeheartedly recommend their services to anyone looking to make their immigration dreams a reality."}/>
                    <ClientSaysCard clientName={"Kritika"} imgUrl={"/images/anuj.jpg"} message={"I had an outstanding experience with this immigration consultancy firm. Their team demonstrated unparalleled expertise and commitment in helping me obtain my student visa.I highly recommend their services to anyone seeking reliable immigration assistance."}/>
                </Carousel>
            </Box>
        </Container>
    </Box>
  )
}

export default ClientSays