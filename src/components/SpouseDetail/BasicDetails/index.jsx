import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from './Card'

const BasicDetails = ({basicDetail, session}) => {
  return (
    <Box>
        <Box sx={{display: {md: "flex"}, gap: "10px", flexWrap: "wrap"}}>
            <Card session={session} value={basicDetail.name} label={"Name"} title="name" userId={basicDetail.userId}/>
            <Card session={session} value={basicDetail.email} label={"Email"} title={"email"} userId={basicDetail.userId}/>
            <Card session={session} value={basicDetail.dob} label={"Date of Birth"} title={"dob"} userId={basicDetail.userId}/>
            <Card session={session} value={basicDetail.phone} label={"Phone"} title={"phone"} userId={basicDetail.userId}/>
        </Box> 
    </Box>
  )
}

export default BasicDetails