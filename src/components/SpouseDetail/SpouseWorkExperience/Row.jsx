import { Box } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'

const Row = ({item}) => {
  return (
    <Box component={"tr"}>
      <Box component={"td"}>{item.jobTitle}</Box>
      <Box component={"td"}>{item.company}</Box>
      <Box component={"td"}>{dayjs(item.startDate).format("YYYY-MM-DD")}</Box>
      <Box component={"td"}>{dayjs(item.endDate).format("YYYY-MM-DD")}</Box>
      <Box component={"td"}>{item.country}</Box>
    </Box>
  )
}

export default Row