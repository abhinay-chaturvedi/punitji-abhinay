"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Avatar,
  useTheme,
  useMediaQuery,
  Button,
  IconButton,
} from "@mui/material";
import LeftBar from "@/components/LeftBar";
import { useRouter, useSearchParams } from "next/navigation";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DocumentPage from "@/components/UserDashboard/Document/DocumentPage";
import UserContextProvider, { UserContext } from "@/contexts/user/context";
import ProcessPage from "@/components/UserDashboard/ProcessPage/ProcessPage";
import getUser from "@/services/client/getUser";
import { setUser } from "@/contexts/user/action";
import { useLogin } from "@/hooks/auth";
import MyDocuments from "@/components/PartnerDashboard/MyDocuments/MyDocuments";
import Profile from "@/components/PartnerDashboard/Profile/Profile";
import Loader from "@/components/Loader";
import WithUserContext from "@/hocs/WithUserContext";
import ClientList from "./ClientList";
import Client from "./Client";
import QueryPage from "@/components/QueryPage/QueryPage";

const Page = () => {
  const router = useRouter();
  console.log("router object", router);
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpened, setIsOpened] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const User = useLogin();
  const sideBarStyle = {
    [theme.breakpoints.down("md")]: {
      position: "fixed",
      width: 240,
      top: 0,
      transform: isOpened ? "translateX(0)" : "translateX(-240px)",
      transition: "transform .5s linear",
      zIndex: 10,
    },
    backgroundColor: "whitesmoke",
  };
  const searchParams = useSearchParams();
  const q = searchParams.get("page");
  const ClientId = searchParams.get("clientId");
  useEffect(() => {
    setIsOpened(false);
  }, [q]);

  React.useEffect(() => {
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;
    if (user) {
      setLoginUser(user);
      setIsLoading(false);
    } else {
      router.push("/login");
    }
  }, []);

  const { state: userState, dispatch: dispatchUserAction } =
    useContext(UserContext);
  React.useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user"));
    // if (!userState.email) {
      // dispatchUserAction(setUser(user));
    // }
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ width: "100%", height: "80vh" }}>
        <Loader />
      </Box>
    );
  }
  return (
    <Box>
            <Profile />
            {/* {q === "documents" ? <DocumentPage /> : null}
            {q === "cases" && !ClientId ? <ClientList /> : null}
            {q === "cases" && !!ClientId ? <Client params={{clientId: ClientId}} /> : null}
            {q === "aclients" ? <MyDocuments /> : null}
            {/* {q==="process"? <ProcessPage/>: null} */}
             {/* {q === "query"? <QueryPage/>: null}  */}
    </Box>
  );
};

export default Page;
const animation = {
  animation: "animeBtn 2s linear infinite alternate",
  "@keyframes animeBtn": {
    "0%": {
      // fontSize:40,\
      transform: "scale(.8, .8)",
      color: "blue",
      borderRadius: "50%",
      backgroundColor: "yellow",
    },
    "50%": {
      transform: "scale(1, 1)",
      color: "red",
      backgroundColor: "white",
      borderRadius: "50%",
    },
    "100%": {
      transform: "scale(1.2, 1.2)",
      color: "gray",
      backgroundColor: "black",
      borderRadius: "50%",
      opacity: 0.5,
    },
  },
};
