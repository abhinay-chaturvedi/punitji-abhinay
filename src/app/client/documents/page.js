// import DocumentPage from '@/components/UserDashboard/Document/DocumentPage'
// import DocumentPage from '@/components/documents-upload/Document/DocumentPage'

import { Box } from '@mui/material'
import React from 'react'
import DocumentPage from './DocumentPage'

const Page = () => {
  return (
    <Box sx={{p: "10px"}}>
        <DocumentPage/>
    </Box>
  )
}

export default Page