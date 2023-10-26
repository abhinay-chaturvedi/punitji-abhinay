'use client'
import React from 'react'
import {Box, Grid, Avatar, useTheme, useMediaQuery, Button} from "@mui/material"
import LeftBar from '@/components/UserDashboard/LeftBar';
import { useRouter } from 'next/navigation';
const Page = () => {

  const router = useRouter();
  console.log("router object", router);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const sideBarStyle = {
    [theme.breakpoints.down('md')]: {
      position: 'fixed', 
      backgroundColor: "pink", 
      width: 280, 
      top: 0,
      transform: "translateX(-280px)",
      // transform: "translateX(0px)"
    }
  }
  return (
    <Box>
        <Grid container>
            <Grid item sx={sideBarStyle} md={2.5}>
              <Box sx={{minHeight: "100vh", borderRight: "1px solid black"}}>
                <LeftBar/>
              </Box>
              <Button sx={{position: "absolute",right: "-20%", top: "50%"}}>open</Button>
            </Grid>
            <Grid item xs= {12} md={9.5}>
              <Box sx={{minHeight: "100vh"}}>ksjdlks</Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Page
const a = {

}
