"use client";
import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import WhatWeOfferCard from "./WhatWeOfferCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  australiaVisaList,
  canadaVisaList,
  germanyVisaList,
  uaeVisaList,
  ukVisaList,
  usaVisaList,
} from "./data";
const WhatWeOffer = () => {
  // const matches = useMediaQuery()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        bgcolor: "whitesmoke",
        paddingY: "20px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          height: "760px",
          width: "760px",
          left: "-715px",
          borderRadius: "10%",
          position: "absolute",
          border: "16px solid #fff",
          boxShadow: "0 0 10px gray, 0 0 10px gray inset",
        }}
      ></Box>
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          height: "760px",
          width: "760px",
          right: "-715px",
          borderRadius: "10%",
          position: "absolute",
          border: "16px solid #fff",
          boxShadow: "0 0 10px gray, 0 0 10px gray inset",
        }}
      ></Box>

      <Container>
        <Box sx={{ mb: "30px", textAlign: "center" }}>
          <Typography
            component="span"
            sx={{
              color: "#808080",
              fontWeight: "bold",
              fontSize: "18px",
              textTransform: "uppercase",
            }}
          >
            Visa Type
          </Typography>
          <Box sx={{bgcolor: "black", borderRadius: "7px", width: "max-content", margin: "auto", p: "0px 10px"}}>
            <Typography
              component="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                textTransform: "capitalize",
                fontSize: matches ? "35px" : "25px",
              }}
            >
              What We Offers
            </Typography>
          </Box>
        </Box>
        <Grid container rowGap={5} justifyContent="space-between">
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard
              country="canada"
              imgUrl={"/images/Canada.png"}
              cardContent={canadaVisaList}
            />
          </Grid>
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard
              country={"australia"}
              imgUrl={"/images/Australia.png"}
              cardContent={australiaVisaList}
            />
          </Grid>
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard
              country={"usa"}
              imgUrl={"/images/USA.png"}
              cardContent={usaVisaList}
            />
          </Grid>
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard
              country={"uk"}
              imgUrl={"/images/UK.png"}
              cardContent={ukVisaList}
            />
          </Grid>
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard
              country={"uae"}
              imgUrl={"/images/UAE.png"}
              cardContent={uaeVisaList}
            />
          </Grid>
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard
              country={"germany"}
              imgUrl={"/images/Germany.png"}
              cardContent={germanyVisaList}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeOffer;
