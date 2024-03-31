import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
const ClientInfo = ({ basicInfo }) => {
  
  return (
    <Box>
      <Typography sx={{ textAlign: "center", color: "gray", fontSize: "18px" }}>
        Basic Info
      </Typography>
      <Box sx={{ display: { md: "flex" }, flexWrap: "wrap", gap: "5px" }}>
        <Box
          sx={{
            bgcolor: "lightgray",
            minWidth: { md: "320px" },
            p: "5px",
            mb: "5px",
            borderRadius: "5px",
            flex: 1,
          }}
        >
          {/* <Typography sx={{fontWeight: "bold"}}>title</Typography>
          <Typography>value</Typography> */}
          <Typography sx={{ fontWeight: "bold" }}>Name </Typography>
          <Typography>{basicInfo.name}</Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "lightgray",
            minWidth: { md: "320px" },
            p: "5px",
            mb: "5px",
            gap: "5px",
            borderRadius: "5px",
            flex: 1,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Email </Typography>
          <Typography>{basicInfo.email}</Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "lightgray",
            minWidth: { md: "320px" },
            p: "5px",
            mb: "5px",
            gap: "5px",
            borderRadius: "5px",
            flex: 1,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Phone : </Typography>
          <Typography>
            {basicInfo.phone ? client.client.phone : "NA"}
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "lightgray",
            minWidth: { md: "320px" },
            p: "5px",
            mb: "5px",
            gap: "5px",
            borderRadius: "5px",
            flex: 1,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Date Of Birth</Typography>
          <Typography>
            {basicInfo.dob ? dayjs(basicInfo.dob).format("DD-MM-YYYY") : "NA"}
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "lightgray",
            minWidth: { md: "320px" },
            p: "5px",
            mb: "5px",
            gap: "5px",
            borderRadius: "5px",
            flex: 1,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Address </Typography>
          <Typography>
            {basicInfo.address ? basicInfo.address : "NA"}
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "lightgray",
            minWidth: { md: "320px" },
            p: "5px",
            mb: "5px",
            gap: "5px",
            borderRadius: "5px",
            flex: 1,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Visa Country : </Typography>
          <Typography>
            {basicInfo.visaCountry ? basicInfo.visaCountry : "NA"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientInfo;
