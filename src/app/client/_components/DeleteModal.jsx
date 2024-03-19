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
import {  useFormStatus } from "react-dom";
import { useRef } from "react";
import { toast } from "sonner";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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
const DeleteModal = ({ text, onContinue }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleContinue = async () => {
    setIsLoading(true);
    let result = await onContinue();
    console.log("000000000", result);
    setIsLoading(false);
    if (result) {
      setOpen(false);
      toast.success("success")
    }
  };

  return (
    <Box>
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
              {text}
            </Typography>
          </Box>
          <Box sx={{display: "flex", justifyContent: "center", gap: "10px", mt: "15px"}}>
            <Button onClick={handleContinue} disabled={isLoading}>
              {isLoading ? "Please wait" : "Continue"}
            </Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
      <Button
        variant="contained"
        //   onClick={() => handleNext(step.name)}
        onClick={() => setOpen(true)}
        sx={{ mt: 1, mr: 1 }}
      >
        <DeleteOutlineIcon/>
      </Button>
    </Box>
  );
};

export default DeleteModal;
