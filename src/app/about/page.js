import { Box, CardMedia, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <Box>
      <Box sx={{ position: "relative", height: "80vh" }}>
        <Image
          // style={{ borderRadius: "10px" }}
          layout={"fill"}
          objectFit="cover"
          src={"/images/Office Picture.jpg"}
        />
        <Box
          sx={{
            zIndex: 100,
            position: "relative",
            maxWidth: "700px",
            margin: "auto",
            paddingTop: "50px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{
                padding: "5px 60px",
                fontWeight: "bold",
                color: "white",
                fontSize: "25px",
                borderRadius: "30px",
                border: "4px solid white",
                background: "black",
                marginBottom: "-20px",
              }}
            >
              About Us
            </Typography>
          </Box>
          <Typography
            sx={{
              bgcolor: "white",
              padding: "30px 50px",
              borderRadius: "50px",
              // fontWeight: "600",
              textAlign: "justify",
              color: "gray",
              fontSize: "18px",
            }}
          >
            Welcome to HHH Immigration, your steadfast ally on the path to new
            beginnings. With a combined experience of over 10 years, our
            seasoned team is committed to providing unparalleled expertise in
            immigration services. We specialize in visa assistance for diverse
            destinations, including the USA, Canada, Australia, New Zealand,
            UAE, Germany and many more. At HHH Immigration, we understand the
            significance of your journey, and our dedicated professional visa
            experts are here to ensure a smooth transition to your dream
            country. Your dreams are our priority, and we tailor our services to
            meet your unique needs. With "YOUR TRUST OUR PROMISE" as our guiding
            principle, we assure you a reliable and transparent partnership
            throughout the immigration process.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Image
          // style={{ borderRadius: "10px" }}
          layout={"fill"}
          objectFit="cover"
          src={"/images/about-us-bg.png"}
        />
        <Container>
          <Box
            sx={{ display: { md: "flex" }, gap: "30px", padding: "50px 0px" }}
          >
            <Box sx={{ flex: 1 }}>
              <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                <CardMedia
                  sx={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "3px",
                    objectFit: "cover",
                  }}
                  component="video"
                  // className={classes.media}
                  autoPlay
                  loop
                  // controls
                  muted
                  image={
                    "https://upload.hhhimmigration.com/uploads/admin/1703922279234-Final%20Comp%20(1).mp4"
                  }
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                gap: "10px",
                zIndex: 100,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  padding: "20px 30px",
                  boxShadow: "1px 1px 5px 5px gray",
                  borderRadius: "50px",
                }}
              >
                {/* <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                  Director Message:{" "}
                </Typography> */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    sx={{
                      padding: "5px 60px",
                      fontWeight: "bold",
                      color: "white",
                      fontSize: "25px",
                      borderRadius: "30px",
                      border: "4px solid white",
                      background: "black",
                      marginTop: "-50px",
                    }}
                  >
                    Director Message
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    // fontWeight: "600",
                    textAlign: "justify",
                    fontSize: "18px",
                    color: "gray",
                  }}
                >
                  With the years of expertise in this industry, we have built a
                  reputation for delivering on our promises as we firmly believe
                  in the motto “Your Trust, Our promise”. What sets us apart
                  from the competition is our team of highly skilled
                  professionals who possess extensive knowledge and expertise in
                  immigration matters. Our track record speaks for itself, as we
                  have successfully assisted numerous individuals and families
                  in achieving their immigration goals. We are proud of the
                  positive feedback and testimonials we have received from our
                  satisfied clients, which further validate our commitment to
                  excellence. Thank you for considering our company for
                  immigration needs. We look forward to the opportunity to serve
                  you and demonstrate why we are the best choice of your
                  immigration services.
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                  HARSHARAN KAUR
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                  DIRECTOR
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Page;
