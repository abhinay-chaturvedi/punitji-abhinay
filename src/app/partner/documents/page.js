import { getSession } from "@/lib/auth-service";
import db from "@/lib/db";
import { Box, Button, Container, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import React from "react";
import UploadFile from "./UploadFile";
import VisibilityIcon from "@mui/icons-material/Visibility";
const Page = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  const mergeDocs = await db.partner.findUnique({
    where: {
      userId: session._id,
    },
    select: {
      documents: true,
    },
  });
  console.log("🚀 ~ Page ~ mergeDocs:", mergeDocs);
  return (
    <Box>
      <Container>
        <Box sx={{ boxShadow: "0px 3px 8px rgba(0, 0, 0, .24)", p: "10px" }}>
          <Box
            sx={{
              m: "10px",
              width: "100%",
              display: { md: "flex" },
              textAlign: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: { md: "25px" }, textAlign: "center" }}>
              Consolidated documents
            </Typography>
            {mergeDocs.documents ? (
              <Button
                target="_blank"
                href={mergeDocs.documents}
                component="a"
                sx={{ textTransform: "capitalize", textAlign: "center" }}
                startIcon={<VisibilityIcon />}
                download
              >
                <Typography>view</Typography>
              </Button>
            ) : null}
          </Box>
          <UploadFile userId={session._id} docUrl={mergeDocs.documents} />
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
