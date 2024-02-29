import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";
import SideBarMenu from "./SideBarMenu";
import { getSession } from "@/lib/auth-service";
import { notFound, redirect } from "next/navigation";


const USideBar = async () => {
  const session = await getSession();
  console.log("🚀 ~ USideBar ~ session:", session)
  if(!session) {
    redirect("/login");
  }
  return (
    <Box
      sx={{
        bgcolor: "#F7F6FB",
        position: "fixed",
        height: "calc(100vh - 85px)",
        width: { xs: "100px", sm: "150px", md: "200px", lg: "300px" },
      }}
    >
      <Box
        sx={{
          p: "15px 0px",
          width: "100%",
          height: "100%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            p: "0px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Box>
            <Avatar sx={{ width: {xs: 50, md: 70}, height: {xs: 50, md: 70} }} src="/broken-image.jpg" />
          </Box>
          <Typography
            sx={{
              overflow: "hidden",
              textAlign: "center",
              textOverflow: "ellipsis",
              width: "calc(100%)",
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {session.email}
          </Typography>
        </Box>
        <Box sx={{marginTop: "10px"}}>
          <SideBarMenu session={session}/>
        </Box>
      </Box>
    </Box>
  );
};

export default USideBar;
