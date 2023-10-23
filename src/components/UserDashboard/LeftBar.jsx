'use client'
import React from 'react'
import {Box, Typography, Stack, Avatar} from "@mui/material"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

const LeftBar = () => {
    const searchParams = useSearchParams();
    // console.log("--------------------", searchParams)
    const q = searchParams.get('page');
    console.log("query", q);

    return (
      <Box>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Avatar sx={{width: 70, height: 70}} src="/broken-image.jpg" />
              <Typography component="span" sx={{color: "black", fontWeight: "bold"}}>Abhinay chaturvedi</Typography>
              <Typography component="span" sx={{color: "gray"}}>abhinay@gmail.com</Typography>
          </Box>
          <Divider />
          <Box>
              <Stack>
                  <Box component={Link} href="/user/dashboard" sx={{display: "flex", bgcolor: !q?"white":"", gap: 2,alignItems: "center", p: "10px"}}>
                      <DashboardIcon/>
                      <Typography component="span" sx={{color: "gray", fontWeight: "bold"}}>Dashboard</Typography>
                  </Box>
                  <Divider sx={{width: "100%"}} />
                  <Box component={Link} href="/user/dashboard/?page=services" sx={{bgcolor: q==="services"?"white":"",display: "flex", gap: 2,alignItems: "center", p: "10px"}}>
                      <DashboardIcon/>
                      <Typography component="span" sx={{color: "gray", fontWeight: "bold"}}>Services</Typography>
                  </Box>
                  <Divider sx={{width: "100%"}} />
                  <Box component={Link} href="/user/dashboard/?page=info" sx={{bgcolor: q==="info"?"white":"", display: "flex", gap: 2,alignItems: "center", p: "10px"}}>
                      <DashboardIcon/>
                      <Typography component="span" sx={{color: "gray", fontWeight: "bold"}}>Info</Typography>
                  </Box>
                  <Divider sx={{width: "100%"}} />
                  <Box component={Link} href="/user/dashboard/?page=process" sx={{bgcolor: q==="process"?"white":"", display: "flex", gap: 2,alignItems: "center", p: "10px"}}>
                      <DashboardIcon/>
                      <Typography component="span" sx={{color: "gray", fontWeight: "bold"}}>Track Process</Typography>
                  </Box>
                  <Divider sx={{width: "100%"}} />
                  <Box component={Link} href="/user/dashboard/?page=documents" sx={{bgcolor: q==="documents"?"white":"", display: "flex", gap: 2,alignItems: "center", p: "10px"}}>
                      <DashboardIcon/>
                      <Typography component="span" sx={{color: "gray", fontWeight: "bold"}}>Documents</Typography>
                  </Box>

              </Stack>
          </Box>
      </Box>
    )
}

export default LeftBar