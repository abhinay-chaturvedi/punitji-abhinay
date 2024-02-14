import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import React from "react";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
// import { useState } from "react";
import UpdateModal from "./UpdateModal";
import prisma from "@/prisma/connect";
import { revalidatePath } from "next/cache";
// const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };
const Query = ({item }) => {
  // const [open, setOpen] = useState(true)
  // const handleClose = () => {
  //     setOpen(false)
  // }
  const updateQuery = async (id, formData) => {
    "use server";
    // console.log("the value fields are !", id, data, formData.get("response"));
    // return {message: "success"};
    try {
      const response = formData.get("response");
      const prismaResult = await prisma.query.update({
        where: {
          id: id,
        },
        data: {
          response: response,
        },
      });
      revalidatePath("admin/queries");
      return {
        data: "prisma result",
        message: "success",
      };
    } catch (err) {
      return {
        err: err,
        message: "something went wrong!",
      };
    }
  };
  return (
    <Box sx={{ p: "10px", bgcolor: "whitesmoke", mb: "10px" }}>
      <Box
        sx={{
          flexDirection: { sm: "row", xs: "column" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>{item.name}</Typography>
        <Typography>{item.email}</Typography>
        <Typography>{item.userType}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ ml: "10px" }} variant="h5" component={"h5"}>
            {"Q- " + item.query}
          </Typography>
          {/* <Typography sx={{ ml: "15px" }} component={"h5"}>
            {item.id}
          </Typography> */}
          <Typography sx={{ ml: "15px" }} component={"h5"}>
            {item.response? item.response: "Not responded Yet!"}
          </Typography>
        </Box>
        <Box>
          <UpdateModal item={item} updateQuery={updateQuery} />
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default Query;
