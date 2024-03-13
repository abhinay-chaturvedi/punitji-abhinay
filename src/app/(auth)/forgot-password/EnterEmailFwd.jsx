"use client";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import { sendForgotEmail } from "@/lib/email-service";

const EnterEmailFwd = () => {
  const [email, setEmail] = useState(null);
  const handleSubmit = async () => {
    const {data, error} = await sendForgotEmail({email: email});
    if(error) {
      console.log("something went wrong")
    }
    console.log(data);
  }
  return (
    <Box sx={{width: "100%"}}>
      <Box sx={{display: "flex",maxWidth: "400px", mx: "auto", flexDirection: "column", alignItems: "center"}}>
        <FormControl
          required
          sx={{ m: 2, mt: 2, width: "100%" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            onChange={(e) => {
              setEmail(e.target.value);
              // setError(null);
            }}
            type="email"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <EmailIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          // disabled={!email.length || !password.length || isClicked}
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
          {"btnText"}
        </Button>
      </Box>
    </Box>
  );
};

export default EnterEmailFwd;
