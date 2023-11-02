import DocumentStepper from '@/components/UserDashboard/ProcessPage/ProcessStepper'
import { Box, Typography } from '@mui/material'
import React from 'react'

const ProcessPage = () => {
  return (
    <Box>
        <Box>
            <Typography>Your Process</Typography>
        </Box>
        <Box>
            <DocumentStepper/>
        </Box>
    </Box>
  )
}

export default ProcessPage