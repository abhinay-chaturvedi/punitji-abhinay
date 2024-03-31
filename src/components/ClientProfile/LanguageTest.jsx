import { Box, Typography } from "@mui/material";
import React from "react";

const LanguageTest = ({ languageTest }) => {
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
        Language Test
      </Typography>
      <Box sx={{ overflow: "auto" }}>
        <Box component={"table"} sx={{ width: "100%", textAlign: "left" }}>
          <Box component={"thead"}>
            <Box component={"tr"}>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Exam
              </Box>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Listening Band
              </Box>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Reading Band
              </Box>
              <Box component={"th"} sx={{ minWidth: "100px" }}>
                Writing Band
              </Box>
              <Box component={"th"} sx={{ minWidth: "130px" }}>
                Speaking Band
              </Box>
              <Box component={"th"} sx={{ minWidth: "130px" }}>
                Overall Band
              </Box>
            </Box>
          </Box>
          <Box component={"tbody"}>
            {languageTest?.map((item, index) => {
              return (
                <Box key={index} component={"tr"}>
                  <Box component={"td"}>{item.exam}</Box>
                  <Box component={"td"}>{item.listeningBand}</Box>
                  <Box component={"td"}>{item.readingBand}</Box>
                  <Box component={"td"}>{item.writingBand}</Box>
                  <Box component={"td"}>{item.speakingBand}</Box>
                  <Box component={"td"}>{item.overallBand}</Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LanguageTest;
