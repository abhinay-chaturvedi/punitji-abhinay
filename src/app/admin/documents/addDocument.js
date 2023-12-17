"use client";
import CustomInput from "@/components/CustomInput";
import { Box, Button, Input, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
// import { useFormStatus } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const AddDocument = ({ createDocument }) => {
  const [isFormOpen, setIsFormOpen] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   console.log("🚀 ~ file: addDocument.js:11 ~ AddDocument ~ isSubmitting:", isSubmitting)
const formRef = useRef(null);
  const handleSubmit = async (formData) => {
    // setIsSubmitting(true);
    const result = await createDocument(formData);
    console.log("🚀 ~ file: addDocument.js:14 ~ handleSubmit ~ result:", result)
    if(!result.err) {
        formRef.current?.reset();
    }
    // setIsSubmitting(false);
  };
  return (
    <Box>
      {isFormOpen && (
        <Box
          action={handleSubmit}
          component="form"
          ref={formRef}
          sx={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              minWidth: "400px",
              flexDirection: { xs: "column", md: "row" },
              gap: "10px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "800" }}>Name: </Typography>
            <Input
              required
              sx={{ minWidth: "300px" }}
              components="input"
              name="docName"
              type="text"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              minWidth: "400px",
              flexDirection: { xs: "column", md: "row" },
              gap: "10px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "800" }}>Description: </Typography>
            <Input
              required
              sx={{ minWidth: "300px" }}
              components="input"
              name="docDesc"
              type="text"
            />
          </Box>
          <Submit/>
        </Box>
      )}
    </Box>
  );
};

export default AddDocument;

const Submit = () => {
  const formStatus = useFormStatus();
  console.log("🚀 ~ file: addDocument.js:76 ~ Submit ~ formStatus:", formStatus)
  return (
    <Button type="submit" component="button" disabled={formStatus.pending}>
      {formStatus.pending? "Please wait...": "add doc"}
    </Button>
  );
};
