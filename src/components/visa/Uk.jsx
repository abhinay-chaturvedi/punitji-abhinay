// "use client"
import React from "react";
import { ukVisaList } from "../HomePage/WhatWeOffer/data";
import Link from "next/link";
import { Box, IconButton, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const Uk = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {ukVisaList.map((item, index) => {
          return (
            <Box
              component={Link}
              href={item.link}
              sx={{
                display: "flex",
                bgcolor: "whitesmoke",
                p: "10px",
                alignItems: "center",
                borderRadius: "4px",
                justifyContent: "space-between",
                // gap: "5px"
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
              <AddIcon />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default Uk;
