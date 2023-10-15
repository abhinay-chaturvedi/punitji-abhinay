import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ProcessStep from './ProcessStep'
import DocumentStepper from './DocumentStepper'

const SideBar = () => {
  return (
    <Box sx={{width: "100%"}}>
        <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
                <Box sx={{display: "flex", flexDirection: "column",justifyContent:"space-evenly"}} flex={3}>
                    <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
                        <Typography component="h1" sx={{fontWeight: "bold", fontSize: "25px"}}>Student Visa(500)</Typography>
                        <Typography component="h1">{new Date().toDateString()}</Typography>
                        <Typography component="span">Canada</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontWeight: "bold", color: "gray"}} component="h4">technical institute(india)</Typography>
                    </Box>
                </Box>
                <Box 
                 flex={9} 
                 sx={{bgcolor: "white", display: "flex", flexDirection: "column", alignItems: "center", gap: 5}}
                >
                    <Typography sx={{fontWeight: "bold", fontSize: "25px"}}>Visa Process</Typography>
                    <Box sx={{display: "flex"}}>
                        <ProcessStep color = "#2596be" title = "Evalution"/>
                        <ProcessStep color = "#bea925" title = "Reference"/>
                        <ProcessStep color = "#145369" title = "Registration"/>
                        <ProcessStep color = "#be2596" title = "Documentation"/>
                        <ProcessStep color = "#49be25" title = "Processing"/>
                        <ProcessStep color = "#2596be" title = "Visa Outcome"/>
                    </Box>
                </Box>
            </Stack>
            <Stack>
                <Box>
                    <Typography>Documents Upload</Typography>
                </Box>
                <Box>
                    <DocumentStepper/>
                </Box>
            </Stack>
        </Stack>    
    </Box>
  )
}

export default SideBar