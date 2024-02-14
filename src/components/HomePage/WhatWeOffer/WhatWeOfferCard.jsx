import Link from "next/link";
import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Stack, Card, Typography, Button } from "@mui/material";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRef } from "react";
import { useEffect } from "react";

const tableContent = [
  {
    link: "/visa/country/visatype",
    name: "PR Visa",
  },
];
const WhatWeOfferCard = ({ country, imgUrl, cardContent = [] }) => {
  const [open, setOpen] = useState(false);
  console.log("🚀 ~ WhatWeOfferCard ~ open:", open)
  // mouseMoveRef = createRef();
  const mouseMoveRef = useRef(null);
  const checkHover = (e) => {
    if (mouseMoveRef.current) {
      // const { isHovering } = this.state;
      const mouseOver = mouseMoveRef.current.contains(e.target);
      if (!open && mouseOver) {
        // this.setHover();
        setOpen(true)
      }

      if (open && !mouseOver) {
        // this.setUnhover();
        setOpen(false);
      }
    }
  }
  useEffect(() => {
    window.addEventListener("mousemove", checkHover, true);
    return () => window.removeEventListener("mousemove", checkHover, true);
  }, []);
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
        opacity: "100"
      }}
      component={"div"}
      ref={mouseMoveRef}
      onMouseEnter={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
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
      {!open && <Box
        sx={{
          position: "absolute",
          // "&:hover": { display: "none" },
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
          alt=""
        />
      </Box>}
    </Box>
  );
};

export default WhatWeOfferCard;
