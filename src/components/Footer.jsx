import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black" }}>
      <Container>
        <Divider sx={{ height: 3, width: "100%", mb: "20px", mt: "20px" }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Box sx={{ flex: "100%", mb: "10px" }}>
            <Typography sx={{ color: "white", mb: "20px" }}>
              HHH Immigration provides expert visa assistance for the USA,
              Canada, Australia, and more, leveraging 10+ years of combined
              experience. Our dedicated team tailors services to your unique
              immigration needs, ensuring a trustworthy partnership focused on
              realizing your dreams.
            </Typography>
            <Box sx={{ display: "flex", color: "white", gap: "20px" }}>
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </Box>
          </Box>
          {/* <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
            }}
          >
            <Box sx={{ display: "flex", color: "white", gap: "20px" }}>
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </Box>
          </Box> */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
            }}
          >
            <Typography
              sx={{ textAlign: "center", fontWeight: "bold", mb: "10px" }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box
                component={Link}
                href={"/"}
                sx={{
                  display: "flex",
                  gap: "10px",
                  color: "white",
                  justifyContent: "left",
                }}
              >
                <ArrowRightAltIcon />
                <Typography>Home</Typography>
              </Box>
              <Box
                component={Link}
                href={"/about"}
                sx={{
                  display: "flex",
                  gap: "10px",
                  color: "white",
                  justifyContent: "left",
                }}
              >
                <ArrowRightAltIcon />
                <Typography>About</Typography>
              </Box>
              <Box
                component={Link}
                href={"/services"}
                sx={{
                  display: "flex",
                  gap: "10px",
                  color: "white",
                  justifyContent: "left",
                }}
              >
                <ArrowRightAltIcon />
                <Typography>Services</Typography>
              </Box>
              <Box
                component={Link}
                href={"/visadetail"}
                sx={{
                  display: "flex",
                  gap: "10px",
                  color: "white",
                  justifyContent: "left",
                }}
              >
                <ArrowRightAltIcon />
                <Typography>Visa</Typography>
              </Box>
              <Box
                component={Link}
                href={"/"}
                sx={{
                  display: "flex",
                  gap: "10px",
                  color: "white",
                  justifyContent: "left",
                }}
              >
                <ArrowRightAltIcon />
                <Typography>Contact</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography
                sx={{ textAlign: "center", fontWeight: "bold", mb: "10px" }}
              >
                Get Free Consultation
              </Typography>
              <Box
                sx={{ display: "flex", gap: "15px", justifyContent: "left" }}
              >
                <ContactPhoneIcon />
                <Typography
                  component={"a"}
                  href="tel: +919878433321"
                  sx={{ color: "white" }}
                >
                  +91 9878433321
                </Typography>
                <Typography
                  component={"a"}
                  href="tel: +91833511038"
                  sx={{ color: "white" }}
                >
                  +91 833511038
                </Typography>
              </Box>
              {/* <Box
                sx={{ display: "flex", gap: "15px", justifyContent: "left" }}
              >
                <ContactPhoneIcon />
                <Typography
                  component={"a"}
                  href="tel: +91833511038"
                  sx={{ color: "white" }}
                >
                  +91 833511038
                </Typography>
              </Box> */}
              <Box
                sx={{ display: "flex", gap: "15px", justifyContent: "left" }}
              >
                <EmailIcon />
                <Typography
                  component={"a"}
                  href="mailto:info@hhhimmigration.com"
                  sx={{ color: "white" }}
                >
                  info@hhhimmigration.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <AccessTimeFilledIcon />
                <Box>
                  <Typography sx={{ color: "white" }}>
                    Monday to saturday
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    10 am - 6 pm (ist)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ height: 3, width: "100%", mb: "20px", mt: "20px" }} />
        <Box sx={{ mb: "20px" }}>
          <Typography sx={{ fontWeight: "bold", color: "white" }}>
            (@) 2023 HHH immigration and visa firm. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
