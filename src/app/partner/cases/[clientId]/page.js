import ClientProfile from '@/components/ClientProfile'
import { Box } from '@mui/material'
import React from 'react'

const Page = ({params}) => {
    console.log(params)
  return (
    <Box>
        <ClientProfile params={params}/>
    </Box>
  )
}

export default Page