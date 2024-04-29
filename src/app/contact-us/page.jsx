import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Box, Container, Divider, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import GoogleMap from "@/components/GoogleMap";

const Page = () => {
  return (
    <Box>
      <NavBar />
      <Container>
        <Box sx={{ display: "flex", mt: "10px", gap: "8px", flexWrap: "wrap" }}>
          <Box sx={{ flex: { md: 2, xs: "100%" }, bgcolor: "whitesmoke" }}>
            <GoogleMap address="1600 Amphitheatre Parkway, Mountain View, CA" />
          </Box>
          <Box sx={{ flex: { sm: 1, xs: "100%" } }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Contact Details
            </Typography>
            <Divider />
            <Typography>
              Contact us on mail, call or fill out enquiry form.
            </Typography>
            <Divider sx={{ marginY: "15px" }} />
            <Box>
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
            <Box sx={{display: "flex", flexDirection: "column"}}>
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
          <Box sx={{ flex: { sm: 1.5, xs: "100%" } }}>
            <ContactForm />
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Page;
