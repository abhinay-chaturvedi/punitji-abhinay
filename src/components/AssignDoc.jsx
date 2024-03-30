"use client"
import React, { useEffect, useState } from "react";
// import * as React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Checkbox, Container, Divider } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid gray",
  boxShadow: 24,
  p: 4,
  borderRadius: "7px"
};
const AssignDoc = ({ client, clientDocuments, userId }) => {
  // console.log("🚀 ~ file: AssignDoc.js:20 ~ AssignDoc ~ client:", client)
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const [docs, setDocs] = useState([]);
  const [docsToAdd, setDocsToAdd] = useState([]);
  const [isAssigningDocs, setIsAssigningDocs] = useState(false);
  const [documents, setDocuments] = useState(clientDocuments);
  console.log("🚀 ~ file: AssignDoc.js:28 ~ AssignDoc ~ documents:", documents);
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
        body: JSON.stringify({ userId: userId, docs: docsToAdd }),
      });
      const result = await res.json();
      console.log(
        "🚀 ~ file: AssignDoc.js:63 ~ handleAssign ~ result:",
        result
      );
      if (result.status == 200) {
        console.log("successfully assigned docs");
        setDocuments(result.data.documents);
        setDocs(docs?.filter((doc) => {
          return !result.data?.documents?.find((item) => item.id === doc.id);
        }));
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
  // const handleDownload = async () => {
  //   try {
  //     console.log("clling pi")
  //     const res = await fetch("api/downloadFile", {
  //       method: "GET",
  //       // body: JSON.stringify({url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"})
  //     })
  //     console.log("downlode -------------------------", res);
  //   } catch(err) {
  //   console.log("🚀 ~ handleDownload ~ err:", err)
  //   }
  // }
  return (
    <Container>
    <Box sx={{boxShadow: "0px 3px 8px rgba(0, 0, 0, .24)", p: "10px"}}>
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
              {doc.url?<Box>
                <Button component="a" href={doc.url} target="_blank">
                <VisibilityIcon/>
                </Button>
                <Button component="a" href={`/api/downloadFile?url=${doc.url}`} target="_blank" >
                <DownloadForOfflineIcon/>
                </Button>
              </Box>: "Not Uploaded"}
            </Box>
            <Divider/>
            </>
          );
        })}
      </Box>
      <Box sx={{display: "flex", justifyContent: "center", mt: "5px", alignItems: "center"}}>
        <Button sx={{bgcolor: "gray", color: "black", marginY: "5px"}} onClick={handleOpen}>Assign Documents</Button>
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
              <Button sx={{bgcolor: "lightgray", color: "black"}} disabled={isAssigningDocs} onClick={handleAssign}>
                {isAssigningDocs ? "Please Wait..." : "Done"}
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
    </Container>
  );
};

export default AssignDoc;
