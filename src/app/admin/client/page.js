"use client";
import DataTable from "@/components/DataTable";
import Loader from "@/components/Loader";

import { Box, Container, IconButton } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "email",
    headerName: "Email",
    // type: 'number',
    width: 200,
  },
  {
    field: "client",
    headerName: "Partner Id",
    description: "This column has a value getter and is not sortable.",
    // sortable: false,
    valueGetter: (params) => {
      if (params.row.client?.partnerId) return params.row.client?.partnerId;
      else return "Partner Not assigned!";
    },
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    renderCell: (params) => {
      return (
        <Box sx={{display: "flex", gap: "5px", alignItems: "center", justifyContent: "center"}}>
          <IconButton component={Link} href={`/admin/client/${params.id}`}>
            <VisibilityIcon />
          </IconButton>
          <IconButton component={Link} href={`/admin/client/${params.id}`}>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      );
    },
    width: 200,
  },
];
const Page = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getAllClients = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/client/getAllClient", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await res.json();
      console.log("🚀 ~ file: page.js:37 ~ getAllClients ~ result:", result);
      if (result.status == 200) {
        setClients(result.data);
      }
      setIsLoading(false);
    } catch (err) {
      console.log("🚀 ~ file: page.js:29 ~ cosntgetAllClients= ~ err:", err);
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    getAllClients();
  }, []);
  if (isLoading) {
    return (
      <Box sx={{ width: "100%", height: "90vh" }}>
        <Loader />
      </Box>
    );
  }
  return (
    <Box>
      {/* <Container> */}
      <DataTable columns={columns} rows={clients} />
      {/* </Container> */}
    </Box>
  );
};

export default Page;
