import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import BasicDetails from './BasicDetails'
import PreviousRefusals from '../client/PreviousRefusals'
import SpouseEducation from './SpouseEducation'
import SpouseWorkExperience from './SpouseWorkExperience'
import SpouseLanguage from './SpouseLanguage'
import db from '@/lib/db'
import PersonalTies from '../client/PersonalTies'

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
    const refusals = spouseDetails == null? []: spouseDetails.previousRefusal;
    const personalTies = spouseDetails == null? {}: spouseDetails.personalTies == null? {}: spouseDetails.personalTies

    const updateProfile = async (userId, field, data) => {
        "use server"
        console.log(userId, field, data, "----------------");
        // return {data: {}};
        const res = await fetch(`${process.env.BASE_URL}/api/client/spouseDetails`, {
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
        <Container>
            <Typography sx={{textAlign: "center",m: "10px 0px", fontSize: "28px", fontWeight: "600"}}>Spouse Details</Typography>
            <BasicDetails basicDetail={basicDetail}/>
            
            <SpouseEducation userId={session._id} education={education}/>
            <SpouseWorkExperience userId={session._id} workExperience={workExperience}/>
            <SpouseLanguage userId={session._id} languages={languages}/>
            <PreviousRefusals userId={session._id} refusals={refusals} updateProfile={updateProfile} />
            <PersonalTies userId={session._id} personalTies={personalTies} updateProfile={updateProfile}/>
        </Container>
    </Box>
  )
}

export default SpouseDetail