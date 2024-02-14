import MediaCard from "@/components/Media/Media";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar/NavBar";
import PartnerCompanies from "@/components/PartnerCompanies/PartnerCompanies";
import ContactForm from "@/components/ContactForm/ContactForm";
import ServiceDatail from "@/components/HomePage/ServiceDetail/ServiceDatail";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import WhatWeOffer from "@/components/HomePage/WhatWeOffer/WhatWeOffer";
import { Box, Stack } from "@mui/material";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs/WhyChooseUs";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import ChooseCountry from "@/components/HomePage/ChooseCountry/ChooseCountry";
import ClientSays from "@/components/HomePage/ClientSays/ClientSays";
import Blogs from "@/components/HomePage/Blogs/Blogs";
import Analytics from "@/components/HomePage/Anayltics/Analytics";
import { useLogin } from "@/hooks/auth";
import { cookies } from "next/headers";
import getUser from "@/services/client/getUser";
import Footer from "@/components/Footer";
import Image from "next/image";
export default async function Home() {
 
  const token = cookies().get("token");
  
  return (
    <Box>
      {/* <Box
        sx={{ position: "fixed", bgcolor: "whitesmoke",opacity: .9, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 100, width: "100%", height: "100%" }}
      >
        <Box sx={{height: "70%", position: "relative", width: "70%"}}>
          <Image layout="fill" src={"/images/banner.png"} />
        </Box>
      </Box> */}
      <NavBar />
      <Stack gap={5}>
        <HeroSection />
        <Box sx={{ display: { md: "none" } }}>
          <ContactForm />
        </Box>
        {/* <ServiceDatail /> */}
        {/* <AboutUs /> */}
        {/* <Analytics /> */}
        <WhatWeOffer />
        <WhyChooseUs />
        <ClientSays />
        {/* <Blogs /> */}
        <Footer />
      </Stack>
    </Box>
  );
}
// "@keyframes ripple-wave": {
//   "0%": {
//     opacity: 0,
//     transform: "translateY(-200%)"
//   },
//   "100%": {
//     opacity: 1,
//     transform: "translateY(0)"
//   }
// },
// ripple-wave 1s linear infinite
// 0% {
//   opacity: 0.8;
//   -webkit-transform: scale(0.9);
//   transform: scale(0.9);
// }
// 100% {
//   opacity: 0;
//   -webkit-transform: scale(1.5);
//   transform: scale(1.5);
// }
