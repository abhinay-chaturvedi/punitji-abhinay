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
        // height: { lg: "80vh", md: "70vh", sm: "60vh", xs: "45vh" },
        // bgcolor: "blue",
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
        sx={{ width: "100%", heigth: "auto", objectFit: "cover" }}
        component="video"
        // className={classes.media}
        autoPlay
        loop
        // controls
        muted
        image={"https://upload.hhhimmigration.com/uploads/admin/undefined-Main%20Slide.mp4"}
        // image={"https://upload.hhhimmigration.com/uploads/admin/1703922090069-30.mp4"}
        
      />
    </Box>
  );
};

export default HeroSection;
