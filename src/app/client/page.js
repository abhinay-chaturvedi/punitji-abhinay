
import React from "react";
import {
  Box,
} from "@mui/material";

import { redirect } from "next/navigation";



import ProfileDetailPage from "./_components/ProfileDetailPage";
import { getSession } from "@/lib/auth-service";
import SpouseDetail from "@/components/SpouseDetail";
import db from "@/lib/db";

const Page = async () => {
  
  const session = await getSession();
  console.log("revalidate check ---------------", session)
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
  // console.log("🚀 ~ Page ~ refusals:", refusals)
  return (
    <Box sx={{width: "100%", height: "100%", p: "10px"}}>
      <ProfileDetailPage userId={session._id} refusals={prismaResult.previousRefusal} personalTies={prismaResult.personalTies? prismaResult.personalTies: {}} />
      <SpouseDetail session={session}/>
    </Box>
  );
};

export default Page;

