'use client'
import { Box } from '@mui/material'
import React, { use } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
const Carousel = ({children, ...props}) => {
    console.log("---------------->", props);
    console.log("---------------->", children);
    const [emblaRef] = useEmblaCarousel({loop: true});
  return (
    <Box
     sx={{overflow: "hidden"}}
     ref={emblaRef}
    >
        <Box sx={{display: "flex"}}>
            {children}
        </Box>
    </Box>
  )
}

export default Carousel