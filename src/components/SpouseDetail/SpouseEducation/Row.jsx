import { Box } from "@mui/material";
import dayjs from "dayjs";
import React from "react";

const Row = ({item}) => {
  return (
    <Box component={"tr"}>
      <Box component={"td"}>{item.type}</Box>
      <Box component={"td"}>{item.stream}</Box>
      <Box component={"td"}>{item.college}</Box>
      <Box component={"td"}>{dayjs(item.startDate).format("YYYY-MM-DD")}</Box>
      <Box component={"td"}>{dayjs(item.endDate).format("YYYY-MM-DD")}</Box>
      <Box component={"td"}>{item.country}</Box>
    </Box>
  );
};

export default Row;
