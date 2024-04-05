import React from "react";
import { Box, Grid, Container, Typography, CardMedia } from "@mui/material";
import WhyChooseUsDetail from "./WhyChooseUsDetail";
import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={7}>
            <WhyChooseUsDetail />
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ height: { xs: "400px", md: "auto" } }}
          >
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              {/* <Image src={"/images/director.png"} layout="fill"/>
               */}
              {/* <CardMedia
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
                
              /> */}
              <Image
                // style={{ borderRadius: "10px" }}
                layout={"fill"}
                objectFit="contain"
                src={"/images/Harsimran.png"}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "80%",
                  bgcolor: "whitesmoke",
                  display: "block",
                  bottom: 0,
                  left: "10%",
                  m: "auto",
                  p: "5px",
                  color: "black",
                  borderRadius: "5px",
                  boxShadow: "1px 0px 4px lightgray"
                }}
              >
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
                  CEO HARSIMRAN SINGH MTECH.
                </Typography>
                <Typography sx={{textAlign: "center" }}>
                  (ENTERPRISE SYSTEM)
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
