"use client"
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import submitContactFrom from '@/services/SubmitForm/SubmitContactForm';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phoneNumber: '',
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
        const res = await submitContactFrom(formData)
        console.log("response from serviec file", res);
    } catch(err) {
        console.log("error occured while submiting form", err);
    }
    setFormData({
      name: '',
      email: '',
      subject: '',
      phoneNumber: '',
    });
  };

  return (
    <Box sx={{ maxWidth: {xs: 350, md: 400}, margin: '5px auto', bgcolor: '#white', p: 3, boxShadow: "1px 1px 5px 5px #d8e1f0" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Anytime Consulting
      </Typography>
      <Typography variant="p" gutterBottom>
        Our team can assist you in transforming Your business through.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
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
          fullWidth
          label="Subject"
          variant="outlined"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
}
