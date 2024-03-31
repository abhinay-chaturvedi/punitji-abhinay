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

const Page = async ({ params }) => {
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
      <Container>
        <ClientProfile params={params} session={session} />
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
