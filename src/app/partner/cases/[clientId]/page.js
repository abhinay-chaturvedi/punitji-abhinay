import AssignDoc from "@/components/AssignDoc";
import ClientProfile from "@/components/ClientProfile";
import SpouseDetail from "@/components/SpouseDetail";
import VerticalLinearStepper from "@/components/VerticalStepper";
import { getSession } from "@/lib/auth-service";
import db from "@/lib/db";
import { Box, Container, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import React from "react";

const Page = async ({ params }) => {
  // console.log(params)
  const session = await getSession();
  if (!session) {
    return redirect("/login");
  }
  const prismaResult = await db.client.findUnique({
    where: {
      userId: params.clientId,
    },
    select: {
      documents: true,
    },
  });
  const clientSteps = await db.processSteps.findUnique({
    where: {
      userId: params.clientId,
    },
  });
  return (
    <Box>
      <ClientProfile params={params} session={session}/>
      {/* <Box sx={{ boxShadow: "0px 3px 8px rgba(0, 0, 0, .24)" }}> */}
      <SpouseDetail session={session} _id={params.clientId} />
      {/* </Box> */}
      <VerticalLinearStepper userId={params.clientId} steps={clientSteps} />
      <Box sx={{ height: "10px" }}></Box>
      <AssignDoc
        clientDocuments={prismaResult.documents}
        userId={params.clientId}
      />
    </Box>
  );
};

export default Page;
