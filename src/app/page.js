import MediaCard from '@/components/Media/Media'
import styles from './page.module.css'
import NavBar from '@/components/NavBar/NavBar'
import PartnerCompanies from '@/components/PartnerCompanies/PartnerCompanies'
import ContactForm from '@/components/ContactForm/ContactForm'
import ServiceDatail from '@/components/HomePage/ServiceDetail/ServiceDatail'
import AboutUs from '@/components/HomePage/AboutUs/AboutUs'
import WhatWeOffer from '@/components/HomePage/WhatWeOffer/WhatWeOffer'
import {Box, Stack} from "@mui/material"
import WhyChooseUs from '@/components/HomePage/WhyChooseUs/WhyChooseUs'
import HeroSection from '@/components/HomePage/HeroSection/HeroSection'
import ChooseCountry from '@/components/HomePage/ChooseCountry/ChooseCountry'
import ClientSays from '@/components/HomePage/ClientSays/ClientSays'
import Blogs from '@/components/HomePage/Blogs/Blogs'
import Analytics from '@/components/HomePage/Anayltics/Analytics'
import { useLogin } from '@/hooks/auth'
export default function Home() {
  return (
    <Box>
      <NavBar/>
      <Stack gap={5}>
        <HeroSection/>
        <ServiceDatail/>
        <AboutUs/>
        <Analytics/>
        <WhatWeOffer/>
        <WhyChooseUs/>
        <ChooseCountry/>
        <ClientSays/>
        <ContactForm/>
        <Blogs/>
      </Stack>
    </Box>
  )
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