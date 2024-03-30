import { Box } from '@mui/material'
import React from 'react'

import MainApplication from './MainApplication';
import Education from './Education';
import WorkExperience from './WorkExperience';
import LanguageTest from './LanguageTest';
// import PreviousRefusal from './PreviousRefusalClient';
import PreviousRefusalClient from './PreviousRefusalClient';
import PersonalTiesClient from './PersonalTiesClient';

const ProfileDetailPage = ({ userId, refusals, personalTies }) => {

  const updateProfile = async (userId, field, data) => {
    "use server"
    const res = await fetch(`${process.env.BASE_URL}/api/client`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({userId: userId, field: field, value: data})
    })
    const result = await res.json();
    return result;
  }
  return (
    <Box>
      <MainApplication userId={userId}/>
      <Education userId={userId} />
      <WorkExperience userId={userId}/>
      <LanguageTest userId={userId}/>
      <PreviousRefusalClient userId={userId} refusals={refusals} updateProfile={updateProfile}/>
      <PersonalTiesClient userId={userId} personalTies={personalTies} updateProfile={updateProfile}/>
    </Box>
  )
}

export default ProfileDetailPage