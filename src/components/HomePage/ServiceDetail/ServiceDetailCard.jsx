import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ServiceDetailCard = () => {
  return (
    <Box sx={{borderRadius: "10px", p: "20px", backgroundColor: "#EFF2F5"}}>
        <Stack gap={2}>
            <Box sx={{width: "75px", height: "75px", borderRadius: "15px", transform: "skew(8deg)"}}>
              <Image src={"/images/service1.png"} width={0} height={0} style={{width: "100%", height: "100%",  }}/>
            </Box>
            <Typography component="h3" sx={{fontWeight: "bold", color: "#222222", fontSize: "22px"}}>Online Visa Application</Typography>
            <Typography component="p" sx={{color: "#555555"}}>
                There are many variations of the passages available but the majority have suffered to the alteration in some form injected humour.
            </Typography>
        </Stack>
    </Box>
  )
}

export default ServiceDetailCard