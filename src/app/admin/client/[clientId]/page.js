import Loader from "@/components/Loader";
import { Box, Container, Typography, Divider } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import ClientProfile from "@/components/ClientProfile";

const Page = ({ params }) => {
  return (
    <Box>
      <Container>
        <ClientProfile params={params} />
      </Container>
    </Box>
  );
};

export default Page;
