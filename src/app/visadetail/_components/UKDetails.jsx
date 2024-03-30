"use client";
import { ukVisaList } from "@/components/HomePage/WhatWeOffer/data";

import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { ukVisa } from "./data";
import Image from "next/image";

const UKDetails = () => {
  const [visaType, setVisaType] = useState("student-visa");
  return (
    <Box
      id="uk"
      sx={{
        display: "flex",
        mt: "5px",
        flexDirection: { xs: "column", md: "row" },
        maxHeight: { sm: "700px", md: "350px" },
        gap: "5px",
      }}
    >
      <Box sx={{ flex: 1, bgcolor: "white", p: "5px", position: "relative", borderRadius: "5px" }}>
      <Box sx={{ position: "absolute",top: 60,left: 50, width: "70%", height: "70%" }}>
        <Image
          style={{ opacity: 0.5 }}
          layout={"fill"}
          objectFit="contain"
          src={"/images/uk-flag.jpg"}
        />
      </Box>
        <Typography
          sx={{ textAlign: "center",marginY: "12px", fontWeight: "bold", fontSize: "20px" }}
        >
          UNITED KINGDOM
        </Typography>
        <Uk setVisaType={setVisaType} />
      </Box>
      <Box
        sx={{
          flex: 1,
          position: "relative",
          bgcolor: "white",
          height: "auto",
          p: "5px",
          borderRadius: "5px",
        }}
      >
        <Box sx={{ position: "absolute",top: 60,left: 50, width: "70%", height: "70%" }}>
        <Image
          style={{ opacity: 0.5 }}
          layout={"fill"}
          objectFit="contain"
          src={"/images/uk-flag.jpg"}
        />
      </Box>
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
          <Box sx={{height: "220px", width: "100%", position: "relative"}}>
          <Image
            style={{ opacity: 0.5, maxHeight: "220px", }}
            layout={"fill"}
            objectFit="contain"
            src={"/images/uk-flag.jpg"}
          />
          </Box>
        </Box> */}
        <Content visaType={visaType} />
      </Box>
    </Box>
  );
};

export default UKDetails;
const Uk = ({ setVisaType }) => {
  console.log(ukVisaList);
  return (
    <Box sx={{ position: "relative" }}>
      {/* <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <Image
          style={{ opacity: 0.5 }}
          layout={"fill"}
          objectFit="contain"
          src={"/images/uk-flag.jpg"}
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
        {ukVisaList.map((item, index) => {
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
  const uk = ukVisa[visaType];
  // console.log("🚀 ~ Content ~ uk:", uk)
  if (uk) {
    return (
      <Box sx={{ overflow: "auto",position: "relative", zIndex: 200, maxHeight: "350px", height: "100%" }}>
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
              // marginY: "10px",
            }}
          >
            {uk.heading}
          </Typography>

          <Typography>{uk.title}</Typography>
          <Typography>{uk.pointsTitle}</Typography>
          <Box sx={{ ml: "30px" }} component="ul">
            {uk.points.map((item, index) => {
              return (
                <Box component="li" key={index}>
                  <Typography>
                    <b>{item.title} </b>
                    {item.desc}
                  </Typography>
                  {item.subPoints?.map((subItem, ind) => {
                    return (
                      <Box sx={{ ml: "30px" }} key={index + ind}>
                        <Typography>
                          <b>
                            {ind + 1}- {subItem.title}{" "}
                          </b>
                          {subItem.desc}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    );
  }
};
