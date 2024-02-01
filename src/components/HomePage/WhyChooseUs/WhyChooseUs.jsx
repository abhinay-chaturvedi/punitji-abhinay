import React from "react";
import { Box, Grid, Container, Typography, CardMedia } from "@mui/material";
import WhyChooseUsDetail from "./WhyChooseUsDetail";
import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <WhyChooseUsDetail />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ height: { xs: "400px", md: "auto" } }}
          >
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              {/* <Image src={"/images/director.png"} layout="fill"/>
               */}
              <CardMedia
                sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                component="video"
                // className={classes.media}
                autoPlay
                loop
                // controls
                muted
                image={
                  "https://upload.hhhimmigration.com/uploads/admin/1703922279234-Final%20Comp%20(1).mp4"
                }
                
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
