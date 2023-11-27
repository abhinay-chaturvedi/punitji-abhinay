import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ServiceDetailCard = ({ imgUrl, title, desc }) => {
  return (
    <Box sx={{ borderRadius: "10px", p: "20px", backgroundColor: "#EFF2F5" }}>
      <Stack gap={2}>
        <Box
          sx={{
            width: "75px",
            height: "75px",
            borderRadius: "15px",
            transform: "skew(8deg)",
          }}
        >
          {/* <Image src={"/images/service1.png"} width={0} height={0} style={{width: "100%", height: "100%",  }}/> */}
          <Image
            style={{ borderRadius: "10px" }}
            layout={"fill"}
            objectFit="cover"
            src={imgUrl}
          />
        </Box>
        <Typography
          component="h3"
          sx={{ fontWeight: "bold", color: "#222222", fontSize: "22px" }}
        >
          {title}
        </Typography>
        <Typography component="p" sx={{ color: "#555555" }}>
          {desc}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ServiceDetailCard;
