"use client";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import { sendForgotEmail } from "@/lib/email-service";
import { useRouter, useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";
import { demoAction } from "@/server-actions/query-actions";
import { updatePassword } from "@/lib/auth-service";
import Success from "@/components/Success";
const EnterNewPwd = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = searchParams.get("userId");
  const [state, formAction] = useFormState(updatePassword, { id: userId });
  // console.log("🚀 ~ EnterNewPwd ~ userId:", userId)
  if (!userId) {
    return router.push("/login");
  }

  // console.log("🚀 ~ EnterNewPwd ~ state:", state);
  if (state.data) {
    setTimeout(() => {
      router.push("/login");
    }, [5000]);
  }
  return (
    <Box sx={{ width: "100%" }}>
      {state.data ? (
        <Box>
          <Box>
            <Typography sx={{mt: "10px", textAlign: "center" }}>
              Password successfully updated!
            </Typography>
            <Success />
          </Box>
        </Box>
      ) : (
        <Box
          component={"form"}
          action={formAction}
          method="PUT"
          sx={{
            display: "flex",
            maxWidth: "400px",
            mx: "auto",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl
            required
            sx={{ m: 2, mt: 2, width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-pwd">
              New Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              name="password"
              type="password"
              // endAdornment={
              //   <InputAdornment position="end">
              //     <IconButton aria-label="toggle password visibility" edge="end">
              //       <EmailIcon />
              //     </IconButton>
              //   </InputAdornment>
              // }
              label="New Password"
              inputProps={{
                minLength: "8",
              }}
            />
          </FormControl>
          <FormButton />
        </Box>
      )}
    </Box>
  );
};

export default EnterNewPwd;

const FormButton = () => {
  const status = useFormStatus();
  // console.log(status);
  return (
    <Box>
      <Button
        // onClick={handleSubmit}
        type="submit"
        disabled={status.pending}
        sx={{
          background: "#fff",
          color: "#0d172a",
          fontWeight: 600,
          boxShadow: "1px 1px 10px rgba(166, 175, 195, .25)",
          p: " 10px 15px",
          border: "0px solid #e2e8f0",
          "&:hover": {
            backgroundColor: "#1e293b",
            color: "#fff",
          },
          textTransform: "capitalize",
        }}
      >
        {"Change"}
      </Button>
    </Box>
  );
};
