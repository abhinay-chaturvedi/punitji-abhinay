import DocumentStepper from '@/components/UserDashboard/ProcessPage/ProcessStepper'
import { Box, Typography } from '@mui/material'
import React from 'react'

const ProcessPage = ({userDetail}) => {
  console.log("🚀 ~ file: ProcessPage.jsx:6 ~ ProcessPage ~ userDetail:", userDetail)
  return (
    <Box>
        <Box>
            <Typography sx={{fontWeight: "bold", textAlign: "center", fontSize: "20px", mt: "10px"}}>Your Process</Typography>
        </Box>
        <Box>
            <DocumentStepper userDetail={userDetail}/>
        </Box>
    </Box>
  )
}

export default ProcessPage