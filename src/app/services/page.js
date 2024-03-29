import { Box, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
const serviceData = [
  {
    id: "cec9884e-24c8-4aab-8b4d-54261186a0e0",
    title: "Immigration Services",
    desc: "",
  },
  {
    id: "57859b04-979b-4e9a-82d0-8acc266aeb27",
    title: "Civil Rights Litigation",
    desc: "",
  },
  {
    id: "45d0cff7-085c-49d7-bbbc-8016be4a1dcc",
    title: "Cyber Security & Data Protection Law",
    desc: "",
  },
  {
    id: "7e19d4c5-baa3-46d0-962a-4fe8d7be699b",
    title: "Commercial Litigation",
    desc: "",
  },
  {
    id: "2712f8d9-4d0d-4970-8292-48cbdae7ec78",
    title: "Banking & Finance",
    desc: "",
  },
  {
    id: "18265bc0-5c80-4298-a0cf-5c08fc4b0b3f",
    title: "Business Disputes",
    desc: "",
  },
  {
    id: "e0534bc9-12a1-4bd9-ab5c-a78a59535f6a",
    title: "Real Estate Law",
    desc: "",
  },
  {
    id: "e09fefca-cd48-475d-9909-505d5fa89d8e",
    title: "Family Dispute",
    desc: "",
  },
  {
    id: "41b56b05-47b4-48a0-9a8d-acd0e60efcd0",
    title: "Criminal Defense Litigation",
    desc: "",
  },
  {
    id: "3c23d76b-20b6-431c-8ed3-9fcb43572f23",
    title: "Advertising & Product Regulatery",
    desc: "",
  },
];
const Page = () => {
  return (
    <Box>
      <Container>
        
        <Box sx={{ marginY: "15px" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "20px", md: "30px" },
            }}
          >
            Services We offer
          </Typography>
        </Box>
        <Box component="ul" position={"relative"} overflow={"clip"}>
        <Box sx={{position: "absolute",transform: "rotate(52deg)", width: "88%", height: "99%", left: "17%"}}>
          <Image
          src={"/images/stamp-red.png"}
          layout="fill"
          objectFit="contain"
          />
        </Box>
          {serviceData.map((service) => {
            return (
              <Box key={service.id}>
                <Divider sx={{ marginY: "10px" }} />
                <Box sx={{fontSize: "20px"}} component="li">
                  <Typography sx={{fontSize: {xs: "15px", md: "20px"}}}>{service.title}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
export default Page;
