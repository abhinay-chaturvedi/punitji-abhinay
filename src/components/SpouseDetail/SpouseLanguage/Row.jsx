import { Box } from '@mui/material'
import React from 'react'

const Row = ({item}) => {
  return (
    <Box component={"tr"}>
      <Box component={"td"}>{item.type}</Box>
      <Box component={"td"}>{item.speaking}</Box>
      <Box component={"td"}>{item.listening}</Box>
      <Box component={"td"}>{item.reading}</Box>
      <Box component={"td"}>{item.writing}</Box>
      <Box component={"td"}>{item.overall}</Box>
    </Box>
  )
}

export default Row