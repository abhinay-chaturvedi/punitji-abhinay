import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
const animation1 = {
  "0%": {transform: "scale(1)"},
  "100%": {transform: "scale(1.1)"}
}
const HeroSectionItem = ({color, imgUrl}) => {
  return (
    <Box sx={{ "@keyframes updown": animation1,overflow: "hidden", width: "100vw",flex: "1 0 100%", position: "relative", height: {xs:"60vh", md: "90vh"}}}>
      <Image  objectFit='cover' layout='fill' style={{animation: "updown 3s ease-in-out infinite alternate",  }}  src={imgUrl}/>
      <Box sx={{position: "absolute", bgcolor: "whitesmoke", display: "flex", justifyContent: "center",alignItems: "center", width: "100%", height: "100%", opacity: .3}}>
        <Typography sx={{fontWeight: "bold", fontSize: "30px"}}>
          Cooming Soon...
        </Typography>
      </Box>
    </Box>
  )
}

export default HeroSectionItem
