import { Box } from '@mui/material'
import React from 'react'

const Row = ({item}) => {
    return (
        <Box component={"tr"}>
          <Box component={"td"}>{item.country}</Box>
          <Box component={"td"}>{item.year}</Box>
          {/* <Box component={"td"}>{dayjs(item.startDate).format("YYYY-MM-DD")}</Box>
          <Box component={"td"}>{dayjs(item.endDate).format("YYYY-MM-DD")}</Box> */}
          <Box component={"td"}>{item.fileCategory}</Box>
          <Box component={"td"}>{item.reason}</Box>
          <Box component={"td"}>{item.caipsNotes}</Box>
        </Box>
      )
}

export default Row