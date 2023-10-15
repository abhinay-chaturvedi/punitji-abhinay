'use client'
import { Box } from '@mui/material'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import HeroSectionItem from './HeroSectionItem'
import Carousel from '@/components/Carousel'
const HeroSection = () => {
    const [emblaRef] = useEmblaCarousel({loop: true})
  return (
    <Box>
        {/* <Box
         sx={{overflow: "hidden"}}
         ref={emblaRef}
        >
            <Box sx={{display: "flex"}}>
                <HeroSectionItem color="gray"/>
                <HeroSectionItem color="green"/>
                <HeroSectionItem color="Yellow"/>
            </Box>
        </Box> */}
        <Carousel>
          <HeroSectionItem color="gray"/>
          <HeroSectionItem color="green"/>
          <HeroSectionItem color="Yellow"/>
        </Carousel>
    </Box>
  )
}

export default HeroSection