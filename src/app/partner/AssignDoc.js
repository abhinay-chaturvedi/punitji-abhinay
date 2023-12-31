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
  // console.log("🚀 ~ file: AssignDoc.js:20 ~ AssignDoc ~ client:", client)
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const [docs, setDocs] = useState([]);
  const [docsToAdd, setDocsToAdd] = useState([]);
  const [isAssigningDocs, setIsAssigningDocs] = useState(false);
  const [documents, setDocuments] = useState(client.client?.documents);
  // console.log("🚀 ~ file: AssignDoc.js:28 ~ AssignDoc ~ documents:", documents);
  // console.log("🚀 ~ file: AssignDoc.js:25 ~ AssignDoc ~ docsToAdd:", docsToAdd);
  const handleOpen = () => {
    setOpen(true);
    setDocsToAdd([]);
  };
  const getAllDocuments = async () => {
    try {
      const res = await fetch("/api/document/upload", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      // console.log(
      //   "🚀 ~ file: AssignDoc.js:34 ~ getAllDocuments ~ result:",
      //   result
      // );
      if (result.status == 200) {
        setDocs(result.data?.filter((doc) => {
          return !documents.find((item) => item.id === doc.id);
        }));
      }
    } catch (err) {
      console.log("🚀 ~ file: AssignDoc.js:27 ~ getAllDocuments ~ err:", err);
    }
  };
  const handleAssign = async () => {
    try {
      if (docsToAdd.length <= 0) return;
      setIsAssigningDocs(true);
      const res = await fetch("/api/assignDoc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ userId: client.id, docs: docsToAdd }),
      });
      const result = await res.json();
      console.log(
        "🚀 ~ file: AssignDoc.js:63 ~ handleAssign ~ result:",
        result
      );
      if (result.status == 200) {
        console.log("successfully assigned docs");
        setDocuments(result.data.documents);
      }

      setIsAssigningDocs(false);
      setDocsToAdd([]);
      handleClose();
    } catch (err) {
      console.log("🚀 ~ file: AssignDoc.js:48 ~ handleAssign ~ err:", err);
      setIsAssigningDocs(false);
    }
  };
  useEffect(() => {
    getAllDocuments();
  }, []);
  return (
    <Box>
      <Box>
        <Typography sx={{textAlign: "center", fontWeight: "bold"}}>Documents Uploaded</Typography>
      </Box>
      <Box>
        {documents?.map((doc) => {
          return (
            <>
            <Box sx={{display: "flex",mt: "5px", justifyContent: "space-between", alignItems: "center"}}>
              <Box>
                <Typography sx={{fontWeight: "bold"}}>{doc.name}</Typography>
                <Typography sx={{ml: "5px", mt: 0, fontSize: "10px"}}>{doc.desc}</Typography>
              </Box>
              <Box>view</Box>
            </Box>
            <Divider/>
            </>
          );
        })}
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", mt: "5px", alignItems: "center"}}>
        <Button onClick={handleOpen}>Assign Documents</Button>
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
                Choose Documents
              </Typography>
            </Box>
            {docs.map((doc) => (
              <>
                <Box
                  sx={{ display: "flex", alignItems: "center" }}
                  key={doc.id}
                >
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDocsToAdd((prev) => [
                          ...prev,
                          { ...doc, url: null },
                        ]);
                      } else {
                        setDocsToAdd((prev) =>
                          prev.filter((item) => doc.id != item.id)
                        );
                      }
                    }}
                    color="success"
                  />
                  <Box sx={{ marginBottom: "10px" }}>
                    <Typography sx={{ fontWeight: "500" }}>
                      {doc.name}
                    </Typography>
                    <Typography sx={{ fontSize: "10px" }}>
                      {doc.desc}
                    </Typography>
                  </Box>
                </Box>
                <Divider />
              </>
            ))}
            <Box sx={{ display: "flex", mt: "5px", justifyContent: "center" }}>
              <Button disabled={isAssigningDocs} onClick={handleAssign}>
                {isAssigningDocs ? "Please Wait..." : "Done"}
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default AssignDoc;
