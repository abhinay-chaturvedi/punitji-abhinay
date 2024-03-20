"use client"
import { Box } from '@mui/material'
import React, { useState } from 'react'
import Row from './Row';
import AddForm from './AddForm';

const SpouseLanguage = ({userId, languages}) => {
  const [languageList, setLanguageList] = useState(languages);
  return (
    <Box>
    <Box sx={{ overflow: "auto" }}>
      <Box component={"table"} sx={{ width: "100%", textAlign: "left" }}>
        <Box component={"thead"}>
          <Box component={"tr"}>
            <Box component={"th"} sx={{ minWidth: "150px" }}>
              Type
            </Box>
            <Box component={"th"} sx={{ minWidth: "150px" }}>
              Speaking
            </Box>
            <Box component={"th"} sx={{ minWidth: "150px" }}>
              Listening
            </Box>
            <Box component={"th"} sx={{ minWidth: "100px" }}>
              Reading
            </Box>
            <Box component={"th"} sx={{ minWidth: "130px" }}>
              Writing
            </Box>
            <Box component={"th"} sx={{ minWidth: "100px" }}>
              Overall
            </Box>
          </Box>
        </Box>
        <Box component={"tbody"}>
          {languageList?.map((item, index) => {
            return <Row key={item.id} item={item} />;
          })}
        </Box>
      </Box>
    </Box>
    <Box>
      {/* here add form will be there */}
        <AddForm userId={userId} setLanguageList={setLanguageList}/>
    </Box>
    </Box>
  )
}

export default SpouseLanguage