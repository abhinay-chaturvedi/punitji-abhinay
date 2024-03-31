import Loader from "@/components/Loader";
import { Box, Container, Typography, Divider, Button } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import ClientInfo from "./ClientInfo";
import Education from "./Education";
import PartnerInfo from "./PartnerInfo";
import WorkExperience from "./WorkExperience";
import LanguageTest from "./LanguageTest";

const ClientProfile = ({ params, session, client }) => {

  return (
    <Box>
      <Box>
        <Box sx={{ padding: "10px" }}>
          <ClientInfo basicInfo={client.client} />
          <Divider sx={{ marginY: "10px" }} />
          {/* <PartnerInfo client={client} session={session}/> */}
          {/* <Divider sx={{ marginY: "10px" }} /> */}
          <Education education={client.education} />
          <WorkExperience workExperience={client.workExperience}/>
          
          <LanguageTest languageTest={JSON.parse(JSON.stringify(client.languageTest))}/>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientProfile;
// where: {
//   id: userId
// },
// include: {
//   client: true,
//   steps: true,
//   education: true,
//   workExperience: true,
//   languageTest: true
// }
