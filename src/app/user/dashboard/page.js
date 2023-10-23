'use client'
import React from 'react'
import {Box, Grid, Avatar} from "@mui/material"
import LeftBar from '@/components/UserDashboard/LeftBar';
import { useRouter } from 'next/navigation';
const Page = () => {

  const router = useRouter();
  console.log("router object", router);
  return (
    <Box>
        <Grid container>
            <Grid item md={2.5}>
              <Box sx={{bgcolor: "whitesmoke", minHeight: "100vh", borderRight: "1px solid black"}}>
                <LeftBar/>
              </Box>
            </Grid>
            <Grid item md={9.5}>
              <Box sx={{bgcolor: "whitesmoke", minHeight: "100vh"}}>ksjdlks</Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Page