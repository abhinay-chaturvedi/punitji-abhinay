"use client";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { toast } from "sonner";
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
const VerifyPartnerCard = ({ userId, verifyPartner }) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleClose = () => {
    console.log("hello from this side");
    setOpen(false);
  };
  const handleVerify = async () => {
    try {
      console.log("verifying");
      setDisabled(true);
      const result = await verifyPartner();
      if (result) {
        // setPartner(result.data);
        toast.success("Partner Verified");
      }
      setDisabled(false);
    } catch (err) {
      console.error(err);
      setDisabled(false);
    }
  };
  return (
    <Box>
      <Box sx={{ bgcolor: "whitesmoke", p: "5px", borderRadius: "5px" }}>
        <Typography sx={{ textAlign: "center", fontWeight: "bold", mb: "5px" }}>
          Since the partner is not verified, please ensure to verify them once
          you have reviewed all the details.
        </Typography>
        <Button
          sx={{
            bgcolor: "lightgray",
            color: "black",
            display: "block",
            m: "auto",
          }}
          onClick={() => setOpen(true)}
        >
          Verify
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center", fontWeight: "bold", mb: "5px" }}
          >
            Are you sure want to verify this partner?
          </Typography>
          <Box sx={{ display: "flex", gap: "8px", justifyContent: "center" }}>
            <Button
              disabled={disabled}
              onClick={handleVerify}
              sx={{ bgcolor: "lightgray", color: "black" }}
            >
              Verify
            </Button>
            <Button
              disabled={disabled}
              onClick={() => setOpen(false)}
              sx={{ bgcolor: "lightgray", color: "black" }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default VerifyPartnerCard;
