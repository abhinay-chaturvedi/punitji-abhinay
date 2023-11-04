import DocumentStepper from '@/components/UserDashboard/ProcessPage/ProcessStepper'
import { Box, Typography } from '@mui/material'
import React from 'react'

const ProcessPage = () => {
  return (
    <Box>
        <Box>
            <Typography sx={{fontWeight: "bold", textAlign: "center", fontSize: "20px", mt: "10px"}}>Your Process</Typography>
        </Box>
        <Box>
            <DocumentStepper/>
        </Box>
    </Box>
  )
}

export default ProcessPage