import Loader from "@/components/Loader";
import { Box, Container, Typography, Divider } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import ClientProfile from "@/components/ClientProfile";
import { getSession } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import SpouseDetail from "@/components/SpouseDetail";
import AssignDoc from "@/components/AssignDoc";
import VerticalLinearStepper from "@/components/VerticalStepper";
import PartnerAssignInfo from "@/components/PartnerAssignInfo";
import PreviousRefusals from "@/components/client/PreviousRefusals";
import PersonalTies from "@/components/client/PersonalTies";
import { cookies } from "next/headers";
import db from "@/lib/db";
export const dynamic = 'force-dynamic'
const Page = async ({ params }) => {
  // cookies().getAll();
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
      <Container>
        {/* <ClientProfile params={params} session={session} />
         */}
        {session.role == "ADMIN" && (
          <PartnerAssignInfo
            partnerId={prismaResult.partnerId}
            userId={params.clientId}
            session={session}
          />
        )}
        <ClientProfile params={params} session={session} client={client} />
        {/* <Container> */}
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
        {/* </Container> */}
        <SpouseDetail session={session} _id={params.clientId} />
        <VerticalLinearStepper userId={params.clientId} steps={clientSteps} />
        <Box sx={{ height: "10px" }}></Box>
        <AssignDoc
          clientDocuments={prismaResult.documents}
          userId={params.clientId}
        />
      </Container>
    </Box>
  );
};

export default Page;
