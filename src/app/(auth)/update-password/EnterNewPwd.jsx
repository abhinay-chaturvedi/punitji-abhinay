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
import { useRouter, useSearchParams } from "next/navigation";
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
// import { experimental_useFormState as useFormState } from 'react-dom'
const EnterNewPwd = () => {
  const [password, setPassword] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = searchParams.get("userId");
  if(!userId) {
    return router.push("/login");
  }
  const handleSubmit = async (formData) => {
    // here i will just update the password in db and will redirect them to their new page.
    console.log("00000000000))))))))))))))))))))))", JSON.stringify(formData.get("email")));
    
    const res = await fetch("/api/auth/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({password: "skjlsjdlksj"})
    })
    const result = await res.json();
    console.log(result);
    return result;
  }
  // const [state, formAction] = useFormState(handleSubmit, {data: null});
  console.log("🚀 ~ EnterNewPwd ~ state:", state)
  return (
    <Box sx={{width: "100%"}}>
      <Box component={"form"} action={handleSubmit} sx={{display: "flex",maxWidth: "400px", mx: "auto", flexDirection: "column", alignItems: "center"}}>
        <FormControl
          required
          sx={{ m: 2, mt: 2, width: "100%" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-pwd">New Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            onChange={(e) => {
              setPassword(e.target.value);
              // setError(null);
            }}
            name="email"
            type="text"
            // endAdornment={
            //   <InputAdornment position="end">
            //     <IconButton aria-label="toggle password visibility" edge="end">
            //       <EmailIcon />
            //     </IconButton>
            //   </InputAdornment>
            // }
            label="New Password"
          />
        </FormControl>
        <FormButton/>
      </Box>
    </Box>
  );
};

export default EnterNewPwd;

const FormButton = () => {
  
  const status =  useFormStatus();
  console.log(status);
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
  )
}
