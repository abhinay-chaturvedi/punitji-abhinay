"use client"
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { toast } from "sonner";
const UpdateCard = ({ userId, title, name, value, session }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(value);
  const [editedValue, setEditedValue] = useState(value);
  const [disabled, setDisabled] = useState(false);
  const handleSave = async () => {
    try {
        if(!editedValue) {
            return ;
        }
        setDisabled(true);
        const res = await fetch("/api/partner/profileDetail", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({userId: userId, [name]: editedValue})
        })
        const result = await res.json();
        if(result.status == 200) {
            setIsEdit(false);
            setText(result.data[name]);
            toast.success("updated!")
        }
        setDisabled(false);
    } catch(err) {
        console.error(err);
    }
  }
  return (
    <Box sx={{minWidth: {md: "320px"},flex: "1", bgcolor: "lightgray", borderRadius: "5px",p: "5px", mb: "5px"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{fontWeight: "bold"}}>{title}</Typography>
        {session?.role=="PARTNER" &&<Button disabled={name=="email"} sx={{bgcolor: "gray", color: "white"}} onClick={() => setIsEdit((prev) => !prev)}>
            <EditNoteIcon/>
            edit
            </Button>}
      </Box>
      <Box>
        {isEdit ? (
          <Box>
            <Box sx={{marginY: "5px"}}>
              <TextField placeholder={title} sx={{width: "100%"}} inputProps={{style: {padding: "12px"}}} value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />
            </Box>
            <Box sx={{display: "flex", gap: "5px", justifyContent: "center"}}>
              <Button disabled={disabled} onClick={handleSave} sx={{bgcolor: "gray", color: "white"}}>save</Button>
              <Button sx={{bgcolor: "gray", color: "white"}} onClick={() => setIsEdit(false)}>cancel</Button>
            </Box>
          </Box>
        ) : (
          <Typography>{text? text: "NA"}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default UpdateCard;
