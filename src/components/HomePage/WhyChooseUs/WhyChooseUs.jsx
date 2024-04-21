import React from "react";
import { Box, Grid, Container, Typography, CardMedia } from "@mui/material";
import WhyChooseUsDetail from "./WhyChooseUsDetail";
import Image from "next/image";
import zIndex from "@mui/material/styles/zIndex";
const WhyChooseUs = () => {
  return (
    <Box sx={{ bgcolor: "white", position: "relative", py: "50px" }}>
      {/* <Box sx={{ position: "relative", height: "514px", width: "100%"}}> */}
      <Image
        // style={{zIndex: -1}}
        layout="fill"
        objectFit="cover"
        src={"/images/choose-us-background.png"}
      />
      <Box sx={{position: "relative", display: {xs: "none", lg: "block"}}}>
        <Image
          style={{ zIndex: 3, top: -10, position: "absolute" }}
          width={600}
          height={630}
          // layout="fill"
          objectFit="cover"
          src={"/images/choose-us-rect.png"}
        />
      </Box>

      {/* </Box> */}
      <Container>
        <Grid container>
          <Grid
            sx={{
              zIndex: 10,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            item
            xs={12}
            md={6.5}
          >
            <WhyChooseUsDetail />
          </Grid>
          <Grid
            item
            xs={12}
            md={5.5}
            // sx={{ height: { xs: "400px", md: "auto" } }}
          >
            <Box
              sx={{
                width: "100%",
                height: "600px",
                perspective: "1000px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  perspective: "1000px",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderLeft: "13px solid lightgray",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  boxShadow:
                    "2px 0px 0px 0px lightgray inset, -2px 0px 0px 0px lightgray",
                }}
              >
                <Box
                  sx={{
                    marginTop: "110px",
                    border: "15px solid white",
                    boxShadow:
                      "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px, rgba(100, 100, 111, 0.2) 0px 7px 29px 0px inset",
                    borderRadius: "115px",
                    transform: "translate3d(-20px, 0px, 20px)",
                    height: "70%",
                    width: { xs: "80%", md: "60%" },
                  }}
                ></Box>
              </Box>
              <Image
                style={{ transform: "translateX(-20px)" }}
                layout={"fill"}
                objectFit="contain"
                src={"/images/Harsimran.png"}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "80%",
                  bgcolor: "white",
                  display: "block",
                  bottom: 0,
                  left: "10%",
                  m: "auto",
                  p: "5px",
                  color: "black",
                  borderRadius: "5px",
                  boxShadow: "1px 0px 4px lightgray",
                  "&:hover": {
                    // bgcolor: "black"
                    transform: "scale(1.2)",
                    translate: "10px",
                  },
                }}
              >
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
                  CEO HARSIMRAN SINGH MTECH.
                </Typography>
                <Typography sx={{ textAlign: "center" }}>
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
