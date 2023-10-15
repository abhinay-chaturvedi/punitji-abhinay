'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LeftBar from '@/components/profile/LeftBar';
import SideBar from '@/components/profile/SideBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  // height: "100%"
}));

export default function Page() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "1276px", marginX: "auto" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Item>
            <LeftBar/>
          </Item>
        </Grid>
        <Grid item xs={12} md={9} style={{flex: 1}}>
          <Item>
            <SideBar/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}