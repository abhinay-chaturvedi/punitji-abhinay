import Carousel from "@/components/Carousel";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ChooseCountryCard from "./ChooseCountryCard";

const ChooseCountry = () => {
  return (
    <Box sx={{ bgcolor: "#EFF2F5", paddingY: "30px", width: "100%" }}>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              color: "#FF0000",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Country
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                md: "35px",
                lg: "48px",
                xs: "25px",
                color: "#031F4B",
              },
            }}
          >
            Choose Your Country
          </Typography>
        </Box>
        <Box>
          <Carousel>
            <ChooseCountryCard
              country="London"
              desc="Embark on your London adventure effortlessly with our visa services! Whether it's for business or leisure, our skilled team guarantees a smooth and stress-free visa application process. Entrust us with the paperwork, and get ready to explore London without any worries. Your gateway to London begins with our expert visa assistance!"
              imgUrl={"/images/count5.jpg"}
            />
            <ChooseCountryCard
              country="Canada"
              desc="Ease into your Canadian experience with our seamless visa services! Whether your journey is for business or pleasure, our proficient team ensures a streamlined and stress-free visa application process. Let us handle the documentation while you prepare for your Canadian adventure. Your gateway to Canada starts with our expert visa assistance!"
              imgUrl={"/images/count1.jpeg"}
            />
            <ChooseCountryCard
              country="Australia"
              desc="Experience the beauty of Australia without the visa hassles! Our proficient team specializes in seamless visa services, catering to both business and leisure travelers. Relax as we handle the application intricacies, allowing you to focus on the excitement of your Australian journey. Trust us to be your gateway to Australia with our tailored visa assistance!"
              imgUrl={"/images/count2.jpg"}
            />
            <ChooseCountryCard
              country="Singapore"
              desc="Seamlessly enter the enchanting realm of Singapore with our bespoke visa services! Whether your visit is for business or leisure, our proficient team guarantees a streamlined visa application process. Let us handle the documentation intricacies, leaving you free to savor the delights of your Singaporean journey. Your passport to Singapore begins with our expert visa support!"
              imgUrl={"/images/count3.jpg"}
            />
            <ChooseCountryCard
              country="USA"
              desc="Unlock the door to your American dream with our tailored visa services! Whether your purpose is business or leisure, our proficient team guarantees a hassle-free visa application journey. Entrust us with the paperwork, and prepare to delve into the richness of the USA without any complexities. Your entryway to the United States begins with our specialized visa support!"
              imgUrl={"/images/count4.jpg"}
            />
            <ChooseCountryCard imgUrl={"/images/count6.jpg"} />
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};

export default ChooseCountry;
