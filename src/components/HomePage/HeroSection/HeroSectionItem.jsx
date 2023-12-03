import ContactForm from "@/components/ContactForm/ContactForm";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
const animation1 = {
  "0%": { transform: "scale(1)" },
  "100%": { transform: "scale(1.1)" },
};
const HeroSectionItem = ({ color, imgUrl }) => {
  return (
    <Box
      sx={{
        "@keyframes updown": animation1,
        overflow: "hidden",
        width: "100vw",
        flex: "1 0 100%",
        position: "relative",
        height: { xs: "70vh", md: "90vh" },
      }}
    >
      <Image
        objectFit="cover"
        layout="fill"
        style={{ animation: "updown 3s ease-in-out infinite alternate" }}
        src={imgUrl}
      />
      <Box
        sx={{
          position: "absolute",
          bgcolor: "whitesmoke",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          opacity: .7,
        }}
      >
        <Container>
          <Box sx={{display: {md: "flex"}, alignItems: "center", justifyContent: "space-between"}}>
            <Box sx={{maxWidth: "500px", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Typography sx={{ fontWeight: "bold", letterSpacing: "5px", fontSize: "35px" }}>
                HHH
              </Typography>
              <Typography sx={{ fontWeight: "bold",letterSpacing: "5px", fontSize: "35px" }}>
                IMMIGRATION
              </Typography>
              <Typography sx={{ fontSize: "15px", textAlign: "center" }}>
                HHH LAW SERVICES CAN HELP TURN YOUR DREAM INTO REALITY
              </Typography>
              
            </Box>
            <Box sx={{display: {xs: "none", md: "block"}}}>
              <ContactForm/>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSectionItem;
