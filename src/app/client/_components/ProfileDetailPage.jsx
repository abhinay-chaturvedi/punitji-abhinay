"use client";
import { Box, Button, FormControl, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BasicDatePicker from '@/components/Date';
import MainApplication from './MainApplication';
import Education from './Education';
import WorkExperience from './WorkExperience';
import LanguageTest from './LanguageTest';
import { UserContext } from '@/contexts/user/context';
import { getApplicationDetail } from '@/services/client/mainApplication';
import Loader from '@/components/Loader';
const ProfileDetailPage = ({ userId }) => {
  console.log("revalidate check", userId);
  const [mainApplicationDetail, setMainApplicationDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { state: userState, dispatch: dispatchUserAction } =
    useContext(UserContext);
    // const fetchApplicationDetail = async () => {
    //   try {
    //     // const userId = userState.id;
    //     const result = await getApplicationDetail(userId);
    //     console.log(
    //       "🚀 ~ file: MainApplication.jsx:60 ~ fetchApplicationDetail ~ result:",
    //       result
    //     );
    //     setMainApplicationDetail(result.data);
    //     setIsLoading(false);
    //   } catch (err) {
    //     console.log(
    //       "🚀 ~ file: MainApplication.jsx:60 ~ fetchApplicationDetail ~ err:",
    //       err
    //     );
    //     setIsLoading(false);
    //   }
    // };
    // useEffect(() => {
    //   fetchApplicationDetail();
    // }, []);
    // if(isLoading) {
    //   return (
    //     <Box sx={{width: "100%", height: "80vh"}}>
    //       <Loader/>
    //     </Box>
    //   )
    // }
  return (
    <Box>
      <MainApplication userState={userState} userId={userId} mainApplicationDetail={mainApplicationDetail} setMainApplicationDetail={setMainApplicationDetail}/>
      <Education userId={userId} />
      <WorkExperience userId={userId}/>
      <LanguageTest userId={userId}/>
    </Box>
  )
}

export default ProfileDetailPage