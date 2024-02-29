"use client";
import DataTable from "@/components/DataTable";
import Loader from "@/components/Loader";

import { Box, Container, IconButton } from "@mui/material";
// import React, { useCallback, useContext, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import { UserContext } from "@/contexts/user/context";

const UserList = ({ columns, rows }) => {
//   const [clients, setClients] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
//   const { state: userState, dispatch: dispatchUserAction } =
//     useContext(UserContext);
//   console.log(
//     "🚀 ~ file: ClientList.js:67 ~ ClientList ~ userState:",
//     userState
//   );
//   const getAllClients = useCallback(async () => {
//     try {
//       const res = await fetch(
//         `/api/partner/getClients?partnerId=${userState.id}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         }
//       );
//       const result = await res.json();
//       console.log("🚀 ~ file: page.js:37 ~ getAllClients ~ result:", result);
//       if (result.status == 200) {
//         setClients(result.data);
//       }
//       setIsLoading(false);
//     } catch (err) {
//       console.log("🚀 ~ file: page.js:29 ~ cosntgetAllClients= ~ err:", err);
//       setIsLoading(false);
//     }
//   }, []);
//   useEffect(() => {
//     getAllClients();
//   }, []);
//   if (isLoading) {
//     return (
//       <Box sx={{ width: "100%", height: "90vh" }}>
//         <Loader />
//       </Box>
//     );
//   }
  return (
    <Box>
      {/* <Container> */}
      <DataTable columns={columns} rows={rows} />
      {/* </Container> */}
    </Box>
  );
};

export default UserList;
