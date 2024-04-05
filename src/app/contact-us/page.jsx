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
            <GoogleMap address="1600 Amphitheatre Parkway, Mountain View, CA"/>
          </Box>
          <Box sx={{ flex: { sm: 1, xs: "100%" } }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Contact Details
            </Typography>
            <Divider />
            <Typography>
              We are located all over india. Want to get started? just mail us,
              or call us, or fill out enquiry form.
            </Typography>
            <Divider sx={{ marginY: "15px" }} />
            <Box>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <PlaceIcon />
                <Typography sx={{ fontWeight: "bold" }}>
                  Head Office Address
                </Typography>
              </Box>
              <Typography sx={{ml: "5px"}}>
                Crystal plaza, SCO-48, Garha Rd, opposite PIMS Hospital Chhoti
                Barandari , jalandhar, punjab 144003, india
              </Typography>
            </Box>
            <Divider sx={{ marginY: "15px" }} />
            <Box>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <PhoneIcon />
                <Typography sx={{ fontWeight: "bold" }}>Phone</Typography>
              </Box>
              <Typography sx={{ml: "5px"}} component={"a"} href="tel: +91833511038">
                +91-099089893
              </Typography>
            </Box>
            <Divider sx={{ marginY: "15px" }} />
            <Box>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <MailIcon />
                <Typography sx={{ fontWeight: "bold" }}>Email</Typography>
              </Box>
              <Typography sx={{ml: "5px"}} component={"a"} href="mailto:info@hhhimmigration.com">
                admin@gmail.com
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
