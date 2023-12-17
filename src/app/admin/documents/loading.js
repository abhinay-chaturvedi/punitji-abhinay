import Loader from '@/components/Loader'
import { Box } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Box sx={{width: "100%", height: "90vh"}}>
      <Loader/>
    </Box>
  )
}

export default Loading