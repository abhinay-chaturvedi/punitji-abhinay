import { Box, Container } from '@mui/material'
import React from 'react'

const Analytics = () => {
  return (
    <Box>
        <Container>
            <Box sx={{"&::before":{opacity: .7, background: "#FF0000", position: "absolute", width: "100%", height: "100%", content: '""', borderRadius: "10px"}, borderRadius: "10px", position: "relative",backgroundImage: "url(https://live.themewild.com/visapos/assets/img/counter/01.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",}}>
                hi
            </Box>
        </Container>
    </Box>
  )
}

export default Analytics