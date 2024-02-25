import { Box, Divider, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";

const Education = ({ client }) => {
  return (
    <div>
      <Box sx={{ p: "5px", boxShadow: "0px 3px 8px rgba(0, 0, 0, .24)" }}>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Education
          </Typography>
        </Box>
        {client.education?.map((item, index) => {
          return (
            <Box key={index}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>Degree : </Typography>
                  <Typography>{item.degree}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    College :{" "}
                  </Typography>
                  <Typography>{item.college}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Country :{" "}
                  </Typography>
                  <Typography>{item.country}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>Stream : </Typography>
                  <Typography>{item.stream}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>Score : </Typography>
                  <Typography>{item.score}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Start Date :{" "}
                  </Typography>
                  <Typography>
                    {dayjs(item.startDate).format("DD-MM-YY")}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    End Date :{" "}
                  </Typography>
                  <Typography>
                    {dayjs(item.endDate).format("DD-MM-YYYY")}
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default Education;
