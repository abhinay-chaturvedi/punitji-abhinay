import { Box, Button, FormControl, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BasicDatePicker from '@/components/Date';
import MainApplication from './MainApplication';
import Education from './Education';
import WorkExperience from './WorkExperience';
import LanguageTest from './LanguageTest';
const ProfileDetailPage = () => {
  return (
    <Box>
      <MainApplication/>
      <Education/>
      <WorkExperience/>
      <LanguageTest/>
    </Box>
  )
}

export default ProfileDetailPage