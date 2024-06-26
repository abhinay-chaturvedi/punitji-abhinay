"use client"
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
const PartnerInfo = ({ client,partnerId, userId, session }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [assignedPartner, setAssignedPartner] = useState(null);
  const [isPartnerLoading, setIsPartnerLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [partnerList, setPartnerList] = useState(null);
  const [option, setOption] = useState(null);
  const [isAssigning, setIsAssigning] = useState(false);
  const getPartnerAssigned = async () => {
    try {
      const pId = client.client.partnerId
      console.log(pId, "-------", partnerId)
      const res = await fetch(
        `/api/admin/client/getAndAssignPartner?userId=${"6130e062-7aec-47b0-a628-ebdd68c01b2d"}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const result = await res.json();
      if (result.status == 200) {
        setAssignedPartner(result.data);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(
        "🚀 ~ file: PartnerInfo.js:11 ~ getPartnerAssigned ~ err:",
        err
      );
      setIsLoading(false);
      setAssignedPartner(null);
    }
  };
  const getVerifiedPartnerList = async () => {
    try {
      setIsPartnerLoading(true);
      const res = await fetch(`/api/admin/client/getVerifiedPartnerList`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      // console.log("🚀 ~ file: PartnerInfo.js:59 ~ getVerifiedPartnerList ~ result:", result)
      if (result.status == 200) {
        setPartnerList(result.data);
      }
      setIsPartnerLoading(false);
    } catch (err) {
      console.log(
        "🚀 ~ file: PartnerInfo.js:52 ~ getVerifiedPartnerList ~ err:",
        err
      );
    }
  };
  const assignPartner = async (partner) => {
    try {
      setIsAssigning(true);
      const res = await fetch("/api/admin/client/getAndAssignPartner", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ partnerId: partner.userId, userId: userId }),
      });
      const result = await res.json();
      if (result.status == 200) {
        // getPartnerAssigned(partner)
        setAssignedPartner(partner);
      }
      setIsAssigning(false);
    } catch (err) {
      console.log("🚀 ~ file: PartnerInfo.js:71 ~ assignPartner ~ err:", err);
      setIsAssigning(false);
    }
  };
  const handleAssign = async () => {
    assignPartner(option);
  };
  useEffect(() => {
    getPartnerAssigned();
  }, []);
  //   console.log(assignedPartner)
  if (isLoading) {
    return <Typography>Loading partner info...</Typography>;
  }
  return (
    <Box sx={{ p: "5px", boxShadow: "0px 3px 8px rgba(0, 0, 0, .25)" }}>
      {assignedPartner != null && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <Box sx={{ width: "100%" }}>
            <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
              Assigned Partner
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Name : </Typography>
            <Typography>{assignedPartner.name}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Email : </Typography>
            <Typography>{assignedPartner.email}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Phone : </Typography>
            <Typography>{assignedPartner.phone}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography sx={{ fontWeight: "bold" }}>Address : </Typography>
            <Typography>{assignedPartner.address}</Typography>
          </Box>
        </Box>
      )}
      {session.role != "ADMIN" && (
        <Box
          sx={{
            mt: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography>Please assign or change partner</Typography>
          <Autocomplete
            id="asynchronous-demo"
            sx={{ width: 300 }}
            open={open}
            onOpen={() => {
              setOpen(true);
              console.log("set open clicked");
              if (!partnerList) {
                getVerifiedPartnerList();
              }
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={(option, value) =>
              option.title === value.title
            }
            onChange={(event, option) => setOption(option)}
            getOptionLabel={(option) => {
              return `${option.email}(${option.name})`;
            }}
            options={partnerList || []}
            loading={isPartnerLoading}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Partner"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {isPartnerLoading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
          <Button
            disabled={option && !isAssigning ? false : true}
            onClick={handleAssign}
          >
            {isAssigning ? "Assigning partner" : "assign"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PartnerInfo;
