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
import { useFormState, useFormStatus } from "react-dom";
import Success from "@/components/Success";
const EnterEmailFwd = () => {
  // const [email, setEmail] = useState(null);
  // const handleSubmit = async () => {
  //   const { data, error } = await sendForgotEmail({ email: email });
  //   if (error) {
  //     console.log("something went wrong");
  //   }
  //   console.log(data);
  // };
  const [state, formAction] = useFormState(sendForgotEmail, { ok: false });
  return (
    <Box sx={{ width: "100%" }}>
      {state.data ? (
        <Box>
          <Box>
            <Typography sx={{ mt: "10px", textAlign: "center" }}>
              Email sent! please check you email.
            </Typography>
            <Success />
          </Box>
        </Box>
      ) : (
        <Box
          component={"form"}
          action={formAction}
          sx={{
            display: "flex",
            maxWidth: "400px",
            mx: "auto",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {state.error && (
            <Typography sx={{ mt: "10px", textAlign: "center" }}>
              {state.error}
            </Typography>
          )}
          <FormControl
            required
            sx={{ m: 2, mt: 2, width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type="email"
              name="email"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <EmailIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Email"
            />
          </FormControl>
          <FormButton />
        </Box>
      )}
    </Box>
  );
};

export default EnterEmailFwd;

const FormButton = () => {
  const status = useFormStatus();
  return (
    <Box>
      <Button
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
        {"send"}
      </Button>
    </Box>
  );
};
