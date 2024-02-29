import React from "react";
import {
  Box,
  Grid,
  Avatar,
  useTheme,
  useMediaQuery,
  Button,
  IconButton,
} from "@mui/material";

import { useRouter, useSearchParams } from "next/navigation";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import UserContextProvider, { UserContext } from "@/contexts/user/context";

import getUser from "@/services/client/getUser";
import { setUser } from "@/contexts/user/action";
import { useLogin } from "@/hooks/auth";
// import Profile from "@/components/PartnerDashboard/Profile/Profile";
import Loader from "@/components/Loader";
import WithUserContext from "@/hocs/WithUserContext";

// import QueryPage from "@/components/Query/QueryPage";
import Profile from "./Profile";

const Page = () => {
  

    
  return (
    <Box sx={{p:"10px"}}>
      <Profile />
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
