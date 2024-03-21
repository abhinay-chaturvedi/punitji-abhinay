"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Row from "./Row";
import AddForm from "./AddForm";

const SpouseWorkExperience = ({ userId, workExperience }) => {
  const [workExperienceList, setWorkExperienceList] = useState(workExperience);
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
        Spouse Work Experience
      </Typography>
      <Box sx={{ overflow: "auto" }}>
        <Box component={"table"} sx={{ width: "100%", textAlign: "left" }}>
          <Box component={"thead"}>
            <Box component={"tr"}>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Job Title
              </Box>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Company
              </Box>

              <Box component={"th"} sx={{ minWidth: "100px" }}>
                Start Date
              </Box>
              <Box component={"th"} sx={{ minWidth: "100px" }}>
                Till
              </Box>
              <Box component={"th"} sx={{ minWidth: "100px" }}>
                Country
              </Box>
            </Box>
          </Box>
          <Box component={"tbody"}>
            {workExperienceList?.map((item, index) => {
              return <Row key={item.id} item={item} />;
            })}
          </Box>
        </Box>
      </Box>
      <Box>
        <AddForm
          userId={userId}
          setWorkExperienceList={setWorkExperienceList}
        />
      </Box>
    </Box>
  );
};

export default SpouseWorkExperience;
