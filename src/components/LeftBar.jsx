'use client'
import React, { useContext } from 'react'
import {Box, Typography, Stack, Avatar} from "@mui/material"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import FolderIcon from '@mui/icons-material/Folder';
import PeopleIcon from '@mui/icons-material/People';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { useSearchParams } from 'next/navigation'
import { UserContext } from '@/contexts/user/context';

const LeftBar = () => {
    const searchParams = useSearchParams();
    // console.log("--------------------", searchParams)
    const q = searchParams.get('page');
    console.log("query", q);
    const user = useContext(UserContext);
    console.log(user)

    return (
      <Box>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Avatar sx={{width: 70, height: 70}} src="/broken-image.jpg" />
              <Typography component="span" sx={{color: "black", fontWeight: "bold"}}>{user.state.name}</Typography>
              <Typography component="span" sx={{color: "gray"}}>{user.state.email}</Typography>
          </Box>
          <Divider />
          <Box>
              <Stack>
                  <Box component={Link} href={`/${user.state.role === "USER"? "user": "partner"}`} sx={{display: "flex",color: "#520670", bgcolor: !q?"white":"", gap: 2,alignItems: "center", p: "10px"}}>
                      <DashboardIcon/>
                      <Typography component="span" sx={{color: "black", fontWeight: "bold"}}>Dashboard</Typography>
                  </Box>
                  {
                    user.state.role === "USER" &&
                    <Box component={Link} href={`/${user.state.role === "USER"? "user": "partner"}/?page=process`} sx={{color: "#520670", bgcolor: q==="process"?"white":"", display: "flex", gap: 2,alignItems: "center", p: "10px"}}>
                        <TrackChangesIcon/>
                        <Typography component="span" sx={{color: "black", fontWeight: "bold"}}>Track Process</Typography>
                    </Box>
                  }
                  {
                    user.state.role === "PARTNER" &&
                    <Box component={Link} href={`/partner/?page=pclients`} sx={{color: "#520670", bgcolor: q==="pclients"? "white": "", display: "flex", gap: 2,alignItems: "center", p: "10px"}}>
                        <AccessibilityNewIcon/>
                        <Typography component="span" sx={{color: "black", fontWeight: "bold"}}>Processed Clients</Typography>
                    </Box>
                  }
                  <Divider sx={{width: "100%"}} />
                  {
                    user.state.role === "USER" &&
                    <Box component={Link} href={`/${user.state.role === "USER"? "user": "partner"}/?page=documents`} sx={{color: "#520670", bgcolor: q==="documents"?"white":"", display: "flex", gap: 2,alignItems: "center", p: "10px"}}>
                      <FolderIcon/>
                      <Typography component="span" sx={{color: "black", fontWeight: "bold"}}>Documents</Typography>
                    </Box>
                  }
                  {
                    user.state.role === "PARTNER" &&
                    <Box component={Link} href={`/partner/?page=aclients`} sx={{color: "#520670", bgcolor: q==="aclients"? "white": "", display: "flex", gap: 2,alignItems: "center", p: "10px"}}>
                      <PeopleIcon/>
                      <Typography component="span" sx={{color: "black", fontWeight: "bold"}}>Assigned Clients</Typography>
                    </Box>
                  }
              </Stack>
          </Box>
      </Box>
    )
}

export default LeftBar