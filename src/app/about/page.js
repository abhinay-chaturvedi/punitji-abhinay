import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Container>
        <Box sx={{ display: { md: "flex" }, gap: "30px" }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{ fontWeight: "bold", color: "black", fontSize: "25px" }}
            >
              About Us
            </Typography>
            <Typography
              sx={{ fontWeight: "800", color: "gray", fontSize: "20px" }}
            >
              Welcome to HHH Immigration, your steadfast ally on the path to new
              beginnings. With a combined experience of over 10 years, our
              seasoned team is committed to providing unparalleled expertise in
              immigration services. We specialize in visa assistance for diverse
              destinations, including the USA, Canada, Australia, New Zealand,
              UAE, Germany and many more. At HHH Immigration, we understand the
              significance of your journey, and our dedicated professional visa
              experts are here to ensure a smooth transition to your dream
              country. Your dreams are our priority, and we tailor our services
              to meet your unique needs. With "YOUR TRUST OUR PROMISE" as our
              guiding principle, we assure you a reliable and transparent
              partnership throughout the immigration process.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                style={{ borderRadius: "10px" }}
                layout={"fill"}
                objectFit="cover"
                src={"/images/1.jpg"}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: { md: "flex" }, gap: "30px", marginTop: "30px" }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                style={{ borderRadius: "10px" }}
                layout={"fill"}
                objectFit="contain"
                src={"/images/director.png"}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Director Message:{" "}
            </Typography>
            <Typography sx={{ fontWeight: "600", color: "gray" }}>
              With the years of expertise in this industry, we have built a
              reputation for delivering on our promises as we firmly believe in
              the motto “Your Trust, Our promise”. What sets us apart from the
              competition is our team of highly skilled professionals who
              possess extensive knowledge and expertise in immigration matters.
              Our track record speaks for itself, as we have successfully
              assisted numerous individuals and families in achieving their
              immigration goals. We are proud of the positive feedback and
              testimonials we have received from our satisfied clients, which
              further validate our commitment to excellence. Thank you for
              considering our company for immigration needs. We look forward to
              the opportunity to serve you and demonstrate why we are the best
              choice of your immigration services.
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
              HARSHARAN KAUR
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
              DIRECTOR
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
