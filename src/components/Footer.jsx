import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
const Footer = () => {
  return (
    <Box >
      <Container>
      <Divider sx={{height: 3, width: "100%", mb: "20px", mt: "20px"}}/>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px", mb: "20px" }}>
              <Image
                style={{ borderRadius: "20px" }}
                src="/images/logo.jpeg"
                width={80}
                height={70}
              />

              <Typography sx={{ fontSize: 25 }}>HHH</Typography>
            </Box>
            <Typography sx={{color: "gray", mb: "20px"}}>
              HHH Immigration provides expert visa assistance for the USA,
              Canada, Australia, and more, leveraging 10+ years of combined
              experience. Our dedicated team tailors services to your unique
              immigration needs, ensuring a trustworthy partnership focused on
              realizing your dreams.
            </Typography>
            <Box sx={{display: "flex", gap: "20px"}}>
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ textAlign: "center", fontWeight: "bold", mb: "10px" }}>Immigration</Typography>
            <Box sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>Take IELTS</Typography>
              </Button>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>Take IELTS</Typography>
              </Button>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>Take IELTS</Typography>
              </Button>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>Take IELTS</Typography>
              </Button>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>Take IELTS</Typography>
              </Button>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>Take IELTS</Typography>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ textAlign: "center", fontWeight:"bold", mb: "10px" }}>Quick Links</Typography>
            <Box sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>Home</Typography>
              </Button>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>About</Typography>
              </Button>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>Services</Typography>
              </Button>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>Blog</Typography>
              </Button>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>Visa</Typography>
              </Button>
              <Button sx={{ display: "flex", gap: "10px", color: "gray", justifyContent: "left" }}>
                <ArrowRightAltIcon />
                <Typography>Contact</Typography>
              </Button>
            </Box>
          </Box>
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <Typography sx={{ textAlign: "center", fontWeight:"bold", mb: "10px" }}>Get Free Consultant</Typography>
            <Box sx={{display: "flex", gap: "15px", justifyContent: "left"}}>
                <ContactPhoneIcon/>
                <Typography sx={{color: "gray"}}>+91 9898989898</Typography>
            </Box>
            <Box sx={{display: "flex", gap: "15px", justifyContent: "left"}}>
                <EmailIcon/>
                <Typography sx={{color: "gray"}}>info@hhhservice.com</Typography>
            </Box>
            <Box sx={{display: "flex", gap: "15px", justifyContent: "left", alignItems: "center"}}>
                <AccessTimeFilledIcon/>
                <Box >
                <Typography sx={{color: "gray"}}>Monday to saturday</Typography>
                <Typography sx={{color: "gray"}}>10 am - 6 pm (ist)</Typography>
                </Box>
            </Box>
            </Box>
          </Box>
        </Box>
        <Divider sx={{height: 3, width: "100%", mb: "20px", mt: "20px"}}/>
        <Box sx={{mb: "20px"}}>
        <Typography sx={{fontWeight: "bold", color: "gray"}}>
            (@) 2023 HHH immigration and visa firm. All rights reserved.
        </Typography>
      </Box>
      </Container>
      
    </Box>
  );
};

export default Footer;
