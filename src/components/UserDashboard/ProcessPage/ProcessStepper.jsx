import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import Divider from '@mui/material/Divider';
import ForwardIcon from '@mui/icons-material/Forward';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import VerifiedIcon from '@mui/icons-material/Verified';
const DocumentStepper = () => {
  return (
    <Box>
        <Stack>
            <Row marked={true}/>
            <Divider  flexItem />
            <Row marked={true}/>
            <Divider  flexItem />
            <Row marked={false}/>
            <Divider  flexItem />
            <Row marked={false}/>
            <Divider  flexItem />
        </Stack>
    </Box>
  )
}

export default DocumentStepper

const Row = ({marked}) => {
    
    const [completedDate, setCompletedDate] = useState("");
    useEffect(() => {
        const date = new Date();
        const string = date.toLocaleString();
        setCompletedDate(string);
    })
    return (
        <Stack direction="row" alignItems="center">
                <Box flex={1} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Box sx={{width: 3, height: 20, bgcolor: "#eae1ca"}}></Box>
                    <Box
                     sx={{border: "3px solid #eae1ca", bgcolor: "white", borderRadius: "50%", padding: "2px", width: 40, height: 40, display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {marked? <VerifiedIcon/>: <UnpublishedIcon/>}
                    </Box>
                    <Box sx={{width: 2, height: 20, bgcolor: "#eae1ca"}}></Box>
                </Box>
                <Box flex={1}>
                    <ForwardIcon/>
                </Box>
                <Box  flex={10} sx={{display: "flex", justifyContent: "space-between",alignItems: "center"}}>
                <Box>
                    <Typography>Passport</Typography>
                    <Typography>{completedDate}</Typography>
                </Box>
                <Typography sx={{mr: "10px", color: marked? "green": "gray", fontWeight: "bold"}}>{marked? "Completed": "Under Process"}</Typography>
                </Box>
            </Stack>
    )
}