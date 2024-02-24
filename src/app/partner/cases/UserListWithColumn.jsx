"use client";
import UserList from "@/components/UserList";
import { Box, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
const columns = [
  { field: "userId", headerName: "ID" },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "email",
    headerName: "Email",
    // type: 'number',
    width: 250,
  },
  //   {
  //     field: "client",
  //     headerName: "Partner Id",
  //     description: "This column has a value getter and is not sortable.",
  //     // sortable: false,
  //     valueGetter: (params) => {
  //       if (params.row.client?.partnerId) return params.row.client?.partnerId;
  //       else return "Partner Not assigned!";
  //     },
  //     width: 200,
  //   },
  {
    field: "action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    renderCell: (params) => {
      console.log(params, "-------------------------------");
      return (
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton component={Link} href={`/partner/cases/${params.row.userId}`}>
            <VisibilityIcon />
          </IconButton>
          <IconButton component={Link} href={`/partner/cases/${params.row.userId}`}>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      );
    },
    width: 200,
  },
];
const UserListWithColumn = ({ rows }) => {
  return <UserList rows={rows} columns={columns} />;
};

export default UserListWithColumn;
