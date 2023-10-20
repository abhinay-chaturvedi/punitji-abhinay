import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HeroSectionItem = ({color, imgUrl}) => {
  return (
    <Box sx={{flex: "0 0 100%", position: "relative", background: "blur", height: "100vh","&::before":{ background: "rgba(0,0,0,.65)", position: "absolute", width: "100%", height: "100%", content: '""', borderRadius: "10px"}}}>
      <Image sizes="100vw" width={0} height={0} style={{width: "100%", height: "100%",}}  src={imgUrl}/>
    </Box>
  )
}

export default HeroSectionItem