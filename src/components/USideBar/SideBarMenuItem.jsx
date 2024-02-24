"use client";
import { UserContext } from "@/contexts/user/context";
import { Box, Divider, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useContext } from "react";

const SideBarMenuItem = ({ label, icon, url }) => {
  const path = usePathname();
  console.log("🚀 ~ path:", path);
  const user = useContext(UserContext);
  console.log("🚀 ~ user:", user);
  return (
    <Box component={Link} href={url}>
      <Box
        sx={{
          display: "flex",
          justifyContent: {xs: "center", md: "start"},
          p: "10px",
          borderRadius: "10px",
          bgcolor: url == path ? "white" : "",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Tooltip title={label} placement="top">{icon}</Tooltip>

        <Typography
          component="span"
          sx={{
            color: "black",
            fontSize: "18px",
            fontWeight: "bold",
            display: { xs: "none", md: "block" },
          }}
        >
          {label}
        </Typography>
      </Box>
      {/* <Divider /> */}
    </Box>
  );
};

export default SideBarMenuItem;
