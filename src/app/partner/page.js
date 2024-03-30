import React from "react";
import {
  Box,
} from "@mui/material";



import Loader from "@/components/Loader";


// import QueryPage from "@/components/Query/QueryPage";
import Profile from "./_components/Profile";
import { getSession } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import db from "@/lib/db";

const Page = async () => {
      const session = await getSession();
      console.log("🚀 ~ Page ~ session:", session)
      if(!session) {
        return redirect("/login");
      }
      const partnerDetail = await db.partner.findUnique({
        where: {
          userId: session._id
        }
      })
      console.log("🚀 ~ Page ~ partnerDetail:", partnerDetail)
  return (
    <Box sx={{p:"10px"}}>
      <Profile userId={session._id} partnerDetail={partnerDetail} />
    </Box>
  );
};

export default Page;
// const animation = {
//   animation: "animeBtn 2s linear infinite alternate",
//   "@keyframes animeBtn": {
//     "0%": {
//       // fontSize:40,\
//       transform: "scale(.8, .8)",
//       color: "blue",
//       borderRadius: "50%",
//       backgroundColor: "yellow",
//     },
//     "50%": {
//       transform: "scale(1, 1)",
//       color: "red",
//       backgroundColor: "white",
//       borderRadius: "50%",
//     },
//     "100%": {
//       transform: "scale(1.2, 1.2)",
//       color: "gray",
//       backgroundColor: "black",
//       borderRadius: "50%",
//       opacity: 0.5,
//     },
//   },
// };
