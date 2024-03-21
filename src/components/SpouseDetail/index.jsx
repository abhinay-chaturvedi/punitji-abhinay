import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import BasicDetails from './BasicDetails'
import PreviousRefusals from './PreviousRefusals'
import PersonalTies from './PersonalTies'
import SpouseEducation from './SpouseEducation'
import SpouseWorkExperience from './SpouseWorkExperience'
import SpouseLanguage from './SpouseLanguage'
import db from '@/lib/db'

const SpouseDetail = async ({session}) => {
    const spouseDetails = await db.spouseDetail.findUnique({
        where: {
            userId: session._id
        }
    });
    // const spouseDetails = await db.spouseDetail.findMany();
    console.log("🚀 ~ SpouseDetail ~ spouseDetails:", spouseDetails)
    const basicDetail = {
        name: spouseDetails==null? null: spouseDetails.name,
        email: spouseDetails==null? null: spouseDetails.email,
        phone: spouseDetails==null? null: spouseDetails.phone,
        dob: spouseDetails==null? null: spouseDetails.dob,
        userId: session._id
    }
    const education = spouseDetails==null? []: spouseDetails.education;
    const languages = spouseDetails==null? []: spouseDetails.language;
    const workExperience = spouseDetails==null? []: spouseDetails.workExperience;
  return (
    <Box>
        <Container>
            <Typography sx={{textAlign: "center",m: "10px 0px", fontSize: "28px", fontWeight: "600"}}>Spouse Details</Typography>
            <BasicDetails basicDetail={basicDetail}/>
            <PreviousRefusals />
            <PersonalTies/>
            <SpouseEducation userId={session._id} education={education}/>
            <SpouseWorkExperience userId={session._id} workExperience={workExperience}/>
            <SpouseLanguage userId={session._id} languages={languages}/>
        </Container>
    </Box>
  )
}

export default SpouseDetail