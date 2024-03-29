"use client";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import register from "@/services/auth/register";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const adminRefId = "admin";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [btnText, setBtnText] = useState("Sign Up");
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("CLIENT");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [refId, setRefId] = useState(null);
  const [enterCode, setEnterCode] = useState(null);
  const [sentCode, setSentCode] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const router = useRouter();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    console.log("hi i am mouse down!");
  };
  const HandleVerification = async () => {
    try {
      if (!enterCode) {
        setError("Please enter verification code😉");
        return null;
      }
      if (enterCode != sentCode) {
        setError("Pleas enter valid code!🙁");
        return;
      }
      setIsRegistering(true);
      const res = await register({ name, email, password, role });
      if (res.status == 200) {
        console.log("successfully registered");
        router.push("/login");
      }
      setIsRegistering(false);
    } catch (err) {
      console.log(err);
      setIsRegistering(false);
    }
  };
  const sendEmail = async () => {
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      const result = await res.json();
      return result;
    } catch (err) {
      console.log("error got in the sendemail", err);
      return err;
    }
  };
  const handleRegister = async () => {
    // first need to validate the email and password

    if (!email.match(emailPattern)) {
      setError("Email is not valid!");
      setBtnText("Sign Up");
      setIsClicked(false);
      return;
    }
    if(password.length < 8) {
      setError("Password must be at least 8 character!");
      setBtnText("Sign Up");
      setIsClicked(false);
      return;
    }
    if (role === "PARTNER") {
      if (!refId) {
        setError("Please enter reference id!");
        return;
      }
      if (refId !== adminRefId) {
        return setError("Invalid reference id!");
      }
    }
    // return setError("success")
    setIsClicked(true);
    setBtnText("Please Wait...");

    // const res = await register({ name, email, password, role });

    const res = await sendEmail();
    if (res.status !== 200) {
      setError(res.message);
    } else {
      setIsEmailSent(true);
      setSentCode(res.code);
    }
    setIsClicked(false);
    setBtnText("Sign Up");
    // router.push("/login");
  };
  return (
    <Box sx={{ bgcolor: "whitesmoke", minHeight: "" }}>
      <Container
        sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            bgcolor: "white",
            flexDirection: "column",
            p: "20px",
            borderRadius: "10px",
            flex: { xs: "0 0 90%", sm: "0 0 70%", md: "0 0 50%" },
            m: "auto",
            my: "auto",
            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <Box
            component="div"
            sx={{
              mr: 2,
              position: "relative",
              width: "200px",
              height: "50px",
            }}
          >
            <Image layout="fill" objectFit="contain" src="/images/logo.png" />
          </Box>
          {error && (
            <Alert
              sx={{ width: "100%", my: 1 }}
              severity="error"
              onClose={() => setError(null)}
            >
              {error}
            </Alert>
          )}
          <FormControl required sx={{ m: 2, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              onChange={(e) => {
                setName(e.target.value);
                setError(null);
              }}
              type="text"
              label="name"
            />
          </FormControl>
          <FormControl required sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
              }}
              type="email"
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
          <FormControl required sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(null);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              inputProps={{
                minLength: "8",
              }}
            />
          </FormControl>
          <FormControl
            sx={{
              width: "100%",
              gap: "5px",
              display: "flex",
              flexDirection: { md: "row" },
              alignItems: { md: "center" },
            }}
          >
            <FormLabel id="demo-row-radio-buttons-group-label">
              Are You Client or Partner?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={role}
            >
              <FormControlLabel
                onChange={(e) => setRole(e.target.value)}
                value="CLIENT"
                control={<Radio />}
                label="Client"
              />
              <FormControlLabel
                value="PARTNER"
                control={<Radio />}
                label="Partner"
                onChange={(e) => setRole(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          {role === "PARTNER" ? (
            <FormControl
              required
              sx={{ m: 1, width: "100%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-name">
                Enter Reference Id
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-name"
                onChange={(e) => {
                  setRefId(e.target.value);
                  setError(null);
                }}
                type="text"
                label="Enter Reference Id"
              />
            </FormControl>
          ) : null}
          {isEmailSent && (
            <FormControl
              required
              sx={{ m: 1, width: "100%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-name">
                Email Verification Code
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-name"
                onChange={(e) => {
                  setEnterCode(e.target.value);
                  // setError(null);
                }}
                type="number"
                label="email verifcation code"
              />
            </FormControl>
          )}
          {!isEmailSent ? (
            <Button
              onClick={handleRegister}
              disabled={
                !email.length || !password.length || !name.length || isClicked
              }
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
              {btnText}
            </Button>
          ) : (
            <Button
              onClick={HandleVerification}
              disabled={isRegistering}
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
              {isRegistering ? "Please wait..." : "Continue"}
            </Button>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mt: "5px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold", color: "gray" }}>
                Already Sign up?
              </Typography>
              <Button component={Link} href="/login">
                Login
              </Button>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
