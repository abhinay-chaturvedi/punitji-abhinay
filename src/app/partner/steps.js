import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
const Steps = ({ client }) => {
  const [steps, setSteps] = useState(client.steps);
  const [isCreatingProcess, setIsCreatingProcess] = useState(false);
  const startProccess = async () => {
    try {
      setIsCreatingProcess(true);
      const res = await fetch("/api/client/steps", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: client.id }),
      });
      const result = await res.json();
      if (result.status == 200) {
        setSteps(result.data);
      }
      setIsCreatingProcess(false);
    } catch (err) {
      console.log("🚀 ~ file: steps.js:10 ~ startProccess ~ err:", err);
      setIsCreatingProcess(false);
    }
  };
  const handleProcess = async () => {
    try {
      startProccess();
    } catch (err) {
      console.log("🚀 ~ file: steps.js:32 ~ handleProcess ~ err:", err);
    }
  };
  console.log(steps);
  return (
    <Box>
      {steps == null ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Typography>Process not started, please have a look.</Typography>
          <Button onClick={handleProcess} disabled={isCreatingProcess}>
            {isCreatingProcess
              ? "Please wait while we create process"
              : "Start Process"}
          </Button>
        </Box>
      ) : (
        <Box>
            <Process steps={steps} setSteps={setSteps} step = "assessment" stepNameShow="Assessment"/>
            <Box sx={{height: "10px", width: "100%"}}></Box>
            <Process steps={steps} setSteps={setSteps} step = "visaSelection" stepNameShow="Visa Selection"/>
            <Box sx={{height: "10px", width: "100%"}}></Box>
            <Process steps={steps} setSteps={setSteps} step = "signContract" stepNameShow="Sign Contract"/>
            <Box sx={{height: "10px", width: "100%"}}></Box>
            <Process steps={steps} setSteps={setSteps} step = "documents" stepNameShow="Documents"/>
            <Box sx={{height: "10px", width: "100%"}}></Box>
            <Process steps={steps} setSteps={setSteps} step = "fileProcessing" stepNameShow="File Processing"/>
            <Box sx={{height: "10px", width: "100%"}}></Box>
            <Process steps={steps} setSteps={setSteps} step = "fileReview" stepNameShow="File Review"/>
            <Box sx={{height: "10px", width: "100%"}}></Box>
            <Process steps={steps} setSteps={setSteps} step = "fileSubmitted" stepNameShow="File Submitted"/>
            <Box sx={{height: "10px", width: "100%"}}></Box>
            <Process steps={steps} setSteps={setSteps} step = "update" stepNameShow="Update"/>
            <Box sx={{height: "10px", width: "100%"}}></Box>
            <Process steps={steps} setSteps={setSteps} step = "finalResult" stepNameShow="Final Result"/>
            <Box sx={{height: "10px", width: "100%"}}></Box>
        </Box>
      )}
    </Box>
  );
};

export default Steps;

const Process = ({steps, setSteps, step, stepNameShow}) => {
    const [isLoading, setIsLoading] = useState(false);
    const completeProcess = async (stepName) => {
        setIsLoading(true)
        try {
            const res = await fetch("/api/client/steps", {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({userId: steps.userId, [stepName]: true})
            })
            const result = await res.json();
            console.log("🚀 ~ file: steps.js:79 ~ completeProcess ~ result:", result)
            if(result.status == 200) {
                console.log("we have successfully updated the process");
                setSteps(result.data);
            }
            setIsLoading(false);
        } catch(err) {
            console.log("🚀 ~ file: steps.js:70 ~ completeProcess ~ err:", err)
            setIsLoading(false);
        }
    }

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center",justifyContent: "space-between", gap: "20px" }}>
        <Typography>
          <b>{"--) "}</b>{stepNameShow}
        </Typography>
        <Box sx={{flex: 1, height: "1px", bgcolor: "gray"}}></Box>
        {steps[step] ? (
          <Box sx={{ display: "flex", gap: "4px" }}>
            <Typography sx={{ color: "green" }}>Completed</Typography>
            <DoneAllIcon sx={{ color: "green" }} />
          </Box>
        ) : (
          <Button sx={{border: "1px solid green"}} disabled={isLoading} onClick={() => completeProcess(step)}> {isLoading? "Please Wait...": "mark as completed"}</Button>
        )}
      </Box>
    </Box>
  );
};
