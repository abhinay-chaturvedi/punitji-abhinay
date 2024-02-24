"use client"
// import DocumentStepper from '@/components/UserDashboard/ProcessPage/ProcessStepper'
import { UserContext } from '@/contexts/user/context'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import DocumentStepper from './ProcessStepper'

const ProcessPage = () => {
  const userDetail = useContext(UserContext);
  console.log("🚀 ~ file: ProcessPage.jsx:6 ~ ProcessPage ~ userDetail:", userDetail)
  return (
    <Box>
        <Box>
            <Typography sx={{fontWeight: "bold", textAlign: "center", fontSize: "20px", paddingTop: "10px"}}>Your Process</Typography>
        </Box>
        <Box>
            <DocumentStepper userDetail={userDetail.state}/>
        </Box>
    </Box>
  )
}

export default ProcessPage