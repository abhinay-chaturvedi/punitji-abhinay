"use client";
import {
  australiaVisaList,
  ukVisaList,
} from "@/components/HomePage/WhatWeOffer/data";

import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { australiaVisa } from "./data";
import Image from "next/image";

const AusDetails = () => {
  const [visaType, setVisaType] = useState("parmanent-residency");
  return (
    <Box
      id="australia"
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
        <Box
          sx={{ position: "absolute",top: 60,left: 50, width: "70%", height: "70%" }}
        >
          <Image
            style={{ opacity: 0.5 }}
            layout={"fill"}
            objectFit="contain"
            src={"/images/aus-flag.jpg"}
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
          <Box sx={{ height: "220px", width: "100%", position: "relative" }}>
            <Image
              style={{ opacity: 0.5, maxHeight: "220px" }}
              layout={"fill"}
              objectFit="contain"
              src={"/images/aus-flag.jpg"}
            />
          </Box>
        </Box> */}
        <Content visaType={visaType} />
      </Box>
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
        <Box
          sx={{ position: "absolute",top: 60,left: 50, width: "70%", height: "70%" }}
        >
          <Image
            style={{ opacity: 0.5 }}
            layout={"fill"}
            objectFit="contain"
            src={"/images/aus-flag.jpg"}
          />
        </Box>
        <Typography
          sx={{ textAlign: "center",mt: "12px", fontWeight: "bold", fontSize: "20px" }}
        >
          AUSTRALIA
        </Typography>
        <Australia setVisaType={setVisaType} />
      </Box>
    </Box>
  );
};

export default AusDetails;
const Australia = ({ setVisaType }) => {
  // console.log(ukVisaList)
  return (
    <Box sx={{ position: "relative" }}>
      {/* <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <Image
          style={{ opacity: 0.5 }}
          layout={"fill"}
          objectFit="contain"
          src={"/images/aus-flag.jpg"}
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
        {australiaVisaList.map((item, index) => {
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
  const australia = australiaVisa[visaType];
  // console.log("🚀 ~ Content ~ australia:", australia)
  if (australia) {
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
              // marginY: "10px",
            }}
          >
            {australia.heading}
          </Typography>

          <Typography>{australia.title}</Typography>
          <Typography>{australia.pointsTitle}</Typography>
          <Box sx={{ ml: "30px" }} component="ul">
            {australia.points.map((item, index) => {
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
