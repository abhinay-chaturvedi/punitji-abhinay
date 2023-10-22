'use client'
import { Alert, Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import register from '@/services/auth/register';
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [btnText, setBtnText] = useState("Sign Up");
    const [isClicked, setIsClicked] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword]  = useState("");
    const [address, setAddress] = useState({
        pincode: "",
        district: "",
        state: "",
        country: ""
    })
    const [error, setError] = useState(null);
    console.log(password)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
        console.log("hi i am mouse down!")
    };
    const handleRegister  = async () => {
        // first need to validate the email and password
        setIsClicked(true)
        setBtnText("Please Wait...");
        console.log(email, password);
        if(!email.match(emailPattern)) {
            setError("Email is not valid!");
            setBtnText("Login");
            setIsClicked(false);
            return;
        }
        const res = await register({name, phone, email, password, address});
        if(res.status !== 200) {
          setError(res.message);
        }
        console.log("result while login is!", JSON.stringify(res));
        setIsClicked(false);
        setBtnText("Sign Up");
    }
    const handleAddress = (e) => {
        setAddress((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    console.log(address)
  return (
    <Box sx={{bgcolor: "whitesmoke", minHeight: ""}}>
        <Container sx={{minHeight: "100vh", display: "flex", alignItems: "center"}}>
            <Box sx={{display: "flex",bgcolor: "white", flexDirection: "column", p: "10px",flex: {xs: "0 0 90%", sm: "0 0 70%", md:"0 0 40%"},m: "auto",my: "auto", alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                {error && <Alert sx={{width: "100%", my: 1}} severity="error" onClose={() => setError(null)}>{error}</Alert>}
                <FormControl required sx={{ m: 1, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-name"
                    onChange={(e) => {
                        setName(e.target.value)
                        setError(null);
                    }}
                    type='text'
                    label="name"
                  />
                </FormControl>
                <FormControl required sx={{ m: 1, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-phone">Phone</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-phone"
                    onChange={(e) => {
                        setPhone(e.target.value)
                        setError(null);
                    }}
                    type='text'
                    label="phone"
                  />
                </FormControl>
                <FormControl required sx={{ m: 1, width: "100%" }} variant="outlined">
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
                <FormControl required sx={{ m: 1, width: '100%' }} variant="outlined">
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
                <Box sx={{display: "flex", justifyContent: "space-between", gap: 2}}>
                    <TextField onChange={handleAddress} name='pincode' size='small' id="outlined-basic" label="pincode" variant="outlined" />
                    <TextField onChange={handleAddress} name='district' size='small' id="outlined-basic" label="district" variant="outlined" />
                </Box>
                <Box sx={{my: 2, display: "flex", justifyContent: "space-between", gap: 2}}>
                    <TextField onChange={handleAddress} name='state' size='small' id="outlined-basic" label="state" variant="outlined" />
                    <TextField onChange={handleAddress} name='country' size='small' id="outlined-basic" label="country" variant="outlined" />
                </Box>
                <Button
                 onClick={handleRegister}
                 disabled={!email.length || !password.length || !name.length || !phone.length || isClicked}
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
            </Box>
        </Container>
    </Box>
  )
}

export default Register;