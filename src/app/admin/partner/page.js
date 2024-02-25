"use client";
import DataTable from "@/components/DataTable";
import Loader from "@/components/Loader";

import { Box, Container, IconButton } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DangerousIcon from '@mui/icons-material/Dangerous';
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
    field: "phone",
    headerName: "Phone",
    description: "This column has a value getter and is not sortable.",
    // sortable: false,
    valueGetter: (params) => {
       return params.row.partner?.phone;
    },
    width: 150,
  },
  {
    field: "dealIn",
    headerName: "Deal In",
    description: "This column has a value getter and is not sortable.",
    // sortable: false,
    valueGetter: (params) => {
       return params.row.partner?.dealIn;
    },
    width: 150,
  },
  {
    field: "isVerified",
    headerName: "Is Verified",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    renderCell: (params) => {
       return (
        <Box sx={{display: "flex", width: "100%"}}>
            {params.row.partner?.isVerified? <CheckCircleIcon/>: <DangerousIcon/>}
        </Box>
       );
    },
    width: 150
  },
  {
    field: "action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    renderCell: (params) => {
      return (
        <Box sx={{display: "flex", gap: "5px", alignItems: "center", justifyContent: "center"}}>
          <IconButton component={Link} href={`/admin/partner/${params.id}`}>
            <VisibilityIcon />
          </IconButton>
          <IconButton component={Link} href={`/admin/partner/${params.id}`}>
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
  const getAllPartner = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/partner/getAllPartner", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await res.json();
      // console.log("🚀 ~ file: page.js:37 ~ getAllClients ~ result:", result);
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
    getAllPartner();
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
