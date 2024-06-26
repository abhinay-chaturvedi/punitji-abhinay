
import React from "react";
import {
  Box, Divider,
} from "@mui/material";

import { redirect } from "next/navigation";



import ProfileDetailPage from "./_components/ProfileDetailPage";
import { getSession } from "@/lib/auth-service";
import SpouseDetail from "@/components/SpouseDetail";
import db from "@/lib/db";
import { cookies } from "next/headers";

const Page = async () => {
  cookies().getAll();
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
      <ProfileDetailPage session={session} userId={session._id} refusals={prismaResult.previousRefusal} personalTies={prismaResult.personalTies? prismaResult.personalTies: {}} />
      <Divider sx={{mt: "5px"}}/>
      <SpouseDetail session={session} _id={session._id}/>
    </Box>
  );
};

export default Page;

