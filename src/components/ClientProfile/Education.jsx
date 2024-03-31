import { Box, Divider, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";

const Education = ({ education }) => {
  return (
    <Box>
      <Typography
        sx={{
          color: "gray",
          fontSize: "18px",
          marginY: "5px",
          textAlign: "center",
        }}
      >
        Education
      </Typography>
      <Box sx={{ overflow: "auto" }}>
        <Box component={"table"} sx={{ width: "100%", textAlign: "left" }}>
          <Box component={"thead"}>
            <Box component={"tr"}>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Degree
              </Box>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                College
              </Box>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Country
              </Box>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Stream
              </Box>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Score
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
            {education?.map((item, index) => {
              return (
                <Box key={index} component={"tr"}>
                  <Box component={"td"}>{item.degree}</Box>
                  <Box component={"td"}>{item.college}</Box>
                  <Box component={"td"}>{item.country}</Box>
                  <Box component={"td"}>{item.stream}</Box>
                  <Box component={"td"}>{item.score}</Box>
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

export default Education;
