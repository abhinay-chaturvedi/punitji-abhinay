import { Box, Typography } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
const ClientInfo = ({client}) => {
  return (
    <Box sx={{p: "5px", boxShadow: "0px 3px 8px rgba(0, 0, 0, .25)"}}>
        <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "25px", textAlign: "center" }}
            >
              Client Info
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}, flexWrap: "wrap", gap: "20px" }}>
            <Box sx={{ display: {md: "flex"}, gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Name : </Typography>
              <Typography>{client.client.name}</Typography>
            </Box>
            <Box sx={{ display: {md: "flex"}, gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Email : </Typography>
              <Typography>{client.client.email}</Typography>
            </Box>
            <Box sx={{ display: {md: "flex"}, gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Phone : </Typography>
              <Typography>
                {client.client.phone ? client.client.phone : "NA"}
              </Typography>
            </Box>
            <Box sx={{ display: {md: "flex"}, gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Date Of Birth :{" "}
              </Typography>
              <Typography>
                {client.client.dob
                  ? dayjs(client.client.dob).format("DD-MM-YYYY")
                  : "NA"}
              </Typography>
            </Box>
            <Box sx={{ display: {md: "flex"}, gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Address : </Typography>
              <Typography>
                {client.client.address ? client.client.address : "NA"}
              </Typography>
            </Box>
            <Box sx={{ display: {md: "flex"}, gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Visa Country :{" "}
              </Typography>
              <Typography>
                {client.client.visaCountry ? client.client.visaCountry : "NA"}
              </Typography>
            </Box>
          </Box>
    </Box>
  )
}

export default ClientInfo