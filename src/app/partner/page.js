'use client'
import React, { useContext, useEffect, useState } from 'react'
import {Box, Grid, Avatar, useTheme, useMediaQuery, Button, IconButton} from "@mui/material"
import LeftBar from '@/components/LeftBar';
import { useRouter, useSearchParams } from 'next/navigation';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import DocumentPage from '@/components/UserDashboard/Document/DocumentPage';
import UserContextProvider, { UserContext } from '@/contexts/user/context';
import ProcessPage from '@/components/UserDashboard/ProcessPage/ProcessPage';
import getUser from '@/services/user/getUser';
import { setUser } from '@/contexts/user/action';
import { useLogin } from '@/hooks/auth';
import AssignedClient from '@/components/PartnerDashboard/AssignedClients/AssignedClient';

const Page = () => {

  const router = useRouter();
  console.log("router object", router);
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpened, setIsOpened] = useState(false);
  const User = useLogin();
  const sideBarStyle = {
    [theme.breakpoints.down('md')]: {
      position: 'fixed', 
      width: 240, 
      top: 0,
      transform: isOpened? "translateX(0)": "translateX(-240px)",
      transition: "transform .5s linear",
      zIndex: 10
    },
    backgroundColor: "whitesmoke",
  }
  const searchParams = useSearchParams();
  const q = searchParams.get('page');
  useEffect(() => {
    setIsOpened(false);
  }, [q]);
  const user = useContext(UserContext)
  const getDocuments = async (email, role) => {
    const res = await getUser(email, role);
    console.log("🚀 ~ file: DocumentPage.jsx:35 ~ getDocuments ~ res:", res)
    user.dispatch(setUser(res.data));
  }
  React.useEffect(() => {
    if(User && User.email){
      getDocuments(User.email, User.role);
    }
  }, []);
  return (
    <Box>
        <Grid container>
            <Grid item sx={sideBarStyle} md={2.5}>
              <Box sx={{minHeight: "100vh", borderRight: "1px solid black"}}>
                <LeftBar/>
              </Box>
              {
              mdDown && (!isOpened? 
              <IconButton onClick={() => setIsOpened(true)} sx={{position: "absolute",right: "-25%",cursor: "pointer", top: "50%",}}>
                <KeyboardDoubleArrowRightIcon sx={{fontSize: 50, ...animation}}>open</KeyboardDoubleArrowRightIcon>
              </IconButton>:
              <IconButton onClick={() => setIsOpened(false)} sx={{position: "absolute",right: "-25%",cursor: "pointer", top: "50%",}}>
                <KeyboardDoubleArrowLeftIcon sx={{fontSize: 50, ...animation}}>open</KeyboardDoubleArrowLeftIcon>
              </IconButton>
               )}
            </Grid>
            <Grid item xs= {12} md={9.5}>
              <Box sx={{minHeight: "100vh"}}>
                {q==="documents"? <DocumentPage/>: null}
                {q==="process"? <ProcessPage/>: null}
                {q==="aclients"? <AssignedClient/>: null}
                {/* {q==="process"? <ProcessPage/>: null} */}
              </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Page
const animation= {
  animation: 'animeBtn 2s linear infinite alternate',
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
      opacity: .5,
    }
  }
}
