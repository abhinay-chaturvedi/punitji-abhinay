import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
const animation1 = {
  "0%": {transform: "scale(1)"},
  "100%": {transform: "scale(1.1)"}
}
const HeroSectionItem = ({color, imgUrl}) => {
  return (
    <Box sx={{ "@keyframes updown": animation1,overflow: "hidden", width: "100vw",flex: "1 0 100%", position: "relative", background: "blur", height: "100vh","&::before":{ background: "rgba(0,0,0,.65)", position: "absolute", width: "100%", height: "100%", content: '""', borderRadius: "10px", zIndex: 1}}}>
      <Image sizes="100vw" width={0} height={0} style={{animation: "updown 3s ease-in-out infinite alternate",width: "100%", height: "100%",  }}  src={imgUrl}/>
    </Box>
  )
}

export default HeroSectionItem
