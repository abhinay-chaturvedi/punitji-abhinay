"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import submitContactFrom from "@/services/SubmitForm/SubmitContactForm";
import { useFormStatus } from "react-dom";
import Success from "../Success";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to an API or perform other actions.
    console.log(formData);
    // Reset the form
    try {
      setPending(true);
      const res = await submitContactFrom(formData);
      // console.log("response from serviec file", res);
      setPending(false);
      setShow(true);
    } catch (err) {
      console.log("error occured while submiting form", err);
      setPending(false);
    }
    setFormData({
      name: "",
      email: "",
      subject: "",
      phoneNumber: "",
    });
  };

  return (
    <Box
      sx={{
        // backgroundColor: "transparent",
        minHeight: "500px",
        maxWidth: { xs: 350, md: 400 },
        margin: "5px auto",
        // bgcolor: "whitesmoke",
        background: "rgba(255,255,255,0.6)",
        // backdropFilter: "blur(5px)",
        color: "black",
        // opacity: 1,
        p: 3,
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Anytime Consulting
      </Typography>
      <Typography sx={{ color: "black" }} variant="p" gutterBottom>
        Our team can assist you in transforming Your business through.
      </Typography>
      {!show ? (
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            // color='black'
            sx={{
              background: "rgb(255, 255, 255, .8)",
              borderRadius: "8px",
              input: { color: "black", fontWeight: "600" },
              "&::placeholder": { color: "black", fontWeight: "600" },
            }}
          />
          <TextField
            sx={{background: "rgb(255, 255, 255, .8)", borderRadius: "8px"}}
            required
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            sx={{background: "rgb(255, 255, 255, .8)", borderRadius: "8px"}}
            required
            fullWidth
            label="Subject"
            variant="outlined"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            sx={{background: "rgb(255, 255, 255, .8)", borderRadius: "8px"}}
            required
            fullWidth
            label="Phone Number"
            variant="outlined"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            sx={{bgcolor: "black", color: "white", "&:hover": {color: "black"}}}
            type="submit"
            // variant="contained"
            // color="primary"
            fontWeight="bold"
            fullWidth
            disabled={pending}
          >
            Submit
          </Button>
        </form>
      ) : (
        <Box>
          <Success />
          <Typography sx={{ fontWeight: "bold" }}>
            Thank You. We have sent your information to admin. We will contact
            you soon.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
