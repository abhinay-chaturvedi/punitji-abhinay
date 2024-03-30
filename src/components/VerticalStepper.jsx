"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { Container } from "@mui/material";

// const steps = [
//   {
//     label: "Select campaign settings",
//     description: `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`,
//   },
//   {
//     label: "Create an ad group",
//     description:
//       "An ad group contains one or more ads which target a shared set of keywords.",
//   },
//   {
//     label: "Create an ad",
//     description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//   },
// ];
const stepsArr = [
  {
    label: "Assessment",
    name: "assessment",
    description: "Before continue, make sure you are done with the process.",
  },
  {
    label: "Visa Selection",
    name: "visaSelection",
    description: "Before continue, make sure you are done with the process.",
  },
  {
    label: "Sign Contract",
    name: "signContract",
    description: "Before continue, make sure you are done with the process.",
  },
  {
    label: "Documents",
    name: "documents",
    description: "Before continue, make sure you are done with the process.",
  },
  {
    label: "File Processing",
    name: "fileProcessing",
    description: "Before continue, make sure you are done with the process.",
  },
  {
    label: "File Review",
    name: "fileReview",
    description: "Before continue, make sure you are done with the process.",
  },
  {
    label: "File Submitted",
    name: "fileSubmitted",
    description: "Before continue, make sure you are done with the process.",
  },
  {
    label: "Update",
    name: "update",
    description: "Before continue, make sure you are done with the process.",
  },
  {
    label: "Final Result",
    name: "finalResult",
    description: "Before continue, make sure you are done with the process.",
  },
];
export default function VerticalLinearStepper({ steps: stepsObj, userId }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = useState(stepsObj);
  const [isCreatingProcess, setIsCreatingProcess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log(
    stepsObj,
    "--------------------------------*********************"
  );

  const handleNext = async (stepName) => {
    console.log("🚀 ~ handleNext ~ stepName:", stepName);
    let result = await completeProcess(stepName);
    return result;
  };

  //   const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   };

  const handleReset = () => {
    setActiveStep(0);
  };

  const findIndex = () => {
    let index = stepsArr.findIndex((item) => {
      return !steps[item.name];
    });
    console.log("index is : ", index);
    if (index == -1) index = stepsArr.length;
    setActiveStep(index);
  };
  useEffect(() => {
    if (steps) {
      findIndex();
    }
  }, []);
  const startProccess = async () => {
    try {
      setIsCreatingProcess(true);
      const res = await fetch("/api/client/steps", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId }),
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
  const completeProcess = async (stepName) => {
    console.log("🚀 ~ completeProcess ~ stepName:", stepName);
    // return "complete process";

    setIsLoading(true);
    try {
      const res = await fetch("/api/client/steps", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: steps.userId, [stepName]: true }),
      });
      const result = await res.json();
      console.log("🚀 ~ file: steps.js:79 ~ completeProcess ~ result:", result);
      if (result.status == 200) {
        console.log("we have successfully updated the process");
        setSteps(result.data);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return true;
      }
      return false;
    } catch (err) {
      console.log("🚀 ~ file: steps.js:70 ~ completeProcess ~ err:", err);
      setIsLoading(false);
      return false;
    }
  };
  return (
    <Container>
      <Box sx={{ boxShadow: "0px 3px 8px rgba(0, 0, 0, .24)" }}>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Process Status
          </Typography>
        </Box>

        <Box sx={{ p: "20px" }}>
          {steps == null ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
              }}
            >
              <Typography>Process not started, please have a look.</Typography>
              <Button onClick={startProccess} disabled={isCreatingProcess}>
                {isCreatingProcess
                  ? "Please wait while we create process"
                  : "Start Process"}
              </Button>
            </Box>
          ) : (
            <Stepper activeStep={activeStep} orientation="vertical">
              {stepsArr.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 8 ? (
                        <Typography variant="caption">Final step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        {/* <Button
                      variant="contained"
                      onClick={() => handleNext(step.name)}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === stepsArr.length - 1 ? "Finish" : "Continue"}
                    </Button> */}
                        <ConfirmModal
                          text={"Are You sure want to Complete?"}
                          onContinue={async () => await handleNext(step.name)}
                        />
                        {/* <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button> */}
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          )}
          {activeStep === stepsArr.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Box>
    </Container>
  );
}
