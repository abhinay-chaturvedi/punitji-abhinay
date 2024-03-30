"use client"
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Row from './Row';
import AddForm from './AddForm';

const PreviousRefusals = ({userId, refusals, updateProfile}) => {
  const [refusalList, setRefusalList] = useState(refusals);
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          m: "10px 0px",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        Previous Refusals
      </Typography>
      {/*  here is the table of the work Experience */}
      <Box sx={{ overflow: "auto" }}>
        <Box component={"table"} sx={{ width: "100%", textAlign: "left" }}>
          <Box component={"thead"}>
            <Box component={"tr"}>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Country
              </Box>
              <Box component={"th"} sx={{ minWidth: "150px" }}>
                Year
              </Box>

              <Box component={"th"} sx={{ minWidth: "100px" }}>
                File Category
              </Box>
              <Box component={"th"} sx={{ minWidth: "100px" }}>
                Reason
              </Box>
              <Box component={"th"} sx={{ minWidth: "100px" }}>
                CAIPS Notes
              </Box>
            </Box>
          </Box>
          <Box component={"tbody"}>
            {refusalList?.map((item, index) => {
              return <Row key={item.id} item={item} />;
            })}
          </Box>
        </Box>
      </Box>
      <Box>
        <AddForm
          userId={userId}
          setRefusalList={setRefusalList}
          updateProfile={updateProfile}
        />
      </Box>
    </Box>
  );
}

export default PreviousRefusals