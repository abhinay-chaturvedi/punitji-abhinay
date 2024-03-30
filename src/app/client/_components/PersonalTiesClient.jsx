import PersonalTies from '@/components/client/PersonalTies'
import { Box } from '@mui/material'
import React from 'react'

const PersonalTiesClient = ({userId, personalTies, updateProfile}) => {
  return (
    <Box>
        <PersonalTies userId={userId} personalTies={personalTies} updateProfile={updateProfile}/>
    </Box>
  )
}

export default PersonalTiesClient