import React, { useEffect, useState } from "react";
// import * as React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Checkbox, Divider } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AssignDoc = ({ client }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [docs, setDocs] = useState([]);
  const [docsToAdd, setDocsToAdd] = useState([]);
  console.log("🚀 ~ file: AssignDoc.js:25 ~ AssignDoc ~ docsToAdd:", docsToAdd)
  const getAllDocuments = async () => {
    try {
        const res = await fetch("/api/document/upload", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        const result = await res.json();
        console.log("🚀 ~ file: AssignDoc.js:34 ~ getAllDocuments ~ result:", result)
        if(result.status == 200) {
            setDocs(result.data);
        }
    } catch (err) {
      console.log("🚀 ~ file: AssignDoc.js:27 ~ getAllDocuments ~ err:", err);
    }
  };
  useEffect(() => {
    getAllDocuments()
  }, [])
  return (
    <Box>
      <Box>
        {client.client?.documents?.map((doc) => {
          return <Box>hello</Box>;
        })}
      </Box>
      <Box>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box>
                <Typography sx={{fontWeight: "bold", textAlign: "center", fontSize: "20px"}}>Choose Documents</Typography>
            </Box>
            {docs.map((doc) => (
              <>
                <Box sx={{ display: "flex", alignItems: "center" }} key={doc.id}>
                  <Checkbox
                    onChange={(e) => {
                        if(e.target.checked) {
                            setDocsToAdd((prev) => [...prev, doc])
                        } else {
                            setDocsToAdd((prev) => prev.filter((item) => doc.id!=item.id))
                        }
                    }}
                    defaultChecked
                    color="success"
                  />
                  <Box>
                    <Typography sx={{ fontWeight: "500" }}>{doc.name}</Typography>
                    <Typography sx={{ fontSize: "10px" }}>
                      {doc.desc}
                    </Typography>
                  </Box>
                </Box>
                <Divider />
              </>
            ))}
          </Box>
        </Modal>
        <Button>assign doc</Button>
      </Box>
    </Box>
  );
};

export default AssignDoc;
