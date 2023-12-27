"use client";
import React, { useContext } from "react";
import { Box, Typography, Stack, Avatar } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import FolderIcon from "@mui/icons-material/Folder";
import PeopleIcon from "@mui/icons-material/People";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { useSearchParams } from "next/navigation";
import { UserContext } from "@/contexts/user/context";

const LeftBar = ({ userDetail }) => {
  const searchParams = useSearchParams();
  // console.log("--------------------", searchParams)
  const q = searchParams.get("page");
  console.log("query", q);

  return (
    <Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar sx={{ width: 70, height: 70 }} src="/broken-image.jpg" />
        <Typography
          component="span"
          sx={{ color: "black", fontWeight: "bold" }}
        ></Typography>
        <Typography component="span" sx={{ color: "gray" }}>
          {userDetail?.name}
        </Typography>
      </Box>
      <Divider />
      <Box>
        <Stack>
          <Box
            component={Link}
            href={`/${userDetail.role === "CLIENT" ? "client" : "partner"}`}
            sx={{
              display: "flex",
              color: "#520670",
              bgcolor: !q ? "white" : "",
              gap: 2,
              alignItems: "center",
              p: "10px",
            }}
          >
            <DashboardIcon />
            <Typography
              component="span"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Profile
            </Typography>
          </Box>
          {userDetail.role === "CLIENT" && (
            <Box
              component={Link}
              href={`/${
                userDetail.role === "CLIENT" ? "client" : "partner"
              }/?page=process`}
              sx={{
                color: "#520670",
                bgcolor: q === "process" ? "white" : "",
                display: "flex",
                gap: 2,
                alignItems: "center",
                p: "10px",
              }}
            >
              <TrackChangesIcon />
              <Typography
                component="span"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Track Process
              </Typography>
            </Box>
          )}
          {userDetail.role === "PARTNER" && (
            <Box
              component={Link}
              href={`/partner/?page=cases`}
              sx={{
                color: "#520670",
                bgcolor: q === "cases" ? "white" : "",
                display: "flex",
                gap: 2,
                alignItems: "center",
                p: "10px",
              }}
            >
              <AccessibilityNewIcon />
              <Typography
                component="span"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                My Cases
              </Typography>
            </Box>
          )}
          <Divider sx={{ width: "100%" }} />
          {userDetail.role === "CLIENT" && (
            <Box
              component={Link}
              href={`/${
                userDetail.role === "CLIENT" ? "client" : "partner"
              }/?page=documents`}
              sx={{
                color: "#520670",
                bgcolor: q === "documents" ? "white" : "",
                display: "flex",
                gap: 2,
                alignItems: "center",
                p: "10px",
              }}
            >
              <FolderIcon />
              <Typography
                component="span"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Documents
              </Typography>
            </Box>
          )}
          {userDetail.role === "PARTNER" && (
            <Box
              component={Link}
              href={`/partner/?page=aclients`}
              sx={{
                color: "#520670",
                bgcolor: q === "aclients" ? "white" : "",
                display: "flex",
                gap: 2,
                alignItems: "center",
                p: "10px",
              }}
            >
              <PeopleIcon />
              <Typography
                component="span"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                My Documents
              </Typography>
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default LeftBar;
