"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const VisaBar = () => {
  const router = useRouter();

  return (
    <Box
      sx={{ bgcolor: "#595959",color:"white", zIndex: 1000, position: "sticky", top: "85px" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", minHeight: "55px" }}>
        <Box
          onClick={() =>
            document.getElementById("uk").scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            })
          }
          component={"a"}
          sx={{
            flex: 1,
            cursor: "pointer",
            p: "2px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Image
              src={"/images/uk-flag.jpg"}
              width="30"
              height="30"
              style={{ borderRadius: "50%", objectFit: "cover",border: "1px solid white" }}
            />
          </Box>
          <Typography>UK</Typography>
        </Box>
        <Box
          sx={{
            width: "5px",
            height: "40px",
            m: "3px",
            borderRadius: "5px",
            bgcolor: "white",
          }}
        ></Box>
        <Box
          onClick={() =>
            document.getElementById("canada").scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            })
          }
          component={"a"}
          sx={{
            flex: 1,
            cursor: "pointer",
            p: "2px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Image
              src={"/images/canada-flag.jpg"}
              width="30"
              height="30"
              
              style={{ borderRadius: "50%", objectFit: "cover",border: "1px solid white" }}
            />
          </Box>
          <Typography>CANADA</Typography>
        </Box>
        <Box
          sx={{
            width: "5px",
            height: "40px",
            m: "3px",
            borderRadius: "5px",
            bgcolor: "white",
          }}
        ></Box>
        <Box
          onClick={() =>
            document.getElementById("usa").scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            })
          }
          component={"a"}
          sx={{
            flex: 1,
            cursor: "pointer",
            p: "2px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Image
              src={"/images/usa-flag.jpg"}
              width="30"
              height="30"
              style={{ borderRadius: "50%", objectFit: "cover", border: "1px solid white" }}
            />
          </Box>
          <Typography>USA</Typography>
        </Box>
        <Box
          sx={{
            width: "5px",
            height: "40px",
            m: "3px",
            borderRadius: "5px",
            bgcolor: "white",
          }}
        ></Box>
        <Box
          onClick={() =>
            document.getElementById("australia").scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            })
          }
          component={"a"}
          sx={{
            flex: 1,
            cursor: "pointer",
            p: "2px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Image
              src={"/images/aus-flag.jpg"}
              width="30"
              height="30"
            //   objectFit="cover"
              style={{ borderRadius: "50%", objectFit: "cover", border: "1px solid white" }}
            />
          </Box>
          <Typography>AUSTRALIA</Typography>
        </Box>
        <Box
          sx={{
            width: "5px",
            height: "40px",
            m: "3px",
            borderRadius: "5px",
            bgcolor: "white",
          }}
        ></Box>
        <Box
          onClick={() =>
            document.getElementById("uae").scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            })
          }
          component={"a"}
          sx={{
            flex: 1,
            cursor: "pointer",
            p: "2px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Image
              src={"/images/uae-flag.jpg"}
              width="30"
              height="30"
            //   objectFit="cover"
              style={{ borderRadius: "50%", objectFit: "cover",border: "1px solid white" }}
            />
          </Box>
          <Typography>UAE</Typography>
        </Box>
        <Box
          sx={{
            width: "5px",
            height: "40px",
            m: "3px",
            borderRadius: "5px",
            bgcolor: "white",
          }}
        ></Box>
        <Box
          onClick={() =>
            document.getElementById("germany").scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            })
          }
          component={"a"}
          sx={{
            flex: 1,
            cursor: "pointer",
            p: "2px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Image
              src={"/images/germany-flag.jpg"}
              width="30"
              height="30"
            //   objectFit="cover"
              style={{ borderRadius: "50%", objectFit: "cover",border: "1px solid white" }}
            />
            
          </Box>
          <Typography>GERMANY</Typography>
        </Box>
        {/* <Box sx={{width: "5px",height: "40px",m: "3px",borderRadius: "5px", bgcolor: "white"}}></Box> */}
      </Box>
    </Box>
  );
};

export default VisaBar;
