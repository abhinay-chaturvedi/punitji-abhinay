"use client"

import Loader from "@/components/Loader"
import { Box } from "@mui/material"

export default function Loading() {
    // Or a custom loading skeleton component
    return <Box sx={{width: "100%", height: "100vh"}}><Loader/> hi checking loader</Box>
  }