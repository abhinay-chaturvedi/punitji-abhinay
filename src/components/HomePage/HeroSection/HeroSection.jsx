import { Box } from '@mui/material'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import HeroSectionItem from './HeroSectionItem'
import Carousel from '@/components/Carousel'
const HeroSection = () => {
  console.log("hello")
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
          <HeroSectionItem color="gray" imgUrl={"/images/hero1.jpg"}/>
          <HeroSectionItem color="green" imgUrl={"/images/hero2.jpg"}/>
          <HeroSectionItem color="Yellow" imgUrl={"/images/hero3.jpg"}/>
        </Carousel>
    </Box>
  )
}

export default HeroSection