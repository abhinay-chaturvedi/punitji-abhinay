import AssignDoc from "@/components/AssignDoc";
import ClientProfile from "@/components/ClientProfile";
import PartnerAssignInfo from "@/components/PartnerAssignInfo";
import SpouseDetail from "@/components/SpouseDetail";
import VerticalLinearStepper from "@/components/VerticalStepper";
import PersonalTies from "@/components/client/PersonalTies";
import PreviousRefusals from "@/components/client/PreviousRefusals";
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
      previousRefusal: true,
      personalTies: true,
      partnerId: true,
    },
  });
  console.log("🚀 ~ Page ~ prismaResult:", prismaResult);
  const clientSteps = await db.processSteps.findUnique({
    where: {
      userId: params.clientId,
    },
  });
  const client = await db.user.findUnique({
    where: {
      id: params.clientId,
    },
    include: {
      client: true,
      education: true,
      workExperience: true,
      languageTest: true,
    },
  });

  return (
    <Box>
      {session.role == "ADMIN" && (
        <PartnerAssignInfo
          partnerId={prismaResult.partnerId}
          userId={params.clientId}
          session={session}
        />
      )}
      <ClientProfile params={params} session={session} client={client} />
      <Container>
        <PreviousRefusals
          session={session}
          userId={params.clientId}
          refusals={prismaResult.previousRefusal}
        />
        <PersonalTies
          session={session}
          userId={params.clientId}
          personalTies={prismaResult.personalTies? prismaResult.personalTies: {}}
        />
      </Container>

      <SpouseDetail session={session} _id={params.clientId} />

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
