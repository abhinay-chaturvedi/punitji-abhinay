
import React from "react";
import {
  Box, Divider,
} from "@mui/material";

import { redirect } from "next/navigation";



import ProfileDetailPage from "./_components/ProfileDetailPage";
import { getSession } from "@/lib/auth-service";
import SpouseDetail from "@/components/SpouseDetail";
import db from "@/lib/db";

const Page = async () => {
  
  const session = await getSession();
  if(!session) {
    redirect("/login")
  }
  const prismaResult= await db.client.findUnique({
    where: {
      userId: session._id
    },
    select: {
      previousRefusal: true,
      personalTies: true
    }
  })
  return (
    <Box sx={{width: "100%", height: "100%", p: "10px"}}>
      <ProfileDetailPage userId={session._id} refusals={prismaResult.previousRefusal} personalTies={prismaResult.personalTies? prismaResult.personalTies: {}} />
      <Divider sx={{mt: "5px"}}/>
      <SpouseDetail session={session}/>
    </Box>
  );
};

export default Page;

