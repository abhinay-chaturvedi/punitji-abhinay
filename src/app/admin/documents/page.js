import prisma from "@/prisma/connect";
import { Box, Typography } from "@mui/material";
import React from "react";
import AddDocument from "./addDocument";
import { revalidatePath } from "next/cache";

const Page = async () => {
  // const documents =[];
  const documents = await prisma.document.findMany();
  //   console.log("🚀 ~ file: page.js:7 ~ Page ~ documents:", documents);
  const createDocument = async (formData) => {
    "use server";
    try {
      const name = formData.get("docName");
      const desc = formData.get("docDesc");
      //   console.log("extra", extra)
      const prismaResult = await prisma.document.create({
        data: {
          name,
          desc,
        },
      });
      // console.log(JSON.stringify(formData))
      revalidatePath("/admin/documents");
      return { data: "prismaResult", message: "success" };
    } catch (err) {
      console.log("🚀 ~ file: page.js:13 ~ createDocument ~ err:", err);
      return { err: err, message: "something went wrong" };
    }
  };
  //   if (!documents || documents.length == 0) {
  //     return <Box>there is no documents</Box>;
  //   }

  return (
    <Box>
      <Box>
        <Typography sx={{fontWeight: "bold", fontSize: {xs: "20px", md: "25px"}, textAlign: "center"}}>Documents List</Typography>
      </Box>
      {documents?.map((doc) => {
        return (
          <Box
            key={doc.id}
            sx={{ bgcolor: "wheat", padding: "7px 20px", marginY: "10px" }}
          >
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Name: </Typography>
              <Typography sx={{ color: "gray" }}>{doc.name}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Description: </Typography>
              <Typography sx={{ color: "gray" }}>{doc.desc}</Typography>
            </Box>
          </Box>
        );
      })}
      <AddDocument createDocument={createDocument} />
    </Box>
  );
};

export default Page;
