"use client";
import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import WhatWeOfferCard from "./WhatWeOfferCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const WhatWeOffer = () => {
  // const matches = useMediaQuery()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ bgcolor: "#EFF2F5",paddingY: "20px", width: "100%" }}>
      <Container>
        <Box sx={{ mb: "30px", textAlign: "center" }}>
          <Typography
            component="span"
            sx={{
              color: "#FF0000",
              fontWeight: "bold",
              fontSize: "18px",
              textTransform: "uppercase",
            }}
          >
            Visa Type
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "#031F4B",
              fontWeight: "bold",
              textTransform: "capitalize",
              fontSize: matches ? "45px" : "35px",
            }}
          >
            What We Offers
          </Typography>
        </Box>
        <Grid container rowGap={5} justifyContent="space-between">
          <Grid item sm={5.7} md={3.7}>
            <WhatWeOfferCard
              title="Transit Visa"
              desc="Swift transit visas for seamless journeys! Hassle-free processing, reliable service. Your gateway to smooth travel. Apply now for stress-free transit experiences!"
              imgUrl={"/images/2.jpg"}
              iconUrl={"/images/3.jpeg"}
            />
          </Grid>
          <Grid item sm={5.7} md={3.7}>
            <WhatWeOfferCard
              title="Student Visa"
              desc="Unlock your academic journey with our seamless Study Visa service. Expert guidance, hassle-free process. Your gateway to education awaits!"
              imgUrl={"/images/4 pic.jpg"}
              iconUrl={"/images/icon1.jpeg"}
            />
          </Grid>
          <Grid item sm={5.7} md={3.7}>
            <WhatWeOfferCard
              title="Visitor Visa"
              desc="Explore hassle-free visitor visa services! Fast approvals, expert guidance. Your gateway to memorable journeys. Book now for a seamless experience!"
              imgUrl={"/images/3pic.jpg"}
              iconUrl={"/images/icon2.jpeg"}
            />
          </Grid>
          <Grid item sm={5.7} md={3.7}>
            <WhatWeOfferCard
              title="Spouse Visa"
              desc="Streamlined spouse visa services: Hassle-free application process, expert guidance, and prompt approvals. Unlock your journey together. Trust us for seamless reunions."
              imgUrl={"/images/6pic.jpg"}
              iconUrl={"/images/3.jpeg"}
            />
          </Grid>
          <Grid item sm={5.7} md={3.7}>
            <WhatWeOfferCard
              title="Working Visa"
              desc="Unlock global opportunities with our seamless working visa services. Navigate the complexities effortlessly, ensuring a smooth journey to your dream job abroad"
              imgUrl={"/images/4.jpg"}
              iconUrl={"/images/icon1.jpeg"}
            />
          </Grid>
          <Grid item sm={5.7} md={3.7}>
            <WhatWeOfferCard
              title="Business Visa"
              desc="Unlock global opportunities with our streamlined Business Visa service. Seamless application process, expert guidance. Your gateway to success awaits."
              imgUrl={"/images/canada-business-visa.jpg"}
              iconUrl={"/images/icon2.jpeg"}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeOffer;
