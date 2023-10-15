import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
const imageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png'
const LeftBar = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        <Box  sx={{width: "fit-content", display: "flex", flexDirection: "column", gap: 1}}>
          <div style={{width: "100%", display: "flex"}}>
              <Image src="/Media/profile.jpg" width={250} height={200}/>
          </div>
          <div>
              <Typography component="h1">Abhinay chaturvedi</Typography>
          </div>
          <div>
              <Typography component="h2">Email:</Typography>
              <Typography component="span">Abhinaychaturvedi@gmail.com</Typography>
          </div>
          <div>
              <Typography component="h2">Age:</Typography>
              <Typography component="span">23</Typography>
          </div>
          <div>
              <Typography component="h2">Gender:</Typography>
              <Typography component="span">Male</Typography>
          </div>
        </Box>
      </Stack>
    </Box>
  )
}

export default LeftBar