// "use server"
import UserList from "@/components/UserList";
import { getSession } from "@/lib/auth-service";
import db from "@/lib/db";
import { Box } from "@mui/material";
import { redirect } from "next/navigation";
import React from "react";
import UserListWithColumn from "./UserListWithColumn";

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
          <IconButton component={Link} href={`/partner/${params.row.userId}`}>
            <VisibilityIcon />
          </IconButton>
          <IconButton component={Link} href={`/partner/${params.row.userId}`}>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      );
    },
    width: 200,
  },
];

const Page = async () => {
  //   const prismaResult = await prisma.client.findMany({
  //     where: {
  //         partnerId: partnerId
  //     },
  //     select: {
  //         id: true,
  //         userId: true,
  //         name: true,
  //         email: true
  //     }
  // })
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  const clients = await db.client.findMany({
    where: {
      partnerId: session._id,
    },
    select: {
      id: true,
      userId: true,
      name: true,
      email: true,
    },
  });
  return (
    <Box>
      {/* <UserList columns={columns} rows={clients}/>
       */}
       <UserListWithColumn rows={clients}/>
    </Box>
  );
};

export default Page;
