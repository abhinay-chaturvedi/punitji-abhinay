import { Box, CardMedia } from "@mui/material";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import HeroSectionItem from "./HeroSectionItem";
import Carousel from "@/components/Carousel";
const HeroSection = () => {
  console.log("hello");
  return (
    <Box
      sx={{
        width: "100%",
        height: { lg: "80vh", md: "70vh", sm: "60vh", xs: "45vh" },
        bgcolor: "blue",
      }}
    >
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
      {/* <Carousel>
          <HeroSectionItem color="gray" imgUrl={"/images/hero1.jpg"}/>
          <HeroSectionItem color="green" imgUrl={"/images/hero2.jpg"}/>
          <HeroSectionItem color="Yellow" imgUrl={"/images/hero3.jpg"}/>
        </Carousel> */}
      <CardMedia
        sx={{ height: "100%", width: "100%", objectFit: "fill" }}
        component="video"
        // className={classes.media}
        image={"http://localhost:5000/uploads/admin/1703866877212-30.mp4"}
        autoPlay
        loop
        // controls
      />
    </Box>
  );
};

export default HeroSection;
