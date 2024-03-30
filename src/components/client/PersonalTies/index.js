"use client";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { toast } from "sonner";

const PersonalTies = ({ userId, personalTies, updateProfile }) => {
  const [pTies, setPTies] = useState(personalTies);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(null);
  const handleSave = async () => {
    try {
      if(!pTies.name) {
        setError("please enter name");
        return ;
      }
      if(!pTies.relation) {
        setError("please add relation");
        return ;
      }
      if(!pTies.country) {
        setError("please enter country");
        return ;
      }
      setDisabled(true);
      const result = await updateProfile(userId, "personalTies", pTies);
      if(result.status == 200) {
        toast.success("successfully saved");
      } else {
        toast.error(result.message);
      }
      
      setDisabled(false);
    } catch (err) {
      toast.error(err.message);
      setDisabled(false);
    }
  };
  return (
    <Box sx={{ mb: "10px" }}>
      <Box>
        <Typography
          sx={{
            fontWeight: "900",
            mt: "8px",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Personal Ties
        </Typography>
      </Box>
      {error && (
        <Alert
          severity="error"
          sx={{ mt: "6px" }}
          onClose={() => setError(null)}
        >
          {error}
        </Alert>
      )}
      <Box sx={{ display: { md: "flex" }, flexWrap: "wrap" }}>
        <Box sx={{ flex: 1, m: "5px" }}>
          <Typography>Name</Typography>
          <TextField
            label={"Name"}
            sx={{ width: "100%", minWidth: "200px" }}
            name="name"
            value={pTies.name? pTies.name: ""}
            onChange={(e) =>
              setPTies((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </Box>
        <Box sx={{ flex: 1, m: "5px" }}>
          <Typography>Relation</Typography>
          <TextField
            label={"Relation"}
            sx={{ width: "100%", minWidth: "200px" }}
            name="relation"
            value={pTies.relation? pTies.relation: ""}
            onChange={(e) =>
              setPTies((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </Box>

        <Box sx={{ flex: 1, m: "5px" }}>
          <Typography>Country</Typography>
          <TextField
            label={"Country"}
            sx={{ width: "100%", minWidth: "200px" }}
            name="country"
            value={pTies.country? pTies.country: ""}
            onChange={(e) =>
              setPTies((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </Box>
      </Box>
      <Box>
        <Button
          onClick={handleSave}
          disabled={disabled}
          sx={{
            bgcolor: "gray",
            color: "black",
            m: "auto",
            display: "block",
            marginY: "10px",
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalTies;
