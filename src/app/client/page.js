
import React from "react";
import {
  Box,
  Grid,
  Avatar,
  useTheme,
  useMediaQuery,
  Button,
  IconButton,
} from "@mui/material";

import { redirect } from "next/navigation";



import ProfileDetailPage from "./_components/ProfileDetailPage";
import { getSession } from "@/lib/auth-service";

const Page = async () => {
  
  const session = await getSession();
  if(!session) {
    redirect("/login")
  }
  return (
    <Box sx={{width: "100%", height: "100%", p: "10px"}}>
      <ProfileDetailPage userId={session._id} />
    </Box>
  );
};

export default Page;

