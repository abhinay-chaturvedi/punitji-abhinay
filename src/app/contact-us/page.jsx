import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Box, Container, Divider, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import GoogleMap from "@/components/GoogleMap";
import Image from "next/image";

const Page = () => {
  return (
    <Box>
      <NavBar />
      <Box sx={{ height: "55vh", position: "relative" }}>
        <Image
          src={"/images/contact-bg.png"}
          layout="fill"
          //  style={{height: "300px"}}
          objectFit="cover"
        />
        <Typography
          sx={{
            position: "absolute",
            color: "white",
            fontWeight: "bold",
            fontSize: { md: "60px", xs: "30px" },
            top: "35%",
            left: "15%",
          }}
        >
          CONTACT US
        </Typography>
      </Box>
      <Box sx={{ flex: { md: 2, xs: "100%" }, bgcolor: "whitesmoke" }}>
        <GoogleMap address="1600 Amphitheatre Parkway, Mountain View, CA" />
      </Box>
      <Container>
        <Box sx={{ display: "flex", mt: "10px", gap: "8px", flexWrap: "wrap" }}>
          <Box sx={{ flex: { sm: 1, xs: "100%" } }}>
            <Box sx={{ boxShadow: "1px 1px 10px 5px lightgray", width: "max-content", margin: "auto"}}>
            <ContactForm />
            </Box>
          </Box>
          <Box sx={{ flex: { sm: 1, xs: "100%" } }}>
            <Typography sx={{ fontWeight: "bold", fontSize: {xs: "20px", md: "50px"} }}>
              Our Details
            </Typography>
            <Divider sx={{bgcolor: "black", fontWeight: "bold", height: "2px"}} />
            {/* <Typography>
              Contact us on mail, call or fill out enquiry form.
            </Typography>
            <Divider sx={{ marginY: "15px" }} /> */}
            <Box sx={{mt: "25px"}}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <PlaceIcon />
                <Typography sx={{ fontWeight: "bold" }}>
                  Head Office Address
                </Typography>
              </Box>
              <Typography sx={{ ml: "5px" }}>
                SCF NO.39, B-BLOCK MARKET, NEW AMRITSAR (143001)
              </Typography>
            </Box>
            <Divider sx={{ marginY: "15px" }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <PhoneIcon />
                <Typography sx={{ fontWeight: "bold" }}>Phone</Typography>
              </Box>
              <Typography
                sx={{ ml: "5px" }}
                component={"a"}
                href="tel: +91833511038"
              >
                +9183 35 11 038
              </Typography>
              <Typography
                sx={{ ml: "5px" }}
                component={"a"}
                href="tel: +919878433321"
              >
                +91 98784 33321
              </Typography>
            </Box>
            <Divider sx={{ marginY: "15px" }} />
            <Box>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <MailIcon />
                <Typography sx={{ fontWeight: "bold" }}>Email</Typography>
              </Box>
              <Typography
                sx={{ ml: "5px" }}
                component={"a"}
                href="mailto:info@hhhimmigration.com"
              >
                info@hhhimmigration.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Page;
