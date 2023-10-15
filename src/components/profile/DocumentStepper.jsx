import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import Divider from '@mui/material/Divider';
import ForwardIcon from '@mui/icons-material/Forward';
const DocumentStepper = () => {
  return (
    <Box>
        <Stack>
            <Row/>
            <Divider  flexItem />
            <Row/>
            <Divider  flexItem />
            <Row/>
            <Divider  flexItem />
            <Row/>
            <Divider  flexItem />
        </Stack>
    </Box>
  )
}

export default DocumentStepper

const Row = () => {
    const date = new Date();
    const string = date.toLocaleString();
    return (
        <Stack direction="row" alignItems="center">
                <Box flex={1} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Box sx={{width: 3, height: 20, bgcolor: "#eae1ca"}}></Box>
                    <Box
                     sx={{border: "3px solid #eae1ca", bgcolor: "white", borderRadius: "50%", padding: "2px", width: 40, height: 40, display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <TelegramIcon/>
                    </Box>
                    <Box sx={{width: 2, height: 20, bgcolor: "#eae1ca"}}></Box>
                </Box>
                <Box flex={1}>
                    <ForwardIcon/>
                </Box>
                <Box flex={10}>
                    <Typography>Passport</Typography>
                    <Typography>{string}</Typography>
                </Box>
            </Stack>
    )
}