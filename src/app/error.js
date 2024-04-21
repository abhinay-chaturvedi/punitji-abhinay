"use client"

import { Box, Button, Container, Typography } from "@mui/material";

const Error= ({error, reset}) => {
  console.log("🚀 ~ Error ~ reset:", reset)
  console.log("🚀 ~ Error ~ error:", error)
  return (
    <Box>
      <Container>
        <Box sx={{width: "100%", height: "100vh", gap: "4px", display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Typography sx={{fontWeight: "bold", fontSize: "20px"}}>Hello there! Apologies for any inconvenience caused. Let's try again.</Typography>
          <Typography sx={{fontWeight: "bold"}}>{error.message}</Typography>
          <Button onClick={() => reset()} sx={{bgcolor: "skyblue", color: "black"}}>Retry</Button>
        </Box>
        
      </Container>
    </Box>
  )
}

export default Error