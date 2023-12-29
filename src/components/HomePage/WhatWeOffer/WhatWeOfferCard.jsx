import Link from "next/link";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Stack, Card, Typography, Button } from "@mui/material";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const tableContent = [
  {
    link: "/visa/country/visatype",
    name: "PR Visa",
  },
];
const WhatWeOfferCard = ({ country, imgUrl, cardContent = [] }) => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        p: "25px",
        height: "100%",
        minHeight: "300px",
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%);",
        position: "relative",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "gray",
            mb: "10px",
          }}
        >
          {country}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {cardContent.map((item, i) => {
          return (
            <Box
              key={i}
              component={Link}
              href={item.link}
              sx={{ display: "flex", gap: "5px" }}
            >
              <KeyboardArrowRightIcon />
              <Typography>{item.name}</Typography>
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          position: "absolute",
          "&:hover": { display: "none" },
          height: "100%",
          top: 0,
          left: 0,
          width: "100%",
          bgcolor: "whitesmoke",
        }}
      >
        <Image
          style={{ borderRadius: "10px" }}
          layout={"fill"}
          // objectFit="contain"
          src={imgUrl}
        />
      </Box>
    </Box>
  );
};

export default WhatWeOfferCard;
