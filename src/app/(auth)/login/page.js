'use client'
import { Alert, Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import login from '@/services/auth/login';
import { setLogin, useLogin } from '../../../hooks/auth';
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
import { useRouter } from 'next/navigation'
import Link from 'next/link';


const Login = () => {
  const loginUser = useLogin();
  console.log("use login 0000000000000000", loginUser)
  const [showPassword, setShowPassword] = useState(false);
  const [btnText, setBtnText] = useState("Login");
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword]  = useState("");
  const [error, setError] = useState(null);
  const router = useRouter()
  console.log(password)
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
      event.preventDefault();
      console.log("hi i am mouse down!")
  };
  const handleLogin  = async () => {
      // first need to validate the email and password
      
      console.log(email, password);
      if(!email.match(emailPattern)) {
          setError("Email is not valid!");
          setBtnText("Login");
          setIsClicked(false);
          return;
      }
      setIsClicked(true)
      setBtnText("Please Wait...");
      const res = await login({email, password});
      if(res.status !== 200) {
        setError(res.message);
        setIsClicked(false);
        setBtnText("Login");
        return ;
      }
      console.log("result while login is!", JSON.stringify(res));
      // setLogin(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      router.push("/")
      setIsClicked(false);
      setBtnText("Login");
  }
  
  return (
    <Box sx={{bgcolor: "whitesmoke", minHeight: ""}}>
        <Container sx={{minHeight: "100vh", display: "flex", alignItems: "center"}}>
            <Box sx={{display: "flex",bgcolor: "white", flexDirection: "column", p: "10px",flex: {xs: "0 0 90%", sm: "0 0 70%", md:"0 0 40%"},m: "auto",my: "auto", alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                {error && <Alert sx={{width: "100%", my: 1}} severity="error" onClose={() => setError(null)}>{error}</Alert>}
                <FormControl required sx={{ m: 1, mt: 2, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setError(null);
                    }}
                    type='email'
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <EmailIcon/>
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Email"
                  />
                </FormControl>
                <FormControl required sx={{ m: 1, my: 2, width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
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
                  />
                </FormControl>
                <Button
                 onClick={handleLogin}
                 disabled={!email.length || !password.length || isClicked}
                 sx={{
                  background: "#fff",
                  color: "#0d172a",
                  fontWeight: 600,
                  boxShadow: "1px 1px 10px rgba(166, 175, 195, .25)",
                  p: " 10px 15px",
                  border: "0px solid #e2e8f0",
                  "&:hover": {
                    backgroundColor: "#1e293b",
                    color: "#fff"
                  },
                  textTransform: "capitalize"
                 }}
                 >
                    {btnText}
                </Button>
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
                Not Sign up?
              </Typography>
              <Button component={Link} href="/register">
                Sign Up
              </Button>
            </Box>
            <Box></Box>
          </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Login;