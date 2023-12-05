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
    <Box sx={{ bgcolor: "#EFF2F5", paddingY: "20px", width: "100%" }}>
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
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard country="canada" cardContent={canadaVisaList} />
          </Grid>
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard
              country={"australia"}
              cardContent={australiaVisaList}
            />
          </Grid>
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard country={"usa"} cardContent={usaVisaList} />
          </Grid>
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard country={"uk"} cardContent={ukVisaList} />
          </Grid>
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard country={"uae"} cardContent={uaeVisaList} />
          </Grid>
          <Grid item xs={12} sm={5.7} md={3.7}>
            <WhatWeOfferCard
              country={"germany"}
              cardContent={germanyVisaList}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeOffer;
