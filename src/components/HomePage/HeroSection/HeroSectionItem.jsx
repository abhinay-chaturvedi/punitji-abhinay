import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
const animation1 = {
  "0%": {transform: "scale(1)"},
  "100%": {transform: "scale(1.1)"}
}
const HeroSectionItem = ({color, imgUrl}) => {
  return (
    <Box sx={{ "@keyframes updown": animation1,overflow: "hidden", width: "100vw",flex: "1 0 100%", position: "relative", height: "100vh"}}>
      <Image sizes="100vw" width={0} height={0} style={{animation: "updown 3s ease-in-out infinite alternate",width: "100%", height: "100%",  }}  src={imgUrl}/>
    </Box>
  )
}

export default HeroSectionItem
