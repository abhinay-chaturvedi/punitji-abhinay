"use client";
import { canadaVisaList } from "@/components/HomePage/WhatWeOffer/data";
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { canadaVisa } from "./data";
import Image from "next/image";

const CanadaDetails = () => {
  const [visaType, setVisaType] = useState("express-entry");
  return (
    <Box
      id="canada"
      sx={{
        display: "flex",
        mt: "5px",
        flexDirection: { xs: "column-reverse", md: "row" },
        maxHeight: { sm: "700px", md: "350px" },
        gap: "5px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          bgcolor: "white",
          height: "auto",
          p: "5px",
          borderRadius: "5px",
          position: "relative",
        }}
      >
        {/* <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            // bgcolor: "black"
          }}
        >
          <Box sx={{ height: "220px", width: "100%", position: "relative" }}>
            <Image
              style={{ opacity: 0.7, maxHeight: "220px" }}
              layout={"fill"}
              objectFit="contain"
              src={"/images/canada-flag.jpg"}
            />
          </Box>
        </Box> */}
        <Box
          sx={{ position: "absolute",top: 60,left: 50, width: "70%", height: "70%"}}
        >
          <Image
            style={{ opacity: 0.5 }}
            layout={"fill"}
            objectFit="contain"
            src={"/images/canada-flag.jpg"}
          />
        </Box>
        <Content visaType={visaType} />
      </Box>
      <Box
        sx={{
          flex: 1,
          bgcolor: "white",
          height: "auto",
          p: "5px",
          borderRadius: "5px",
          position: "relative"
        }}
      >
        <Box
          sx={{ position: "absolute",top: 60,left: 50, width: "70%", height: "70%" }}
        >
          <Image
            style={{ opacity: 0.5 }}
            layout={"fill"}
            objectFit="contain"
            src={"/images/canada-flag.jpg"}
          />
        </Box>
        {/* <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <Image
          style={{ opacity: 0.5 }}
          layout={"fill"}
          objectFit="contain"
          src={"/images/canada-flag.jpg"}
        />
      </Box> */}
        <Typography
          sx={{ textAlign: "center",marginY: "12px", fontWeight: "bold", fontSize: "20px" }}
        >
          CANADA
        </Typography>
        <Canada setVisaType={setVisaType} />
      </Box>
    </Box>
  );
};

export default CanadaDetails;

const Canada = ({ setVisaType }) => {
  // console.log(ukVisaList)
  return (
    <Box sx={{ position: "relative" }}>
      {/* <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <Image
          style={{ opacity: 0.5 }}
          layout={"fill"}
          objectFit="contain"
          src={"/images/canada-flag.jpg"}
        />
      </Box> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "350px",
          m: "auto",
          gap: "2px",
        }}
      >
        {canadaVisaList.map((item, index) => {
          const arr = item.link.split("/");
          return (
            <Box key={index}>
              <Button
                onClick={() => setVisaType(arr[arr.length - 1])}
                sx={{
                  color: "black",
                  fontSize: "17px",
                  fontWeight: "bold",
                  width: "100%",
                  textAlign: "left",
                  justifyContent: "left",
                }}
              >
                {/* {item.name} */}
                {"*  " + item.name}
              </Button>
              {/* <Divider /> */}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const Content = ({ visaType }) => {
  const canada = canadaVisa[visaType];
  if (canada) {
    return (
      <Box
        sx={{
          overflow: "auto",
          position: "relative",
          zIndex: 200,
          maxHeight: "350px",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            mt: "5px",
            p: "5px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "25px",
            }}
          >
            {canada.heading}
          </Typography>
          <Typography>{canada.title}</Typography>
          <Typography>{canada.pointsTitle}</Typography>
          <Box sx={{ ml: "30px" }} component="ul">
            {canada.points.map((item, index) => {
              return (
                <Box component="li" key={index}>
                  <Typography>
                    <b>{item.title} </b>
                    {item.desc}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    );
  }
};
