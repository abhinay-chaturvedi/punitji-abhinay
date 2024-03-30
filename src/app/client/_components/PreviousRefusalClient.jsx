import PreviousRefusals from '@/components/client/PreviousRefusals'
import React from 'react'

const PreviousRefusalClient = ({userId, refusals, updateProfile}) => {
  return (
    <PreviousRefusals  userId={userId} refusals={refusals} updateProfile={updateProfile}/>
  )
}

export default PreviousRefusalClient