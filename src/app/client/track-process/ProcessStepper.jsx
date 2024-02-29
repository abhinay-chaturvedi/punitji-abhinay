import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import Divider from "@mui/material/Divider";
import ForwardIcon from "@mui/icons-material/Forward";
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import VerifiedIcon from "@mui/icons-material/Verified";
import Loader from "@/components/Loader";
const DocumentStepper = ({ userDetail }) => {
  console.log(
    "🚀 ~ file: ProcessStepper.jsx:10 ~ DocumentStepper ~ userDetail:",
    userDetail
  );
  const [isLoadingSteps, setIsLoadingSteps] = useState(true);
  const [steps, setSteps] = useState(null);
  const getProcessSteps = async () => {
    try {
      const userId = userDetail.id || "";
      const res = await fetch(`/api/client/steps?userId=${userId}`, {
        method: "GET",
        "Content-Type": "application/json",
        Accept: "application/json",
      });
      const result = await res.json();
      console.log(
        "🚀 ~ file: ProcessStepper.jsx:22 ~ getProcessSteps ~ result:",
        result
      );
      if (result.status == 200) {
        setSteps(result.data);
      }
      setIsLoadingSteps(false);
    } catch (err) {
      console.log(
        "🚀 ~ file: ProcessStepper.jsx:15 ~ getProcessSteps ~ err:",
        err
      );
      setIsLoadingSteps(false);
    }
  };
  useEffect(() => {
    getProcessSteps();
  }, []);
  if (isLoadingSteps) {
    return (
      <Box sx={{ display: "flex", width: "100%", height: "90vh" }}>
        <Loader />
      </Box>
    );
  }
  if (!steps) {
    return (
      <Box>
        <Typography>Process has not started yet</Typography>
      </Box>
    );
  }
  return (
    <Box>
      <Stack>
        <Row step={"Assessment"} marked={steps.assessment} />
        <Divider flexItem />
        <Row step={"Visa Selection"} marked={steps.visaSelection} />
        <Divider flexItem />
        <Row step={"Sign Contract"} marked={steps.signContract} />
        <Divider flexItem />
        <Row step={"Documents"} marked={steps.documents} />
        <Divider flexItem />
        <Row step={"File Processing"} marked={steps.fileProcessing} />
        <Divider flexItem />
        <Row step={"File Review"} marked={steps.fileReview} />
        <Divider flexItem />
        <Row step={"File Submitted"} marked={steps.fileSubmitted} />
        <Divider flexItem />
        <Row step={"Update"} marked={steps.update} />
        <Divider flexItem />
        <Row step={"Final Result"} marked={steps.finalResult} />
        <Divider flexItem />
      </Stack>
    </Box>
  );
};

export default DocumentStepper;

const Row = ({ marked, step }) => {
  // const [completedDate, setCompletedDate] = useState("");
  // useEffect(() => {
  //     const date = new Date();
  //     const string = date.toLocaleString();
  //     setCompletedDate(string);
  // })
  return (
    <Stack direction="row" alignItems="center">
      <Box
        flex={1}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ width: 3, height: 5, bgcolor: "#eae1ca" }}></Box>
        <Box
          sx={{
            border: "3px solid #eae1ca",
            bgcolor: "white",
            borderRadius: "50%",
            padding: "2px",
            width: 40,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {marked ? <VerifiedIcon /> : <UnpublishedIcon />}
        </Box>
        <Box sx={{ width: 2, height: 20, bgcolor: "#eae1ca" }}></Box>
      </Box>
      <Box flex={1}>
        <ForwardIcon />
      </Box>
      <Box
        flex={10}
        sx={{
        //   display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>{step}</Typography>
          {/* <Typography>{completedDate}</Typography> */}
        </Box>
        <Typography
          sx={{
            mr: "10px",
            // ml: "10px",
            color: marked ? "green" : "gray",
            fontWeight: "bold",
          }}
        >
          {marked ? "Completed" : "Under Process"}
        </Typography>
      </Box>
    </Stack>
  );
};
