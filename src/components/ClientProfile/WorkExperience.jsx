import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";

const WorkExperience = ({ workExperience }) => {
  return (
    <Box>
      <Typography sx={{color: "gray", fontSize: "18px", marginY: "7px", textAlign: "center"}}>Work Experience</Typography>
      <Box sx={{overflow: "auto"}}>
      <Box component={"table"} sx={{ width: "100%", textAlign: "left" }}>
        <Box component={"thead"}>
          <Box component={"tr"}>
            <Box component={"th"} sx={{ minWidth: "150px" }}>
              Company
            </Box>
            <Box component={"th"} sx={{ minWidth: "150px" }}>
              Country
            </Box>
            <Box component={"th"} sx={{ minWidth: "150px" }}>
              Job Title
            </Box>
            <Box component={"th"} sx={{ minWidth: "100px" }}>
              Start Date
            </Box>
            <Box component={"th"} sx={{ minWidth: "130px" }}>
              End Date
            </Box>
          </Box>
        </Box>
        <Box component={"tbody"}>
          {workExperience?.map((item, index) => {
            return (
              <Box key={index} component={"tr"}>
                <Box component={"td"}>{item.company}</Box>
                <Box component={"td"}>{item.country}</Box>
                <Box component={"td"}>{item.jobTitle}</Box>
                <Box component={"td"}>
                  {dayjs(item.startDate).format("YYYY-MM-DD")}
                </Box>
                <Box component={"td"}>
                  {dayjs(item.endDate).format("YYYY-MM-DD")}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default WorkExperience;
