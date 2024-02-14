"use client";
import {
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useRef } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "10px",
  //   border: "2px solid gray",
  boxShadow: 24,
  p: 4,
};
const UpdateModal = ({ item, updateQuery }) => {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState(item.response);
  const handleClose = () => {
    setOpen(false);
  };
  const updateQueryBind = updateQuery.bind(null, item.id);
  //   const updateUserWithId = updateUser.bind(null, userId)
  // const formRef = useRef(null);
  const handleSubmit = async (formData) => {
    // setIsSubmitting(true);
    const result = await updateQueryBind(formData);
    console.log(
      "🚀 ~ file: addDocument.js:14 ~ handleSubmit ~ result:",
      result
    );
    if (!result.err) {
      // formRef.current?.reset();
      setOpen(false);
    }
    // setIsSubmitting(false);
  };

  return (
    <Box sx={{ p: "10px", bgcolor: "whitesmoke", mb: "10px" }}>
      <Button onClick={() => setOpen(true)} startIcon={<ReplyAllIcon />}>
        reply
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Respond Query
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold", p: " 10px 5px" }}>
              {"Q- " + item.query}
            </Typography>
          </Box>
          <Box
            component={"form"}
            action={handleSubmit}
            //   ref={formRef}
          >
            <TextField
              id="outlined-multiline-static"
              label="Response"
              name="response"
              multiline
              minRows={2}
              sx={{ width: "100%" }}
              fullWidth={true}
              //   ref={ref}
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              //   defaultValue="Default Value"
            />
            {/* <button>submit</button>
             */}
            <Box sx={{display: "flex", justifyContent: "center", mt: "5px"}}>
            <Submit />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default UpdateModal;
const Submit = () => {
  const formStatus = useFormStatus();
  console.log(
    "🚀 ~ file: addDocument.js:76 ~ Submit ~ formStatus:",
    formStatus
  );
  return (
    <Button sx={{bgcolor: "whitesmoke"}} type="submit" component="button" disabled={formStatus.pending}>
      {formStatus.pending ? "Please wait..." : "add doc"}
    </Button>
  );
};
