"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./style.css";
import Row from "./Row";
import AddForm from "./AddForm";
const SpouseEducation = ({ education, userId }) => {
  const [educationList, setEducationList] = useState(education);
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          m: "10px 0px",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        Spouse Education
      </Typography>

      <Box sx={{ overflow: "auto" }}>
        <Box component={"table"} sx={{ width: "100%", textAlign: "left" }}>
          <Box component={"thead"}>
            <Box component={"tr"}>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Type
              </Box>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Stream
              </Box>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                College/University
              </Box>
              <Box component={"th"} sx={{ minWidth: "100px" }}>
                Start Date
              </Box>
              <Box component={"th"} sx={{ minWidth: "130px" }}>
                Complete Date
              </Box>
              <Box component={"th"} sx={{ minWidth: "100px" }}>
                Country
              </Box>
            </Box>
          </Box>
          <Box component={"tbody"}>
            {educationList?.map((item, index) => {
              return <Row key={item.id} item={item} />;
            })}
          </Box>
        </Box>
      </Box>
      <Box>
        <AddForm userId={userId} setEducationList={setEducationList} />
      </Box>
    </Box>
  );
};

export default SpouseEducation;
